import { ipcMain } from 'electron';
import { Collection, Song, Directory, Response } from '../../objects/Object';

function initMusicplayer() {
  console.log('musicplayer');

  ipcMain.on('MUSICPLAYER_LOAD_COLLECTION', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('MUSICPLAYER_LOAD_COLLECTION_FAIL');
      event.reply('MUSICPLAYER_LOAD_COLLECTION_REPLY', '404');
    }
    console.log('MUSICPLAYER_LOAD_COLLECTION');
    event.reply('MUSICPLAYER_LOAD_COLLECTION_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_PLAY', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('MUSICPLAYER_PLAY_FAIL');
      event.reply('MUSICPLAYER_PLAY_REPLY', '404');
    }
    console.log('MUSICPLAYER_PLAY');
    event.reply('MUSICPLAYER_PLAY_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_STOP', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('MUSICPLAYER_STOP_FAIL');
      event.reply('MUSICPLAYER_STOP_REPLY', '404');
    }
    console.log('MUSICPLAYER_STOP');
    event.reply('MUSICPLAYER_STOP_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_SHUTTLE_ON', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('MUSICPLAYER_SHUTTLE_ON_FAIL');
      event.reply('MUSICPLAYER_SHUTTLE_ON_REPLY', '404');
    }
    console.log('MUSICPLAYER_SHUTTLE_ON');
    event.reply('MUSICPLAYER_SHUTTLE_ON_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_SHUTTLE_OFF', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('MUSICPLAYER_SHUTTLE_OFF_FAIL');
      event.reply('MUSICPLAYER_SHUTTLE_OFF_REPLY', '404');
    }
    console.log('MUSICPLAYER_SHUTTLE_OFF');
    event.reply('MUSICPLAYER_SHUTTLE_OFF_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_REPEAT_ON', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('MUSICPLAYER_REPEAT_ON_FAIL');
      event.reply('MUSICPLAYER_REPEAT_ON_REPLY', '404');
    }
    console.log('MUSICPLAYER_REPEAT_ON');
    event.reply('MUSICPLAYER_REPEAT_ON_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_REPEAT_OFF', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('MUSICPLAYER_REPEAT_OFF_FAIL');
      event.reply('MUSICPLAYER_REPEAT_OFF_REPLY', '404');
    }
    console.log('MUSICPLAYER_REPEAT_OFF');
    event.reply('MUSICPLAYER_REPEAT_OFF_REPLY', 'pong');
  });

  ipcMain.on('NEXT_SONG', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('NEXT_SONG_FAIL');
      event.reply('NEXT_SONG_REPLY', '404');
    }
    console.log('NEXT_SONG');
    event.reply('NEXT_SONG_REPLY', 'pong');
  });

  ipcMain.on('PREVIOUS_SONG', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('PREVIOUS_SONG_FAIL');
      event.reply('PREVIOUS_SONG_REPLY', '404');
    }
    console.log('PREVIOUS_SONG');
    event.reply('PREVIOUS_SONG_REPLY', 'pong');
  });

  ipcMain.on('SKIP_TO', (event: any, arg: Response) => {
    if (!arg.sucess) {
      console.log('SKIP_TO_FAIL');
      event.reply('SKIP_TO_REPLY', '404');
    }
    console.log('SKIP_TO');
    event.reply('SKIP_TO', 'pong');
  });
}
module.exports = { initMusicplayer };
