import { ipcMain } from 'electron';
import { Collection, Song, Directory, Response } from '../../objects/Object';

function initCollection() {
  console.log('collection');

  ipcMain.on('GET_SONGS', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('GET_SONGS_FAIL');
      event.reply('GET_SONG_REPLY', '404');
    }
    console.log('GET_SONGS');
    event.reply('GET_SONG_REPLY', '200');
  });

  ipcMain.on('GET_ALBUMS_BASIC_BY_ID', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('GET_ALBUMS_BASIC_BY_ID_FAIL');
      event.reply('GET_ALBUMS_BASIC_BY_ID_REPLY', '404');
    }
    console.log('GET_ALBUMS_BASIC_BY_ID');
    event.reply('GET_ALBUMS_BASIC_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('GET_PLAYLISTS_BASIC_BY_ID', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('GET_PLAYLISTS_BASIC_BY_ID_FAIL');
      event.reply('GET_PLAYLISTS_BASIC_BY_ID_REPLY', '404');
    }
    console.log('GET_PLAYLISTS_BASIC_BY_ID');
    event.reply('GET_PLAYLISTS_BASIC_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('GET_ALBUM_BY_ID', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('GET_ALBUM_BY_ID_FAIL');
      event.reply('GET_ALBUM_BY_ID_REPLY', '404');
    }
    console.log('GET_ALBUM_BY_ID');
    event.reply('GET_ALBUM_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('GET_PLAYLISTS_BY_ID', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('GET_PLAYLISTS_BY_ID_FAIL');
      event.reply('GET_PLAYLISTS_BY_ID_REPLY', '404');
    }
    console.log('GET_PLAYLISTS_BY_ID');
    event.reply('GET_PLAYLISTS_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('CREATE_PLAYLIST', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('CREATE_PLAYLIST_FAIL');
      event.reply('CREATE_PLAYLIST_REPLY', '404');
    }
    console.log('CREATE_PLAYLIST');
    event.reply('CREATE_PLAYLIST_REPLY', 'pong');
  });

  ipcMain.on('DELETE_PLAYLIST', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('DELETE_PLAYLIST_FAIL');
      event.reply('DELETE_PLAYLIST_REPLY', '404');
    }
    console.log('DELETE_PLAYLIST');
    event.reply('DELETE_PLAYLIST_REPLY', 'pong');
  });

  ipcMain.on('UPDATE_PLAYLIST', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('UPDATE_PLAYLIST_FAIL');
      event.reply('UPDATE_PLAYLIST_REPLY', '404');
    }
    console.log('UPDATE_PLAYLIST');
    event.reply('UPDATE_PLAYLIST_REPLY', 'pong');
  });

  ipcMain.on('ADD_SONG_TO_PLAYLIST_BY_ID', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('ADD_SONG_TO_PLAYLIST_BY_ID_FAIL');
      event.reply('ADD_SONG_TO_PLAYLIST_BY_ID_REPLY', '404');
    }
    console.log('ADD_SONG_TO_PLAYLIST_BY_ID');
    event.reply('ADD_SONG_TO_PLAYLIST_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('REMOVE_SONG_FROM_PLAYLIST_BY_ID', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('REMOVE_SONG_FROM_PLAYLIST_BY_ID_FAIL');
      event.reply('REMOVE_SONG_FROM_PLAYLIST_BY_ID_REPLY', '404');
    }
    console.log('REMOVE_SONG_FROM_PLAYLIST_BY_ID');
    event.reply('REMOVE_SONG_FROM_PLAYLIST_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('SEARCH', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('SEARCH_FAIL');
      event.reply('SEARCH_REPLY', '404');
    }
    console.log('SEARCH');
    event.reply('SEARCH_REPLY', 'pong');
  });
}

module.exports = { initCollection };
