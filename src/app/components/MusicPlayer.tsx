import React from 'react';

function MusicPlayer() {
  return (
    <div className="absolute block bottom-0 bg-white">
      {/** object-bottom abolute container w-20 h-20 flex justify-between items-center bg-white */}
      {/** Progress Bar */}
      <div className="relative p3-1 bg-black">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200" />
        <div
          style={{ width: '10%' }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
        />
      </div>
      <div className="object-bottom">
        <h1> TESsTING </h1>
      </div>
    </div>
  );
}

export default MusicPlayer;
