import { ipcMain } from 'electron';

function initCollection() {
  console.log('collection');

  ipcMain.on('GET_SONG', (event: any, arg: string) => {
    console.log('GET_SONG');
    event.reply('GET_SONG_REPLY', 'pong');
  });

  ipcMain.on('GET_ALBUMS_BASIC_BY_ID', (event: any, arg: string) => {
    console.log('GET_ALBUMS_BASIC_BY_ID');
    event.reply('GET_ALBUMS_BASIC_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('GET_PLAYLISTS_BASIC_BY_ID', (event: any, arg: string) => {
    console.log('GET_PLAYLISTS_BASIC_BY_ID');
    event.reply('GET_PLAYLISTS_BASIC_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('GET_ALBUM_BY_ID', (event: any, arg: string) => {
    console.log('GET_ALBUM_BY_ID');
    event.reply('GET_ALBUM_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('GET_PLAYLISTS_BY_ID', (event: any, arg: string) => {
    console.log('GET_PLAYLISTS_BY_ID');
    event.reply('GET_PLAYLISTS_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('CREATE_PLAYLIST', (event: any, arg: string) => {
    console.log('CREATE_PLAYLIST');
    event.reply('CREATE_PLAYLIST_REPLY', 'pong');
  });

  ipcMain.on('DELETE_PLAYLIST', (event: any, arg: string) => {
    console.log('DELETE_PLAYLIST');
    event.reply('DELETE_PLAYLIST_REPLY', 'pong');
  });

  ipcMain.on('UPDATE_PLAYLIST', (event: any, arg: string) => {
    console.log('UPDATE_PLAYLIST');
    event.reply('UPDATE_PLAYLIST_REPLY', 'pong');
  });

  ipcMain.on('ADD_SONG_TO_PLAYLIST_BY_ID', (event: any, arg: string) => {
    console.log('ADD_SONG_TO_PLAYLIST_BY_ID');
    event.reply('ADD_SONG_TO_PLAYLIST_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('REMOVE_SONG_FROM_PLAYLIST_BY_ID', (event: any, arg: string) => {
    console.log('REMOVE_SONG_FROM_PLAYLIST_BY_ID');
    event.reply('REMOVE_SONG_FROM_PLAYLIST_BY_ID_REPLY', 'pong');
  });

  ipcMain.on('SEARCH', (event: any, arg: string) => {
    console.log('SEARCH');
    event.reply('SEARCH_REPLY', 'pong');
  });
}

module.exports = { initCollection };
