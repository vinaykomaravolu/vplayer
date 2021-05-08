import React, { useState, Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  NavLink,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Howl } from 'howler';
import Home from './pages/Home';
import AllMusic from './pages/AllMusic';
import Playlists from './pages/Playlists';
import Settings from './pages/Settings';
import Nav from './components/Nav';
import WindowNav from './components/WindowNav';
import './App.global.css';
import MusicPlayer from './components/MusicPlayer';

const { ipcRenderer } = require('electron');

const TestC = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [searchpath, setSearchPath] = useState<string>('');
  const [theme, setTheme] = useState<boolean>(true);

  ipcRenderer.on('asynchronous-reply', (event: any, arg: any) => {
    setFiles(arg);
  });

  return (
    <div className="absolute inset-0 bg-white text-center h-full flex flex-col justify justify-center">
      ERB + TAILWIND = ❤
      <button
        type="button"
        className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          ipcRenderer.send('asynchronous-message', searchpath);
        }}
      >
        Find Music
      </button>
      <div className="overflow-auto h-12">
        Lorem ipsum dolor sLorem ipsum dolor sit amet..Lorem ipsum dolor sit
        amet..Lorem ipsum dolor sit amet..Lorem ipsum dolor sit amet..Lorem
        ipsum dolor sit amet..Lorem ipsum dolor sit amet..Lorem ipsum dolor sit
        amet..Lorem ipsum dolor sit amet..Lorem ipsum dolor sit amet..Lorem
        ipsum dolor sit amet..Lorem ipsum dolor sit amet..Lorem ipsum dolor sit
        amet..Lorem ipsum dolor sit amet..Lorem ipsum dolor sit amet..Lorem
        ipsum dolor sit amet..Lorem ipsum dolor sit amet..it amet...
      </div>
      <div className="theme-light">
        <input
          type="checkbox"
          checked={theme}
          onChange={() => setTheme(!theme)}
        />
        <button className="bg-primary" type="button">
          Hello
        </button>
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Placeholder"
          onChange={(event) => setSearchPath(event.target.value)}
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div>
        <h3>List</h3>
        <ul>
          {files.map((file, key) => {
            return (
              <li key={file}>
                <div className="font-bold">{file}</div>
                <button
                  type="button"
                  className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
                  onClick={() => {
                    const sound = new Howl({
                      src: [file],
                    });
                    sound.play();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Suspense fallback={<TestC />}>
      <BrowserRouter>
        <div className="w-screen h-screen">
          <div className="h-full w-full flex flex-col">
            <div
              data-testid="app"
              className="bg-gradient-to-t from-primary to-primary3 flex flex-row h-full overflow-y-auto"
            >
              <WindowNav />
              <Nav />
              <div className="flex-1 overflow-x-hidden">
                <AnimatePresence>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/allmusic" component={AllMusic} />
                    <Route exact path="/playlists" component={Playlists} />
                    <Route exact path="/settings" component={Settings} />
                    <Redirect exact path="/" to="/home" />
                  </Switch>
                </AnimatePresence>
              </div>
            </div>
            <div className="h-28 w-full">
              <MusicPlayer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
