// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!rc-slider/assets/index.css';
import React, { useState } from 'react';
import Slider, { Range } from 'rc-slider';
import { IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';
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
  let currentTime = 0;

  function updateCurrentTime(time: number) {
    currentTime = time;
  }

  return (
    <div className="bg-primary3 flex flex-row justify-center h-full w-full">
      <div className="flex flex-col w-full justify-center">
        <div className="flex flex-row justify-center content-center">
          <div className="flex flex-nowrap content-center">
            <IconButton icon={<IoMdSkipBackward />} handleClick={() => {}} />
          </div>
          <div className="flex flex-nowrap content-center">
            <IconButton icon={PlayIcon} handleClick={() => {}} />
          </div>{' '}
          <div className="flex flex-nowrap content-center">
            <IconButton icon={<IoMdSkipForward />} handleClick={() => {}} />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full ">
          <div className="text-sm pr-3 pl-3 text-white "> {currentTime} </div>
          <div
            className="w-1/2 p-0.5"
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

          <div className="text-sm pr-4 pl-4 text-white"> Timer2 </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
