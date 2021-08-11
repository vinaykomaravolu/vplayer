import { ipcMain } from 'electron';

function initMusicplayer() {
  console.log('musicplayer');

  ipcMain.on('MUSICPLAYER_LOAD_COLLECTION', (event: any, arg: string) => {
    console.log('MUSICPLAYER_LOAD_COLLECTION');
    event.reply('MUSICPLAYER_LOAD_COLLECTION_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_PLAY', (event: any, arg: string) => {
    console.log('MUSICPLAYER_PLAY');
    event.reply('MUSICPLAYER_PLAY_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_STOP', (event: any, arg: string) => {
    console.log('MUSICPLAYER_STOP');
    event.reply('MUSICPLAYER_STOP_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_SHUTTLE_ON', (event: any, arg: string) => {
    console.log('MUSICPLAYER_SHUTTLE_ON');
    event.reply('MUSICPLAYER_SHUTTLE_ON_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_SHUTTLE_OFF', (event: any, arg: string) => {
    console.log('MUSICPLAYER_SHUTTLE_OFF');
    event.reply('MUSICPLAYER_SHUTTLE_OFF_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_REPEAT_ON', (event: any, arg: string) => {
    console.log('MUSICPLAYER_REPEAT_ON');
    event.reply('MUSICPLAYER_REPEAT_ON_REPLY', 'pong');
  });

  ipcMain.on('MUSICPLAYER_REPEAT_OFF', (event: any, arg: string) => {
    console.log('MUSICPLAYER_REPEAT_OFF');
    event.reply('MUSICPLAYER_REPEAT_OFF_REPLY', 'pong');
  });

  ipcMain.on('NEXT_SONG', (event: any, arg: string) => {
    console.log('NEXT_SONG');
    event.reply('NEXT_SONG_REPLY', 'pong');
  });

  ipcMain.on('PREVIOUS_SONG', (event: any, arg: string) => {
    console.log('PREVIOUS_SONG');
    event.reply('PREVIOUS_SONG_REPLY', 'pong');
  });

  ipcMain.on('SKIP_TO', (event: any, arg: string) => {
    console.log('SKIP_TO');
    event.reply('SKIP_TO', 'pong');
  });
}
module.exports = { initMusicplayer };
