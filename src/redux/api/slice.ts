import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchChannels, fetchUserID, fetchTopCategories, fetchTopStreams, fetchUsers } from "./actions";
import { SearchTwitchChannel, UserState, topCategory, topStream, TwitchUsersData } from "../types";

const searchChannelInitialState: SearchTwitchChannel[] = [];

const searchChannelSlice = createSlice({
  name: "searchChannel",
  initialState: searchChannelInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchChannels.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const setUserIDAction: UserState[] = [];

const userSlice = createSlice({
  name: "user",
  initialState: setUserIDAction,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserID.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const topCategoryInitialState: topCategory[] = [];

const topCategorySlice = createSlice({
  name: "topCategory",
  initialState: topCategoryInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopCategories.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const topStreamInitialState: topStream[] = [];

const topStreamSlice = createSlice({
  name: "topStream",
  initialState: topStreamInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopStreams.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const usersInitialState: TwitchUsersData[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const sChannelReducer = searchChannelSlice.reducer;
export const userDetailReducer = userSlice.reducer;
export const topCategoryReducer = topCategorySlice.reducer;
export const topStreamReducer = topStreamSlice.reducer;
export const usersReducer = usersSlice.reducer;
