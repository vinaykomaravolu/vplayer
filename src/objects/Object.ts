export interface Collection {
  name: string;
}

export interface Song {
  name: string;
  artists: string[];
  length: number; // in seconds
  publish_year: number;
  path: string[];
  album: string;
}

export interface Playlist extends Collection {
  song: Song[];
}

export interface Paths {
  paths: string[];
}

export interface Album extends Collection {
  album: Playlist;
}
