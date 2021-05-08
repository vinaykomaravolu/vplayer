// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!rc-slider/assets/index.css';
import React from 'react';
import Slider, { Range } from 'rc-slider';
import { IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';

const settings = {
  start: 2,
  min: 0,
  max: 10,
  step: 1,
};

const PlayIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const PauseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

function MusicPlayer() {
  return (
    <div className="bg-primary3 flex flex-row justify-center h-full w-full">
      <div className="flex flex-col w-full justify-center">
        <div className="flex flex-row justify-center">
          <div className="">BACK</div>
          <div className="">PLAY</div>
          <div className="">FRONT</div>
        </div>
        <div className="flex flex-row justify-center">
          <Slider
            style={{ width: '50%' }}
            inverted={false}
            settings={settings}
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
