import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchTwitchChannel, UserState, topCategory, topStream, TwitchUsersData, Emote, SubBadges } from "../types";
import { saveFollowedChannels } from "../actions/user-action";
import { RootState } from "../types";

export const fetchSearchChannels = createAsyncThunk<SearchTwitchChannel[], { channelName: string; accessToken: string }, { state: RootState }>(
  "api/fetchSearchChannels",
  async ({ channelName, accessToken }, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.twitch.tv/helix/search/channels?query=${channelName}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
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

export const fetchUserID = createAsyncThunk<UserState[], string, { state: RootState }>(
  "api/fetchUserID",
  async (accessToken, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://id.twitch.tv/oauth2/validate`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
  }
);

export const fetchTopCategories = createAsyncThunk<topCategory[], string, { state: RootState }>(
  "api/fetchTopCategories",
  async (accessToken, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.twitch.tv/helix/games/top`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
export const fetchTopStreams = createAsyncThunk<topStream[], string, { state: RootState }>(
  "api/fetchTopStreams",
  async (accessToken, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.twitch.tv/helix/streams`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Client-Id": "YOUR_CLIENT_ID",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch top streams");
    }
  }
);

export const fetchUserStreamInfo = createAsyncThunk<topStream[], { userId: string; accessToken: string }, { state: RootState }>(
  "api/fetchUserStreamInfo",
  async ({ userId, accessToken }, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.twitch.tv/helix/streams?user_id=${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Client-Id": "YOUR_CLIENT_ID",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.data[0];
    } catch (error) {
      return rejectWithValue("Failed to fetch top streams");
    }
  }
);

export const fetchCategoryStreams = createAsyncThunk<topStream[], { gameID: string; accessToken: string }, { state: RootState }>(
  "api/fetchCategoryStreams",
  async ({ gameID, accessToken }, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.twitch.tv/helix/streams?game_id=${gameID}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Client-Id": "YOUR_CLIENT_ID",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch top streams");
    }
  }
);

export const fetchUsers = createAsyncThunk<TwitchUsersData[], string, { state: RootState }>(
  "api/fetchUsers",
  async (userLogin, { rejectWithValue }) => {
    const userToken = localStorage.getItem("access_token");
    try {
      const response = await fetch(`https://api.twitch.tv/helix/users?login=${userLogin}&first=100`, {
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
      const firstItem = data.data[0];
      return firstItem;
    } catch (error) {
      return rejectWithValue("Failed to fetch top streams");
    }
  }
);

export const fetchChannelEmotes = createAsyncThunk<Emote[], string, { state: RootState }>(
  "api/fetchChannelEmotes",
  async (channelID, { rejectWithValue }) => {
    const userToken = localStorage.getItem("access_token");
    try {
      const response = await fetch(`https://api.twitch.tv/helix/chat/emotes?broadcaster_id=${channelID}`, {
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
      return rejectWithValue("Failed to fetch top streams");
    }
  }
);

export const fetchChannelBadges = createAsyncThunk<SubBadges[], string, { state: RootState }>(
  "api/fetchChannelBadges",
  async (channelID, { rejectWithValue }) => {
    const userToken = localStorage.getItem("access_token");
    try {
      const response = await fetch(`https://api.twitch.tv/helix/chat/badges?broadcaster_id=${channelID}`, {
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
      return data.data[0];
    } catch (error) {
      return rejectWithValue("Failed to fetch top streams");
    }
  }
);

export const fetchFollowedChannels = createAsyncThunk<topStream[], string>("api/fetchFollowedChannels", async (_, { dispatch, rejectWithValue }) => {
  const userToken = localStorage.getItem("access_token");
  try {
    const response = await fetch(`https://api.twitch.tv/helix/channels/followed?user_id=USER_ID&first=100`, {
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
    const getIdsFromResponse = (response: any) => {
      return response.data.map((item: any) => item.broadcaster_login);
    };
    const ids = getIdsFromResponse(data);
    dispatch(saveFollowedChannels(ids));
    return data;
  } catch (error) {
    return rejectWithValue("Failed to fetch followed streams");
  }
});

export const fetchFollowedUsers = createAsyncThunk<TwitchUsersData[], { userLogins: string[]; accessToken: string }, { state: RootState }>(
  "api/fetchFollowedUsers",
  async ({ userLogins, accessToken }, { rejectWithValue }) => {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Client-Id": "YOUR_CLIENT_ID",
    };

    try {
      const userRequests = userLogins.map((userLogin) =>
        fetch(`https://api.twitch.tv/helix/users?login=${userLogin}&first=100`, { method: "GET", headers })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => data.data[0])
          .catch((error) => {
            console.error(`Failed to fetch user data for login: ${userLogin}`, error);
            return rejectWithValue(error.message);
          })
      );

      const results = await Promise.all(userRequests);
      return results;
    } catch (error) {
      return rejectWithValue("Failed to fetch users");
    }
  }
);
export const fetchFollowedStreams = createAsyncThunk<topStream[], string, { state: RootState }>(
  "api/fetchFollowedStreams",
  async (_, { rejectWithValue }) => {
    const userToken = localStorage.getItem("access_token");
    try {
      const response = await fetch(`https://api.twitch.tv/helix/streams/followed?user_id=USER_ID`, {
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
      return rejectWithValue("Failed to fetch followed streams");
    }
  }
);
