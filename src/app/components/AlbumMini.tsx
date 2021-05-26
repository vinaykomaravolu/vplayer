import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Album, Playlist } from '../../objects/Object';

function AlbumMini() {
  const [Albums, setAlbums] = useState<Playlist[]>([]);

  useEffect(() => {
    const AlbumList: Album[] = [];
    for (let i = 0; i < 30; i += 1) {
      AlbumList.push({
        artists: [],
        songs: [],
        name:
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7),
      });
    }
    setAlbums(AlbumList);
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col flex-nowrap w-full  overflow-y-auto">
        {Albums.map((album) => {
          return (
            <Link key={album.name} to={`/playlists/${album.name}`}>
              <button
                type="button"
                className="pr-2 pl-2 pt-1 w-full pb-1 focus:outline-none truncate text-sm text-white hover:bg-secondary2 rounded-md"
              >
                {album.name}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AlbumMini;
