import cinemaImg from "@/assets/imgs/cinematic-streak.jpg";
const baseDate = new Date("2025-08-26T12:00:00");

export type Campaign = {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  startDate: Date;
  endDate: Date;
  frequency: string;
  minStreakLength: number;
  contentRequirements: string;
  rewards: string;
  prizePool: number;
  isOpen: boolean;
  createdBy: string;
  creatorImg: string;
};

const campaigns: Campaign[] = [
  {
    id: 1,
    name: "Cinematic streak",
    description: "A creator first Web3 Experience",
    category: "Onscript",
    image: cinemaImg.src,
    startDate: baseDate,
    endDate: new Date(baseDate.getTime() + 7 * 24 * 60 * 60 * 1000),
    frequency: "Daily",
    minStreakLength: 2,
    contentRequirements: "Join the wait list for onscript",
    rewards: "Top 3 streak wins free pass to use the application.",
    prizePool: 100,
    isOpen: true,
    createdBy: "@ateh",
    creatorImg:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6ca472f8-cd72-4a0f-c71c-9dfc6cf4bc00/original",
  },
];
// const campaigns = [
//   {
//     name: "Onchain Summer",
//     description:
//       "A 20-day streak challenge celebrating music NFTs. Post daily about your favorite blockchain-based music releases.",
//     category: "Music",
//     images: [img1.src, img2.src, img3.src, img4.src],
//     startDate: daysFromNow(-2),
//     endDate: daysFromNow(18),
//     frequency: "Daily",
//     minStreakLength: 2,
//     contentRequirements:
//       "Post a photo or video with a short caption highlighting a new or favorite Web3 music artist. Tag the artist if possible.",
//     rewards:
//       "Top 3 streak holders win exclusive NFT album drops and backstage pass tokens.",
//     prizePool: 100,
//     isOpen: true,
//   },
//   {
//     name: "Code for Climate",
//     description:
//       "A developer-focused awareness campaign for climate-friendly coding practices. Share your eco-friendly dev tips daily.",
//     category: "Tech",
//     images: [img2.src, img3.src, img4.src, img1.src],
//     startDate: daysFromNow(1),
//     endDate: daysFromNow(15),
//     frequency: "Daily",
//     minStreakLength: 5,
//     contentRequirements:
//       "Share a tip, code snippet, or tool that helps reduce energy usage in coding or hosting.",
//     rewards:
//       "Earn carbon offset NFTs and badges. Top streaks win green tech gadgets.",
//     prizePool: 200,
//     isOpen: true,
//   },
//   {
//     name: "Foodie Week",
//     description:
//       "A 7-day streak to share unique dishes from around the world. Show your cooking or dining adventures.",
//     category: "Food",
//     images: [img3.src, img4.src, img1.src, img2.src],
//     startDate: daysFromNow(-5),
//     endDate: daysFromNow(2),
//     frequency: "Daily",
//     minStreakLength: 3,
//     contentRequirements:
//       "Post a photo of a dish (homemade or restaurant) with its origin and any personal twist you added.",
//     rewards:
//       "Free food vouchers and digital recipe book for all streak finishers.",
//     prizePool: 50,
//     isOpen: false,
//   },
//   {
//     name: "Morning Run Challenge",
//     description:
//       "A health campaign to motivate morning exercise. Share your morning run progress every other day.",
//     category: "Fitness",
//     images: [img4.src, img1.src, img2.src, img3.src],
//     startDate: daysFromNow(0),
//     endDate: daysFromNow(30),
//     frequency: "Every 2 Days",
//     minStreakLength: 4,
//     contentRequirements:
//       "Post a screenshot of your run tracking app or a photo from your running route.",
//     rewards:
//       "Fitness NFTs, branded sportswear, and training app subscriptions.",
//     prizePool: 150,
//     isOpen: true,
//   },
//   {
//     name: "Art Drop Friday",
//     description:
//       "A creative streak for artists. Post your original art once a week, every Friday, for 6 weeks.",
//     category: "Art",
//     images: [img1.src, img3.src, img4.src, img2.src],
//     startDate: daysFromNow(3),
//     endDate: daysFromNow(45),
//     frequency: "Weekly",
//     minStreakLength: 2,
//     contentRequirements:
//       "Post a digital or physical artwork you created. Include a short description or backstory.",
//     rewards:
//       "Feature on the campaign’s NFT gallery, plus tokenized royalties for selected artworks.",
//     prizePool: 300,
//     isOpen: true,
//   },
// ];

export default campaigns;
