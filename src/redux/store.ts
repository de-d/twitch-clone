import { configureStore, Action, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "./types";
import { userReducer, searchChannelReducer } from "./reducers/user-reducer";
import { sChannelReducer, userDetailReducer, topCategoryReducer, topStreamReducer } from "./api/slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    searchChannelState: searchChannelReducer,
    searchChannelDetail: sChannelReducer,
    userId: userDetailReducer,
    topCategory: topCategoryReducer,
    topStream: topStreamReducer,
  },
});

export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;
