import React, { useState, useContext } from 'react';
import Dropdown from './Dropdown';
import DropdownData from '../types/DropdownData';
import { Song, Playlist } from '../../objects/Object';
import { ThemeContext } from '../utilities/ThemeContext';
import { SongDropdownMoreIcon } from './Icons';

function SongDropDown({ song }: { song: Song }) {
  const [loadPlaylist, setLoadPlaylist] = useState<boolean>(false);
  const { theme, setTheme } = useContext(ThemeContext);

  function addToPlaylist(s: Song, p: Playlist) {
    console.log(`Added ${s.name} to playlist ${p.name}`);
  }

  function listPlaylists(): DropdownData[] {
    const playlistsData: Playlist[] = [];
    for (let i = 0; i < 30; i += 1) {
      playlistsData.push({
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
    const processedPlaylists = playlistsData.map((playlist) => {
      const playlistDropdownData: DropdownData = {} as DropdownData;
      playlistDropdownData.name = playlist.name;
      playlistDropdownData.type = 'item';
      playlistDropdownData.handle = () => {
        console.log(`Added ${song.name} to playlist ${playlist.name}`);
      };
      return playlistDropdownData;
    });
    return processedPlaylists;
  }

  const dropdowndata: DropdownData = {
    type: 'root',
    children: [
      {
        name: 'Add to playlist',
        type: 'menu',
        children: loadPlaylist ? listPlaylists() : [],
        handle: () => {
          setLoadPlaylist(true);
        },
      },
      {
        name: 'Add to favorites',
        type: 'item',
        handle: () => {
          console.log(`Added ${song.name} to favorites`);
        },
      },
    ],
  };
  return <Dropdown data={dropdowndata} buttonStyle={SongDropdownMoreIcon} />;
}

export default SongDropDown;
