declare module 'discord' {
  export interface Emoji {
    name: string;
  }

  export interface Activity {
    id: string;
    name: string;
    type: number;
    emoji?: Emoji;
    created_at?: number;
    flags?: number;
    state?: string;
    session_id?: string;
    details?: string;
    timestamps?: {
      start: number;
      end?: number;
    };
    application_id?: string;
    assets?: {
      large_image: string;
      large_text: string;
      small_image: string;
      small_text: string;
    };
    buttons?: string[];
  }

  export interface DiscordUser {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    bot: boolean;
    global_name: string;
    display_name: string;
    public_flags: number;
    avatar_decoration_data: any | null;
  }

  export interface DiscordData {
    kv: Record<string, any>;
    spotify: {
      track_id: string;
      timestamps: {
        start: number;
        end: number;
      };
      album: string;
      album_art_url: string;
      artist: string;
      song: string;
    } | null;
    discord_user: DiscordUser;
    activities: Activity[];
    discord_status: string;
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
  }

  export interface DiscordApiResponse {
    data: DiscordData;
    success: boolean;
  }
}