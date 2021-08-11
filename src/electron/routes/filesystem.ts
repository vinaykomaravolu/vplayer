import { ipcMain } from 'electron';

function initFilesystem() {
  console.log('filesystem');

  ipcMain.on('POST_SONG_DIRECTORY', (event: any, arg: string) => {
    console.log('POST_SONG_DIRECTORY');
    event.reply('POST_SONG_DIRECTORY_REPLY', 'pong');
  });

  ipcMain.on('GET_SONG_DIRECTORY', (event: any, arg: string) => {
    console.log('GET_SONG_DIRECTORY');
    event.reply('GET_SONG_DIRECTORY_REPLY', 'pong');
  });

  ipcMain.on('REMOVE_SONG_DIRECTORY', (event: any, arg: string) => {
    console.log('REMOVE_SONG_DIRECTORY');
    event.reply('REMOVE_SONG_DIRECTORY_REPLY', 'pong');
  });

  ipcMain.on('SET_THEME', (event: any, arg: string) => {
    console.log('SET_THEME');
    event.reply('SET_THEME_REPLY', 'pong');
  });

  ipcMain.on('GET_THEME', (event: any, arg: string) => {
    console.log('GET_THEME');
    event.reply('GET_THEME_REPLY', 'pong');
  });
}

module.exports = { initFilesystem };
