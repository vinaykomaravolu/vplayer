export interface Song {
  name: string;
  artist: string;
  length: number; // in seconds
  publish_year: number;
  path: string[];
}

export interface Playlist {
  name: string;
  song: Song[];
}

export interface Paths {
  paths: string[];
}

export interface Album {
  name: string;
  album: Playlist;
}
