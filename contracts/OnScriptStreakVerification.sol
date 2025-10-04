// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title OnScriptStreakVerification
 * @dev Multi-chain compatible smart contract for streak verification
 * @author OnScript Team
 */
contract OnScriptStreakVerification is Ownable, ReentrancyGuard, Pausable {
    // Structs
    struct StreakCampaign {
        string campaignId;
        address creator;
        uint256 startTime;
        uint256 endTime;
        uint256 frequency; // seconds between submissions
        bool isActive;
        uint256 totalParticipants;
        mapping(address => bool) participants;
    }

    struct StreakSubmission {
        string contentHash;
        string contentUrl;
        uint256 timestamp;
        bool isVerified;
        uint256 weekNumber;
    }

    // State variables
    mapping(string => StreakCampaign) public campaigns;
    mapping(address => mapping(string => uint256)) public userStreaks; // user => campaignId => current streak
    mapping(address => mapping(string => uint256)) public userLongestStreaks; // user => campaignId => longest streak
    mapping(address => mapping(string => uint256)) public lastSubmissionTime; // user => campaignId => timestamp
    mapping(address => mapping(string => mapping(uint256 => StreakSubmission))) public submissions; // user => campaignId => weekNumber => submission
    mapping(address => mapping(string => uint256)) public submissionCount; // user => campaignId => count

    // Events
    event CampaignCreated(
        string indexed campaignId,
        address indexed creator,
        uint256 startTime,
        uint256 endTime,
        uint256 frequency
    );

    event StreakSubmissionMade(
        address indexed user,
        string indexed campaignId,
        string contentHash,
        string contentUrl,
        uint256 weekNumber,
        uint256 currentStreak,
        uint256 timestamp
    );

    event StreakBroken(
        address indexed user,
        string indexed campaignId,
        uint256 previousStreak,
        uint256 timestamp
    );

    event CampaignDeactivated(string indexed campaignId);

    // Modifiers
    modifier campaignExists(string memory campaignId) {
        require(campaigns[campaignId].creator != address(0), "Campaign does not exist");
        _;
    }

    modifier campaignActive(string memory campaignId) {
        require(campaigns[campaignId].isActive, "Campaign is not active");
        _;
    }

    modifier validSubmissionTime(string memory campaignId) {
        StreakCampaign storage campaign = campaigns[campaignId];
        require(block.timestamp >= campaign.startTime, "Campaign has not started");
        require(block.timestamp <= campaign.endTime, "Campaign has ended");
        _;
    }

    // Constructor
    constructor() {}

    /**
     * @dev Create a new streak campaign
     * @param campaignId Unique identifier for the campaign
     * @param startTime Campaign start timestamp
     * @param endTime Campaign end timestamp
     * @param frequency Minimum time between submissions in seconds
     */
    function createCampaign(
        string memory campaignId,
        uint256 startTime,
        uint256 endTime,
        uint256 frequency
    ) external onlyOwner {
        require(bytes(campaignId).length > 0, "Campaign ID cannot be empty");
        require(startTime > block.timestamp, "Start time must be in the future");
        require(endTime > startTime, "End time must be after start time");
        require(frequency > 0, "Frequency must be greater than 0");

        StreakCampaign storage campaign = campaigns[campaignId];
        require(campaign.creator == address(0), "Campaign already exists");

        campaign.campaignId = campaignId;
        campaign.creator = msg.sender;
        campaign.startTime = startTime;
        campaign.endTime = endTime;
        campaign.frequency = frequency;
        campaign.isActive = true;
        campaign.totalParticipants = 0;

        emit CampaignCreated(campaignId, msg.sender, startTime, endTime, frequency);
    }

    /**
     * @dev Submit a streak participation
     * @param campaignId Campaign identifier
     * @param contentHash Hash of the content for verification
     * @param contentUrl URL of the content (optional)
     */
    function submitStreakParticipation(
        string memory campaignId,
        string memory contentHash,
        string memory contentUrl
    ) external whenNotPaused campaignExists(campaignId) campaignActive(campaignId) validSubmissionTime(campaignId) {
        require(bytes(contentHash).length > 0, "Content hash cannot be empty");

        StreakCampaign storage campaign = campaigns[campaignId];
        uint256 currentTime = block.timestamp;
        uint256 lastSubmission = lastSubmissionTime[msg.sender][campaignId];

        // Check if enough time has passed since last submission
        if (lastSubmission > 0) {
            require(
                currentTime >= lastSubmission + campaign.frequency,
                "Not enough time has passed since last submission"
            );
        }

        // Calculate week number based on campaign start time
        uint256 weekNumber = ((currentTime - campaign.startTime) / (7 days)) + 1;

        // Check if this is a valid streak continuation
        bool isStreakValid = true;
        if (lastSubmission > 0) {
            // Check if submission is within the allowed window (frequency * 2)
            uint256 maxGap = campaign.frequency * 2;
            if (currentTime > lastSubmission + maxGap) {
                // Streak is broken
                isStreakValid = false;
                uint256 previousStreak = userStreaks[msg.sender][campaignId];
                userStreaks[msg.sender][campaignId] = 0;
                emit StreakBroken(msg.sender, campaignId, previousStreak, currentTime);
            }
        }

        // Update streak count
        if (isStreakValid) {
            userStreaks[msg.sender][campaignId]++;
            if (userStreaks[msg.sender][campaignId] > userLongestStreaks[msg.sender][campaignId]) {
                userLongestStreaks[msg.sender][campaignId] = userStreaks[msg.sender][campaignId];
            }
        } else {
            userStreaks[msg.sender][campaignId] = 1;
        }

        // Add participant if first time
        if (!campaign.participants[msg.sender]) {
            campaign.participants[msg.sender] = true;
            campaign.totalParticipants++;
        }

        // Store submission
        submissionCount[msg.sender][campaignId]++;
        submissions[msg.sender][campaignId][weekNumber] = StreakSubmission({
            contentHash: contentHash,
            contentUrl: contentUrl,
            timestamp: currentTime,
            isVerified: true,
            weekNumber: weekNumber
        });

        // Update last submission time
        lastSubmissionTime[msg.sender][campaignId] = currentTime;

        emit StreakSubmissionMade(
            msg.sender,
            campaignId,
            contentHash,
            contentUrl,
            weekNumber,
            userStreaks[msg.sender][campaignId],
            currentTime
        );
    }

    /**
     * @dev Get user's current streak for a campaign
     * @param user User address
     * @param campaignId Campaign identifier
     * @return Current streak count
     */
    function getCurrentStreak(address user, string memory campaignId) external view returns (uint256) {
        return userStreaks[user][campaignId];
    }

    /**
     * @dev Get user's longest streak for a campaign
     * @param user User address
     * @param campaignId Campaign identifier
     * @return Longest streak count
     */
    function getLongestStreak(address user, string memory campaignId) external view returns (uint256) {
        return userLongestStreaks[user][campaignId];
    }

    /**
     * @dev Get campaign details
     * @param campaignId Campaign identifier
     * @return creator Campaign creator
     * @return startTime Campaign start time
     * @return endTime Campaign end time
     * @return frequency Minimum time between submissions
     * @return isActive Whether campaign is active
     * @return totalParticipants Total number of participants
     */
    function getCampaignDetails(string memory campaignId) external view returns (
        address creator,
        uint256 startTime,
        uint256 endTime,
        uint256 frequency,
        bool isActive,
        uint256 totalParticipants
    ) {
        StreakCampaign storage campaign = campaigns[campaignId];
        require(campaign.creator != address(0), "Campaign does not exist");
        
        return (
            campaign.creator,
            campaign.startTime,
            campaign.endTime,
            campaign.frequency,
            campaign.isActive,
            campaign.totalParticipants
        );
    }

    /**
     * @dev Get user's submission for a specific week
     * @param user User address
     * @param campaignId Campaign identifier
     * @param weekNumber Week number
     * @return submission Submission details
     */
    function getSubmission(address user, string memory campaignId, uint256 weekNumber) external view returns (
        string memory contentHash,
        string memory contentUrl,
        uint256 timestamp,
        bool isVerified,
        uint256 submissionWeekNumber
    ) {
        StreakSubmission storage submission = submissions[user][campaignId][weekNumber];
        return (
            submission.contentHash,
            submission.contentUrl,
            submission.timestamp,
            submission.isVerified,
            submission.weekNumber
        );
    }

    /**
     * @dev Deactivate a campaign
     * @param campaignId Campaign identifier
     */
    function deactivateCampaign(string memory campaignId) external onlyOwner campaignExists(campaignId) {
        campaigns[campaignId].isActive = false;
        emit CampaignDeactivated(campaignId);
    }

    /**
     * @dev Pause the contract
     */
    function pause() external onlyOwner {
        _pause();
    }

    /**
     * @dev Unpause the contract
     */
    function unpause() external onlyOwner {
        _unpause();
    }

    /**
     * @dev Emergency function to update streak count (admin only)
     * @param user User address
     * @param campaignId Campaign identifier
     * @param newStreakCount New streak count
     */
    function emergencyUpdateStreak(
        address user,
        string memory campaignId,
        uint256 newStreakCount
    ) external onlyOwner campaignExists(campaignId) {
        userStreaks[user][campaignId] = newStreakCount;
        if (newStreakCount > userLongestStreaks[user][campaignId]) {
            userLongestStreaks[user][campaignId] = newStreakCount;
        }
    }
}


