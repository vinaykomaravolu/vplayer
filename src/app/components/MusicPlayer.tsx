/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!rc-slider/assets/index.css';
import React, { useState } from 'react';
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

function MusicPlayer() {
  const [isTimelineHover, setIsTimelineHover] = useState<boolean>(false);
  const [isVolumelineHover, setVolumelineHover] = useState<boolean>(false);
  const [Playing, setPlaying] = useState<boolean>(false);
  const [Faved, setFaved] = useState<boolean>(false);
  const [isVolOn, setIsVolOn] = useState<boolean>(false);
  const [Shuffle, setShuffle] = useState<boolean>(false);
  const [Repeat, setRepeat] = useState<boolean>(false);
  let currentTime = 0;
  let songName = 'Song Name';
  let songAuthor = 'Song Artist';
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

  return (
    <div className="bg-primary3 flex flex-row justify-start h-full w-full">
      <div className="w-36 md:w-60 h-full flex flex-row">
        <div className="h-0 w-0  md:h-28 md:w-28 rounded-2xl">
          <img
            src={DefaultImage}
            alt={DefaultImage}
            className="h-full w-full object-cover p-2 rounded-2xl"
          />
        </div>

        <div className="flex flex-col justify-center content-center overflow-hidden text-secondary">
          <div className="w-32 p-2">
            <div className="text-lg truncate">{songName}</div>
            <div className="text-sm truncate"> {songAuthor} </div>{' '}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center pr-2 pl-2 ">
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
                setRepeat(false);
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
                setRepeat(true);
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
      <div className="flex flex-row justify-end content-end w-20 md:w-60 pr-2 pl-2">
        <div className="flex flex-col justify-center content-end">
          <div className="flex flex-row justify-end">
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

            <div className="hidden md:flex">
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
                className="w-32 p-0.5 pt-4"
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
      </div>
    </div>
  );
}

export default MusicPlayer;
