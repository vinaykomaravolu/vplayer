import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Playlist } from '../../objects/Object';

function PlayListsMini() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const playlistsList: Playlist[] = [];
    for (let i = 0; i < 30; i += 1) {
      playlistsList.push({
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
    setPlaylists(playlistsList);
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col flex-nowrap w-full  overflow-y-auto">
        {playlists.map((playlist) => {
          return (
            <Link key={playlist.name} to={`/playlists/${playlist.name}`}>
              <button
                type="button"
                className="p-2 w-full focus:outline-none truncate text-sm text-white hover:bg-secondary2 rounded-md"
              >
                {playlist.name}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PlayListsMini;
