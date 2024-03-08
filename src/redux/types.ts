export interface RootState {
  app: {
    openReactMomentModal: boolean;
    openThankYouModal: boolean;
    openSubscribeModal: boolean;
  };
  user: {
    token: string;
    visibleLeftChannelPanel: boolean;
  };
  emote: Emote[];
  badges: {
    subscriber: SubBadges[];
    bits: SubBadges[];
  };
  searchChannelState: {
    channelName: string;
    channelInfo: SearchTwitchChannel;
  };
  searchChannelDetail: SearchTwitchChannel[];
  topCategory: topCategory[];
  topStream: topStream[];
  userInfo: UserState;
  searchUsers: TwitchUsersData;
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

export interface TwitchUsersData {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  email: string;
  created_at: string;
}
export interface Emote {
  id: string;
  name: string;
  images: {
    url_1x: string;
    url_2x: string;
    url_4x: string;
  };
  tier: string;
  emote_type: string;
  emote_set_id: string;
  format: string[];
  scale: string[];
  theme_mode: string[];
}
export interface SubBadges {
  id: string;
  image_url_1x: string;
  image_url_2x: string;
  image_url_4x: string;
  title: string;
  description: string;
  click_action: string;
  click_url: string | null;
}
