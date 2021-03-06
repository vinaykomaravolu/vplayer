type CollectionType = 'playlist' | 'collection' | 'album';

export interface Collection {
  name: string;
  songs: Song[];
  image?: string;
  type: CollectionType;
}

export interface Song {
  name: string;
  artists: string[];
  length: number; // in seconds
  publish_year: number;
  path: string;
  album: string;
}

export type Playlist = Collection;

export interface Directory {
  path: string;
}

export interface Album extends Collection {
  artists: string[];
}
