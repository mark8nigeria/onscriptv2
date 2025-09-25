import useAppDispatch from "./hooks/useAppDispatch";
import useAppSelector from "./hooks/useAppSelector";
import getDomainParts from "./functions/getDomainPart";
import formatScheduleDate from "./functions/formatScheduleDate";
import daysFromNow from "./functions/daysFromNow";
import shortenAddress from "./functions/shortenAddress";
import copyText from "./functions/copyText";
import useIsAddressOnChainAndPremium from "./hooks/useIsAddressOnChainAndPremium";
import useGetPremiumAmount from "./hooks/useGetPremiumAmount";
import useComeOnchain from "./hooks/useComeOnchain";
import useGoPremium from "./hooks/useGoPremium";

export {
  useAppDispatch,
  useAppSelector,
  getDomainParts,
  formatScheduleDate,
  daysFromNow,
  shortenAddress,
  copyText,
  useIsAddressOnChainAndPremium,
  useGetPremiumAmount,
  useComeOnchain,
  useGoPremium,
};
