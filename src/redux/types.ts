export interface RootState {
  user: {
    token: string;
    visibleLeftChannelPanel: boolean;
  };
  searchChannelState: {
    channelName: string;
    channelInfo: SearchTwitchChannel;
  };
  searchChannelDetail: SearchTwitchChannel[];
  topCategory: topCategory[];
  topStream: topStream[];
  userInfo: UserState;
}
export interface SearchTwitchChannel {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
  tag_ids: string[];
  tags: string[];
  thumbnail_url: string;
  title: string;
  started_at: string;
}
[];

export interface UserState {
  client_id: string;
  login: string;
  scopes: string[];
  user_id: string;
  expires_in: number;
}

export interface topCategory {
  id: string;
  name: string;
  box_art_url: string;
  igdb_id: string;
}
[];

export interface topStream {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  tags: string[];
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: string[];
  is_mature: boolean;
}
[];
