import { configureStore, Action, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "./types";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appReducer } from "./reducers/app-reducer";
import { userReducer, searchChannelReducer } from "./reducers/user-reducer";
import {
  sChannelReducer,
  userDetailReducer,
  topCategoryReducer,
  topStreamReducer,
  followedChannelsReducer,
  followedUsersDetailsReducer,
  followingStreamsReducer,
  userStreamInfoReducer,
  usersReducer,
  emoteReducer,
  badgesReducer,
} from "./api/slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  emote: emoteReducer,
  badges: badgesReducer,
  searchUsers: usersReducer,
  searchChannelState: searchChannelReducer,
  searchChannelDetail: sChannelReducer,
  userId: userDetailReducer,
  topCategory: topCategoryReducer,
  topStream: topStreamReducer,
  followingStreams: followingStreamsReducer,
  userStreamInfo: userStreamInfoReducer,
  followedChannels: followedChannelsReducer,
  followedUsersDetails: followedUsersDetailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;
