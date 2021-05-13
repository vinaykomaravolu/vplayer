import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PlayListMini from './PlayListsMini';

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
  return (
    <Link
      to={to}
      className={`hover:bg-primary2 block text-white ${
        isActive ? 'bg-primary2' : 'hover:bg-primary2'
      }`}
    >
      <span className="inline-grid grid-cols-4 px-3 py-2">
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

const HomeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className=" h-6 w-5 fill-current text-secondary"
    viewBox="0 0 20 20"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const AllMusicIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-5 fill-current text-secondary"
    viewBox="0 0 20 20"
  >
    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
  </svg>
);

const AlbumsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-5 fill-current text-secondary"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
  </svg>
);

const PlaylistsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-5 fill-current text-secondary"
    viewBox="0 0 20 20"
  >
    <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
  </svg>
);

const SettingsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-5 fill-current text-secondary"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);

function Nav() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      data-testid="nav"
      className={`transition-width transition-slowest ease duration-250 ease-in-out flex flex-col flex-shrink-1 ${
        isOpen ? 'w-11' : 'w-48'
      } h-full bg-primary3 shadow-2xl`}
    >
      <button
        type="button"
        className="px-3 py-3 hover:bg-primary block text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current text-secondary"
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
        isActive={pathname.includes('/home')}
        icon={HomeIcon}
        title="Home"
        isTitleEnabled={!isOpen}
      />
      <NavLink
        data-testid="allmusic-link"
        to="/allmusic"
        isActive={pathname.includes('/allmusic')}
        icon={AllMusicIcon}
        title="Music"
        isTitleEnabled={!isOpen}
      />
      <NavLink
        data-testid="albums-link"
        to="/albums"
        isActive={pathname.includes('/albums')}
        icon={AlbumsIcon}
        title="Albums"
        isTitleEnabled={!isOpen}
      />
      <div className="w-full flex flex-row relative">
        <NavLink
          data-testid="playlists-link"
          to="/playlists"
          isActive={pathname.includes('/playlists')}
          icon={PlaylistsIcon}
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
              className="absolute top-1 right-2 subpixel-antialiased focus:outline-none hover:text-secondary2 text-secondary "
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
        <div className="w-full h-1/2 pl-5 pt-2 pb-2 flex flex-nowrap">
          <div className="flex flex-nowrap bg-primary2 rounded-l-xl w-full h-full ">
            <PlayListMini />
          </div>
        </div>
      )}
      <div className="flex flex-col h-full justify-end">
        <NavLink
          data-testid="settings-link"
          to="/settings"
          isActive={pathname.includes('/settings')}
          icon={SettingsIcon}
          title="Settings"
          isTitleEnabled={!isOpen}
        />
      </div>
    </div>
  );
}

export default Nav;
