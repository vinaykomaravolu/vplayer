import { Path } from 'history';

export interface Collection {
  name: string;
  songs: Song[];
  image?: string;
}

export interface Song {
  name: string;
  artists: string[];
  length: number; // in seconds
  publish_year: number;
  path: string[];
  album: string;
}

export type Playlist = Collection;

export interface Paths {
  paths: string[];
}

export interface Album extends Collection {
  artists: string[];
}
