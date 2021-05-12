// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!rc-slider/assets/index.css';
import React, { useState } from 'react';
import Slider from 'rc-slider';
import { IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';
import { AiFillSound } from 'react-icons/ai';
import { motion } from 'framer-motion';

const PlayIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
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

const IconButton = (props: { icon: any; handleClick: () => void }) => {
  const { icon, handleClick } = props;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      className="section-subtitle text-secondary  subpixel-antialiased focus:outline-none hover:text-secondary2"
      onClick={() => {
        handleClick();
      }}
    >
      {icon}
    </motion.button>
  );
};

function MusicPlayer() {
  const [isTimelineHover, setIsTimelineHover] = useState<boolean>(false);
  const [isVolumelineHover, setVolumelineHover] = useState<boolean>(false);
  let currentTime = 0;
  let maxTime = 0;

  function updateCurrentTime(current: number) {
    currentTime = current;
  }

  function updateMaxTime(max: number) {
    maxTime = max;
  }

  function secondsToMin(d: number) {
    // eslint-disable-next-line no-param-reassign
    d = Number(d);
    return Math.floor((d % 3600) / 60);
  }

  function secondsToSec(d: number) {
    // eslint-disable-next-line no-param-reassign
    d = Number(d);
    return Math.floor((d % 3600) % 60);
  }

  return (
    <div className="bg-primary3 flex flex-row justify-center h-full w-full">
      <div className="flex flex-col justify-center content-center w-1/5 pr-2 pl-2">
        <div className="flex flex-row h-3/4 w-full content-center justify-center bg-yellow-400 overflow-hidden">
          <div className="h-full w-1/3 bg-white">test</div>
          <div className="flex flex-col w-2/3 justify-end content-end overflow-hidden bg-black">
            Info
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3/5 justify-center pr-2 pl-2 bg-yellow-100">
        <div className="flex flex-row justify-center content-center">
          <div className="flex flex-nowrap content-center">
            <IconButton icon={<IoMdSkipBackward />} handleClick={() => {}} />
          </div>
          <div className="flex flex-nowrap content-center">
            <IconButton icon={PlayIcon} handleClick={() => {}} />
          </div>
          <div className="flex flex-nowrap content-center">
            <IconButton icon={<IoMdSkipForward />} handleClick={() => {}} />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full ">
          <div className="text-sm pr-3 pl-3 text-white ">
            {secondsToMin(currentTime)}:{secondsToSec(currentTime)}
          </div>
          <div
            className="w-3/4 p-0.5"
            onMouseEnter={() => setIsTimelineHover(true)}
            onMouseLeave={() => setIsTimelineHover(false)}
          >
            <Slider
              style={{ width: '100%' }}
              reverse={false}
              min={0 /** Change this */}
              max={100 /** Change this */}
              step={1 /** Change this */}
              trackStyle={{ backgroundColor: '#FFD700', height: 6 }}
              handleStyle={
                isTimelineHover
                  ? {
                      borderColor: '#FFD700',
                      height: 16,
                      width: 16,
                      backgroundColor: '#151A21',
                    }
                  : {
                      borderColor: '#FFD700',
                      height: 6,
                      width: 0,
                      marginTop: 0,
                      backgroundColor: '#FFD700',
                    }
              }
              railStyle={{
                backgroundColor: '#F2AA4C',
                height: 6,
                opacity: 0.5,
              }}
            />
          </div>

          <div className="text-sm pr-4 pl-4 text-white">
            {secondsToMin(maxTime)}:{secondsToSec(maxTime)}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end content-start w-1/5 pr-2 pl-2 bg-white">
        <div className="flex flex-nowrap content-center">
          <IconButton icon={<AiFillSound />} handleClick={() => {}} />
        </div>
        <div
          className="w-1/2 p-0.5"
          onMouseEnter={() => setVolumelineHover(true)}
          onMouseLeave={() => setVolumelineHover(false)}
        >
          <Slider
            style={{ width: '100%' }}
            reverse={false}
            min={0 /** Change this */}
            max={100 /** Change this */}
            step={1 /** Change this */}
            trackStyle={{ backgroundColor: '#FFD700', height: 6 }}
            handleStyle={
              isVolumelineHover
                ? {
                    borderColor: '#FFD700',
                    height: 16,
                    width: 16,
                    backgroundColor: '#151A21',
                  }
                : {
                    borderColor: '#FFD700',
                    height: 6,
                    width: 0,
                    marginTop: 0,
                    backgroundColor: '#FFD700',
                  }
            }
            railStyle={{
              backgroundColor: '#F2AA4C',
              height: 6,
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
