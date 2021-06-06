import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../utilities/ThemeContext';
import TailwindInfo from '../../../tailwind.config';

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

const preferences: string[] = ['amber', 'retro'];

function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [themes, setThemes] = useState<string[]>([]);

  useEffect(() => {
    console.log(TailwindInfo.themeCustomId);
    setThemes(TailwindInfo.themeCustomId);
  }, []);

  const changeTheme = (event: any) => {
    console.log(event.target.value);
    setTheme(event.target.value);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`section-page scrollbar-thin scrollbar-thumb-${theme}-secondary-2 scrollbar-track-transparent  scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
      id="settings"
    >
      <div className={`section-title text-${theme}-primary-text `}>
        Settings
      </div>
      <div id="settings-musiclocation">
        <div className="flex justify-between w-full">
          <div className={`section-subtitle text-${theme}-secondary-text`}>
            Where To Find Music
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className={`section-subtitle  subpixel-antialiased focus:outline-none hover:text-${theme}-secondary-hover text-${theme}-secondary-text`}
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
        <div
          className={`bg-${theme}-primary-3 rounded-xl m-2 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-${theme}-secondary-2 scrollbar-track-transparent  scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
        >
          <div className={`divide-y p-5 divide-${theme}-secondary-text`}>
            {paths.map((path, i) => {
              return (
                <p
                  className={`pl-4 pr-4 pt-2 pb-2 text-${theme}-primary-text w-full truncate`}
                  // eslint-disable-next-line react/no-array-index-key
                  key={path + i}
                >
                  {path}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div id="settings-musiclocation">
        <div className={`section-subtitle text-${theme}-secondary-text`}>
          Preferences
        </div>
        <div
          id="prefernces-colors"
          className="flex flex-row flex-wrap w-full p-2"
        >
          {themes
            ? themes.map((style: string) => {
                return (
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    value={`theme-${style}`}
                    onClick={changeTheme}
                    className={`shadow-md focus:outline-none mr-4 mb-4 w-24 h-24 rounded-2xl bg-gradient-to-r from-theme-${style}-primary-1 via-theme-${style}-primary-2 via-theme-${style}-secondary-2 to-theme-${style}-secondary-1`}
                    key={style}
                  />
                );
              })
            : null}
        </div>
      </div>
    </motion.div>
  );
}

export default Settings;
