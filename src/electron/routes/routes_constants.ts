import { Collection, Song, Directory, Response } from '../../objects/Object';

const postSongDirectory = ['POST_SONG_DIRECTORY', 'Directory'];
const getSongDirectory = ['GET_SONG_DIRECTORY', 'Directory'];
const removeSongDirectory = ['REMOVE_SONG_DIRECTORY', 'Directory'];
const setTheme = 'SET_THEME';
const getTheme = 'GET_THEME';
const musicplayerLoadCollection = 'MUSICPLAYER_LOAD_COLLECTION';
const musticplayerPlay = 'MUSICPLAYER_PLAY';
const musicplayerStop = 'MUSICPLAYER_STOP';
const musicplayerShuffleOn = 'MUSICPLAYER_SHUTTLE_ON';
const musicplayerShuffleOff = 'MUSICPLAYER_SHUTTLE_OFF';
const musicplayerRepeatOn = 'MUSICPLAYER_REPEAT_ON';
const musicplayerRepeatOff = 'MUSICPLAYER_REPEAT_OFF';
const nextSong = 'NEXT_SONG';
const previousSong = 'PREVIOUS_SONG';
const skipTo = 'SKIP_TO';
const getSong = 'GET_SONGS';
const getAlbumsBasicById = 'GET_ALBUMS_BASIC_BY_ID';
const getPlaylistsBasicById = 'GET_PLAYLISTS_BASIC_BY_ID';
const getAlbumById = 'GET_ALBUM_BY_ID';
const getPlaylistsById = 'GET_PLAYLISTS_BY_ID';
const createPlaylist = 'CREATE_PLAYLIST';
const deletePlaylist = 'DELETE_PLAYLIST';
const updatePlaylist = 'UPDATE_PLAYLIST';
const addSongToPlaylistById = 'ADD_SONG_TO_PLAYLIST_BY_ID';
const removeSongFromPlaylistById = 'REMOVE_SONG_FROM_PLAYLIST_BY_ID';
const search = 'SEARCH';