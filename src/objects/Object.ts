import { Path } from 'history';

export interface Collection {
  name: string;
  songs: Song[];
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
  image?: Path;
}

export interface Paths {
  paths: string[];
}

export interface Album extends Collection {
  artists: string[];
  image?: Path;
}
