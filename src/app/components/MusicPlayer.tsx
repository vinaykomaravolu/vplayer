/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!rc-slider/assets/index.css';
import React, { useState } from 'react';
<<<<<<< HEAD
import Slider from 'rc-slider';
import { IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { motion } from 'framer-motion';
import DefaultImage from '../../../assets/images/default.png';
import {
  volOn,
  volOf,
  PlayIcon,
  PauseIcon,
  repeatIcon,
  repeatIconOf,
  shuffleIcon,
  shuffleIconOf,
} from './icons';
=======
import Slider, { Range } from 'rc-slider';
import { IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';
import { motion } from 'framer-motion';
>>>>>>> "adds main musicplayer UI icons and slider"

<<<<<<< HEAD
const IconButton = (props: { icon: any; handleClick: () => void }) => {
  const { icon, handleClick } = props;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      className="section-subtitle text-secondary subpixel-antialiased focus:outline-none hover:text-secondary2"
      onClick={() => {
        handleClick();
      }}
    >
      {icon}
    </motion.button>
  );
};
=======
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
>>>>>>> "changes slider property"

const progressBar = () => {
  return (
    <Slider
      style={{ width: '100%' }}
      reverse={false}
      min={0 /** Change this */}
      max={100 /** Change this */}
      step={1 /** Change this */}
      trackStyle={{ backgroundColor: '#FFD700', height: 6 }}
      railStyle={{
        backgroundColor: '#F2AA4C',
        height: 6,
        opacity: 0.5,
      }}
    />
  );
};

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
<<<<<<< HEAD
  const [isVolumelineHover, setVolumelineHover] = useState<boolean>(false);
  const [Playing, setPlaying] = useState<boolean>(false);
  const [Faved, setFaved] = useState<boolean>(false);
  const [isVolOn, setIsVolOn] = useState<boolean>(false);
  const [Shuffle, setShuffle] = useState<boolean>(false);
  const [Repeat, setRepeat] = useState<boolean>(false);
  let currentTime = 0;
  let songName = 'Song Name';
  let songAuthor = 'Song time';
  let songTime = 180;

  function updateCurrentTime(current: number) {
    currentTime = current;
  }

  function songUpdate(
    newSongName: string,
    newSongAuthor: string,
    newSongTime: number
  ) {
    songName = newSongName;
    songAuthor = newSongAuthor;
    songTime = newSongTime;
    // songPic = newSongPic;
  }

  function secondsToMin(d: number) {
    // eslint-disable-next-line no-param-reassign
    d = Number(d);
    const time = Math.floor((d % 3600) / 60);
    if (time === 0) {
      return '00';
    }
    return time;
  }

  function secondsToSec(d: number) {
    // eslint-disable-next-line no-param-reassign
    d = Number(d);
    const time = Math.floor((d % 3600) % 60);
    if (time === 0) {
      return '00';
    }
    return time;
  }
=======
>>>>>>> "adds main musicplayer UI icons and slider"

  return (
    <div className="bg-primary3 flex flex-row justify-center h-full w-full">
<<<<<<< HEAD
      <div className="w-1/5 h-full flex flex-row">
        <div className="h-0 w-0  md:h-28 md:w-28">
          <img
            src={DefaultImage}
            alt={DefaultImage}
            className="h-full w-full object-cover p-2"
=======
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
<<<<<<< HEAD
        <div className="flex flex-row justify-center">
          <Slider
            style={{ width: '50%' }}
            reverse={false}
            min={0}
            max={100}
            step={1}
>>>>>>> "changes slider property"
          />
=======
        <div className="flex flex-row justify-center w-full ">
          <div className="text-sm pr-3 pl-3 text-white "> Timer1 </div>
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
>>>>>>> "adds main musicplayer UI icons and slider"
        </div>

        <div className="flex flex-col justify-end content-end overflow-hidden text-secondary">
          <div> {songName} </div>
          <div> {songAuthor} </div>
        </div>
      </div>
      <div className="flex flex-col w-3/5 justify-center pr-2 pl-2 ">
        <div className="flex flex-row justify-center content-center">
          <div
            className={`flex-nowrap content-center ${
              Shuffle ? 'flex' : 'hidden'
            }`}
          >
            <IconButton
              icon={shuffleIcon}
              handleClick={() => {
                setShuffle(false);
              }}
            />
          </div>
          <div
            className={`flex-nowrap content-center ${
              Shuffle ? 'hidden' : 'flex'
            }`}
          >
            <IconButton
              icon={shuffleIconOf}
              handleClick={() => {
                setShuffle(true);
              }}
            />
          </div>
          <div className="flex flex-nowrap content-center">
            <IconButton icon={<IoMdSkipBackward />} handleClick={() => {}} />
          </div>
          <div
            className={`flex-nowrap content-center ${
              Playing ? 'hidden' : 'flex'
            }`}
          >
            <IconButton
              icon={PlayIcon}
              handleClick={() => {
                setPlaying(true);
              }}
            />
          </div>
          <div
            className={`flex-nowrap content-center ${
              Playing ? 'flex' : 'hidden'
            }`}
          >
            <IconButton
              icon={PauseIcon}
              handleClick={() => {
                setPlaying(false);
              }}
            />
          </div>
          <div className="flex flex-nowrap content-center">
            <IconButton icon={<IoMdSkipForward />} handleClick={() => {}} />
          </div>
          <div
            className={`flex-nowrap content-center ${
              Repeat ? 'flex' : 'hidden'
            }`}
          >
            <IconButton
              icon={repeatIcon}
              handleClick={() => {
                setRepeat(true);
              }}
            />
          </div>
          <div
            className={`flex-nowrap content-center ${
              Repeat ? 'hidden' : 'flex'
            }`}
          >
            <IconButton
              icon={repeatIconOf}
              handleClick={() => {
                setRepeat(false);
              }}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full ">
          <div className="text-sm pr-3 pl-3 text-secondary ">
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
              max={songTime /** Change this */}
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

          <div className="text-sm pr-4 pl-4 text-secondary">
            {secondsToMin(songTime)}:{secondsToSec(songTime)}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end content-start w-1/5 pr-2 pl-2">
        <div className="flex flex-row content-center">
          <div
            className={`flex-nowrap content-center p-1 ${
              Faved ? 'hidden' : 'flex'
            } `}
          >
            <IconButton
              icon={<AiOutlineHeart />}
              handleClick={() => {
                setFaved(true);
              }}
            />
          </div>
          <div
            id="unfav"
            className={`flex-nowrap content-center p-1 ${
              Faved ? 'flex' : 'hidden'
            }`}
          >
            <IconButton
              icon={<AiFillHeart />}
              handleClick={() => {
                setFaved(false);
              }}
            />
          </div>

          <div
            className={`flex-nowrap content-center p-1 ${
              isVolOn ? 'flex' : 'hidden'
            } `}
          >
            <IconButton
              icon={volOn}
              handleClick={() => {
                setIsVolOn(false);
              }}
            />
          </div>

          <div
            className={`flex-nowrap content-center p-1 ${
              isVolOn ? 'hidden' : 'flex'
            } `}
          >
            <IconButton
              icon={volOf}
              handleClick={() => {
                setIsVolOn(true);
              }}
            />
          </div>

          <div
            className="w-1/2 p-0.5 pt-4"
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
    </div>
  );
}

export default MusicPlayer;
