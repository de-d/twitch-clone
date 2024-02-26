import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchTwitchChannel, UserState, topCategory, topStream } from "../types";
import { RootState } from "../types";

export const fetchSearchChannels = createAsyncThunk<SearchTwitchChannel[], string, { state: RootState }>(
  "api/fetchSearchChannels",
  async (channelName, { rejectWithValue }) => {
    const userToken = localStorage.getItem("access_token");
    try {
      const response = await fetch(`https://api.twitch.tv/helix/search/channels?query=${channelName}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Client-Id": "YOUR_CLIENT_ID",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch channels");
    }
  }
);

export const fetchUserID = createAsyncThunk<UserState[], string, { state: RootState }>("api/fetchUserID", async (_, { rejectWithValue }) => {
  const userToken = localStorage.getItem("access_token");
  try {
    const response = await fetch(`https://id.twitch.tv/oauth2/validate`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue("Failed to fetch user id");
  }
});

export const fetchTopCategories = createAsyncThunk<topCategory[], string, { state: RootState }>(
  "api/fetchTopCategories",
  async (_, { rejectWithValue }) => {
    const userToken = localStorage.getItem("access_token");
    try {
      const response = await fetch(`https://api.twitch.tv/helix/games/top`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Client-Id": "YOUR_CLIENT_ID",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch top categories");
    }
  }
);

export const fetchTopStreams = createAsyncThunk<topStream[], string, { state: RootState }>("api/fetchTopStreams", async (_, { rejectWithValue }) => {
  const userToken = localStorage.getItem("access_token");
  try {
    const response = await fetch(`https://api.twitch.tv/helix/streams`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Client-Id": "YOUR_CLIENT_ID",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch top streams");
  }
});
