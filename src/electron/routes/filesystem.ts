import { ipcMain } from 'electron';
import { Collection, Song, Directory, Response } from '../../objects/Object';

function arrayTypeCheck(arr: any[], arrType: string) {
  if (Array.isArray(arr)) {
    let arrayIsWrongType = false;
    arr.forEach(function (item) {
      if (typeof item !== arrType) {
        arrayIsWrongType = true;
      }
    });
    if (!arrayIsWrongType && arr.length > 0) {
      console.log('string[]!');
    }
  }
}

function responseTest(object: any): object is Response {
  if ('success' in object && 'data' in object) {
    return true;
  }
  return false;
}

function initFilesystemIPC(eventType: any) {
  console.log('filesystem');
  ipcMain.on(eventType, (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('fail');
    }
    console.log('succcess');
  });
}

function initFilesystem() {
  console.log('filesystem');

  ipcMain.on('POST_SONG_DIRECTORY', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('POST_SONG_DIRECTORY_FAIL');
      event.reply('POST_SONG_DIRECTORY_REPLY', '404');
    }
    console.log('POST_SONG_DIRECTORY');
    event.reply('POST_SONG_DIRECTORY_REPLY', 'pong');
  });

  ipcMain.on('GET_SONG_DIRECTORY', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('GET_SONG_DIRECTORY_FAIL');
      event.reply('GET_SONG_DIRECTORY_REPLY', '404');
    }
    console.log('GET_SONG_DIRECTORY');
    event.reply('GET_SONG_DIRECTORY_REPLY', 'pong');
  });

  ipcMain.on('REMOVE_SONG_DIRECTORY', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('REMOVE_SONG_DIRECTORY_FAIL');
      event.reply('REMOVE_SONG_DIRECTORY_REPLY', '404');
    }
    console.log('REMOVE_SONG_DIRECTORY');
    event.reply('REMOVE_SONG_DIRECTORY_REPLY', 'pong');
  });

  ipcMain.on('SET_THEME', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('SET_THEME_FAIL');
      event.reply('SET_THEME_REPLY', '404');
    }
    console.log('SET_THEME');
    event.reply('SET_THEME_REPLY', 'pong');
  });

  ipcMain.on('GET_THEME', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('GET_THEME_FAIL');
      event.reply('GET_THEME_REPLY', '404');
    }
    console.log('GET_THEME');
    event.reply('GET_THEME_REPLY', 'pong');
  });
}

module.exports = { initFilesystem };
