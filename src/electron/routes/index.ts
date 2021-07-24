/* Routes

* post-song-directory
* get-song-directory
* remove-song-directory
* set-theme
* get-theme
* get-song
* get-albums-basic/info (with id)
* get-playlists-basic/info (with id)
* get-album-by-id (id will be created in database)
* get-playlist-by-id (id will be created in the database)
* create-playlist
* delete-playlist
* update-playlist
* add-song-to-playlist-by-id (Even if one song going to be in array)
* remove-song-from-playlist-by-id
* add-song-to-favorite
* remove-song-from-favorite
* search (by: )
* musicplayer-load-collection
* musicplayer-play
*/

const collection = require('./collection');
const filesystem = require('./filesystem');
const musicplayer = require('./musicplayer');

function init() {
  collection.initCollection();
  filesystem.initFilesystem();
  musicplayer.initMusicplayer();
}

module.exports = { init };
