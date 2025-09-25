import { UserRole } from "@/prisma/generated/prisma";
import { createSlice } from "@reduxjs/toolkit";
import { EnumValues } from "zod";

type initialStateType = {
  id?: string;
  walletAddress?: string;
  isUserOnChain: boolean;
  isUserPremium: boolean;
  isUserPlus: boolean;
  isLoading: boolean;
  isError: boolean;
  errorStateMent: string;

  profilePic?: string;
  username?: string;
  fid?: number;

  signerUuid?: string;
  isUuidApprove: boolean;

  role?: UserRole;
};

const initialState: initialStateType = {
  isError: false,
  errorStateMent: "",

  isLoading: false,

  isUserOnChain: false,
  isUserPlus: false,
  isUserPremium: false,

  isUuidApprove: false,
};

const timerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(
      state,
      action: {
        type: string;
        payload: {
          id: string;
          walletAddress: string;
          isUserOnChain: boolean;
          isUserPremium: boolean;
          isUserPlus: boolean;

          profilePic: string;
          username: string;
          fid: number;

          signerUuid: string;
          isUuidApprove: boolean;
          role: UserRole;
        };
      },
    ) {
      state.id = action.payload.id;
      state.walletAddress = action.payload.walletAddress;
      state.isUserOnChain = action.payload.isUserOnChain;
      state.isUserPremium = action.payload.isUserPremium;
      state.isUserPlus = action.payload.isUserPlus;
      state.profilePic = action.payload.profilePic;
      state.username = action.payload.username;
      state.fid = action.payload.fid;
      state.isUuidApprove = action.payload.isUuidApprove;
      state.signerUuid = action.payload.signerUuid;
      state.role = action.payload.role;
    },
    resetUser(state) {
      state.isError = initialState.isError;
      state.isLoading = initialState.isLoading;
      state.isUserOnChain = initialState.isUserOnChain;
      state.isUserPlus = initialState.isUserPlus;
      state.isUserPremium = initialState.isUserPremium;
      state.id = initialState.id;
      state.walletAddress = initialState.walletAddress;
      state.errorStateMent = initialState.errorStateMent;
      state.profilePic = initialState.profilePic;
      state.username = initialState.username;
      state.fid = initialState.fid;
      state.isUuidApprove = initialState.isUuidApprove;
      state.signerUuid = initialState.signerUuid;
      state.role = initialState.role;
    },
    setLoading(state, action: { type: string; payload: boolean }) {
      state.isLoading = action.payload;
    },
    setError(
      state,
      action: { type: string; payload: { message: string; isError: boolean } },
    ) {
      state.isError = action.payload.isError;
      state.errorStateMent = action.payload.message;
    },
    setOnChainState(
      state,
      action: {
        type: string;
        payload: {
          isUserOnChain: boolean;
          isUserPremium: boolean;
          isUserPlus: boolean;
        };
      },
    ) {
      state.isUserOnChain = action.payload.isUserOnChain;
      state.isUserPremium = action.payload.isUserPremium;
      state.isUserPlus = action.payload.isUserPlus;
    },
    setWalletAddress(state, action: { type: string; payload: string }) {
      state.walletAddress = action.payload;
    },
    setId(state, action: { type: string; payload: string }) {
      state.id = action.payload;
    },
    setDbState(
      state,
      action: {
        type: string;
        payload: {
          id: string;
          walletAddress: string;

          profilePic: string | null;
          username: string;
          fid: number;

          signerUuid: string | null;
          isUuidApprove: boolean;
          role: UserRole;
        };
      },
    ) {
      state.id = action.payload.id;
      state.walletAddress = action.payload.walletAddress;
      state.username = action.payload.username;
      state.fid = action.payload.fid;
      state.isUuidApprove = action.payload.isUuidApprove;
      state.role = action.payload.role;
      if (action.payload.signerUuid)
        state.signerUuid = action.payload.signerUuid;
      if (action.payload.profilePic)
        state.profilePic = action.payload.profilePic;
    },
    setUserPremium(state, action: { type: string; payload: boolean }) {
      state.isUserPremium = action.payload;
    },
    setUserIsOnchain(state, action: { type: string; payload: boolean }) {
      state.isUserOnChain = action.payload;
    },
    setUuidApprove(state, action: { type: string; payload: boolean }) {
      state.isUuidApprove = action.payload;
    },
    setUserIsPlus(state, action: { type: string; payload: boolean }) {
      state.isUserPlus = action.payload;
    },
    setDeletedOnChainDetails(state) {
      state.isUserOnChain = false;
      state.isUserPremium = false;
      state.isUserPlus = false;
    },
    setRole(state, action: { type: string; payload: UserRole }) {
      state.role = action.payload;
    },
  },
});

export const {
  setUserInfo,
  resetUser,
  setError,
  setId,
  setLoading,
  setOnChainState,
  setWalletAddress,
  setDbState,
  setUserIsPlus,
  setUserPremium,
  setUserIsOnchain,
  setUuidApprove,
  setDeletedOnChainDetails,
  setRole,
} = timerSlice.actions;
export default timerSlice.reducer;
