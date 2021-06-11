import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PlayListMini from './PlayListsMini';
import { ThemeContext } from '../utilities/ThemeContext';
import {
  NavAlbumsIcon,
  NavAllMusicIcon,
  NavHomeIcon,
  NavPlaylistsIcon,
  NavSettingsIcon,
} from './Icons';

function NavLink({
  to = '/',
  isActive = false,
  icon,
  title = '',
  isTitleEnabled,
}: {
  to: string;
  isActive: boolean;
  icon: React.ReactElement;
  title: string;
  isTitleEnabled: boolean;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      to={to}
      className={`hover:bg-${theme}-primary-hover block text-${theme}-primary-text ${
        isActive ? `bg-${theme}-primary-2` : `hover:bg-${theme}-primary-hover`
      }`}
    >
      <span
        className={`inline-grid grid-cols-4 px-3 py-2 text-${theme}-secondary-text`}
      >
        {icon}
        {isTitleEnabled ? (
          <span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
            >
              {title}
            </motion.div>
          </span>
        ) : null}
      </span>
    </Link>
  );
}

function Nav() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      data-testid="nav"
      className={`transition-width transition-slowest ease duration-250 ease-in-out flex flex-col flex-shrink-1  ${
        isOpen ? 'w-11' : 'w-48'
      } h-full bg-${theme}-primary-3 shadow-2xl`}
    >
      <button
        type="button"
        className={`px-3 py-3 hover:bg-${theme}-primary-hover block text-${theme}-primary-text focus:outline-none`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current "
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <NavLink
        data-testid="home-link"
        to="/home"
        isActive={pathname.toLowerCase().includes('/home')}
        icon={NavHomeIcon}
        title="Home"
        isTitleEnabled={!isOpen}
      />
      <NavLink
        data-testid="allmusic-link"
        to="/allmusic"
        isActive={pathname.toLowerCase().includes('/allmusic')}
        icon={NavAllMusicIcon}
        title="Music"
        isTitleEnabled={!isOpen}
      />
      <NavLink
        data-testid="albums-link"
        to="/albums"
        isActive={pathname.toLowerCase().includes('/albums')}
        icon={NavAlbumsIcon}
        title="Albums"
        isTitleEnabled={!isOpen}
      />
      <div className="w-full flex flex-row relative">
        <NavLink
          data-testid="playlists-link"
          to="/playlists"
          isActive={pathname.toLowerCase().includes('/playlists')}
          icon={NavPlaylistsIcon}
          title="Playlists"
          isTitleEnabled={!isOpen}
        />
        {isOpen ? null : (
          <div className="bg-transparent  rounded-full">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
              type="button"
              className={`absolute top-1 right-2 subpixel-antialiased focus:outline-none hover:text-${theme}-secondary-hover  text-${theme}-secondary-1  `}
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
        )}
      </div>

      {isOpen ? null : (
        <div className="w-full min-h-0 max-h-96 p-2 flex flex-nowrap">
          <div
            className={`flex flex-nowrap bg-${theme}-primary-2 rounded-md w-full h-full `}
          >
            <PlayListMini />
          </div>
        </div>
      )}
      <div className="flex flex-col h-full justify-end">
        <NavLink
          data-testid="settings-link"
          to="/settings"
          isActive={pathname.toLowerCase().includes('/settings')}
          icon={NavSettingsIcon}
          title="Settings"
          isTitleEnabled={!isOpen}
        />
      </div>
    </div>
  );
}

export default Nav;
