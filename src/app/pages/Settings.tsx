import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const paths: string[] = [
  'A:\\Music\\',
  'A:\\Downloads\\',
  'A:\\Downloads\\Music\\',
  'A:\\Downloads\\Music\\',
  'A:\\Downloads\\Music\\',
  'A:\\Downloads\\Music\\',
  'A:\\Downloads\\Music\\',
  'A:\\Downloads\\Music\\',
  'A:\\Downloads\\Music\\',
  'A:\\Downloads\\Music\\Downloads\\Music\\Downloads\\Music\\',
  'A:\\Downloads\\Music\\Downloads\\Music\\Downloads\\Music\\Downloads\\Music\\',
  'A:\\Downloads\\Music\\Downloads\\Music\\Downloads\\Music\\Downloads\\Music\\Downloads\\Music\\',
];

interface Styling {
  primary: string;
  primary2: string;
  primary3: string;
  secondary: string;
  secondary2: string;
}

const preferences: Styling[] = [
  {
    primary: '#0B0E11',
    primary2: '#151A21',
    primary3: '#242C37',
    secondary: '#FFD700',
    secondary2: '#F2AA4C',
  },
  {
    primary: '#0B0E11',
    primary2: '#151A21',
    primary3: '#242C37',
    secondary: '#FFD700',
    secondary2: '#F2AA4C',
  },
  {
    primary: '#0B0E11',
    primary2: '#151A21',
    primary3: '#242C37',
    secondary: '#FFD700',
    secondary2: '#F2AA4C',
  },
  {
    primary: '#0B0E11',
    primary2: '#151A21',
    primary3: '#242C37',
    secondary: '#FFD700',
    secondary2: '#F2AA4C',
  },
  {
    primary: '#0B0E11',
    primary2: '#151A21',
    primary3: '#242C37',
    secondary: '#FFD700',
    secondary2: '#F2AA4C',
  },
  {
    primary: '#0B0E11',
    primary2: '#151A21',
    primary3: '#242C37',
    secondary: '#FFD700',
    secondary2: '#F2AA4C',
  },
];

function Settings() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="section-page"
      id="settings"
    >
      <div className="section-title ">Settings</div>
      <div id="settings-musiclocation">
        <div className="flex justify-between w-full">
          <div className="section-subtitle ">Where To Find Music</div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="section-subtitle  subpixel-antialiased focus:outline-none hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>
        <div className="bg-primary3 rounded-xl m-2 h-96 overflow-y-auto ">
          <div className="divide-y p-5 divide-white ">
            {paths.map((path, i) => {
              return (
                <p
                  className="pl-4 pr-4 pt-2 pb-2 text-secondary w-full truncate"
                  key={path}
                >
                  {path}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div id="settings-musiclocation">
        <div className="section-subtitl">Preferences</div>
        <div
          id="prefernces-colors"
          className="flex flex-row flex-wrap w-full p-2"
        >
          {preferences.map((style: Styling) => {
            return (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`mr-4 mb-4 w-24 h-24 rounded-2xl bg-gradient-to-r from-[${style.primary}] via-[${style.primary2}] via-[${style.secondary2}] to-[${style.secondary}]`}
                key={style.primary + style.secondary}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Settings;
