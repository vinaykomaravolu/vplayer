import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Howl } from 'howler';
import icon from '../assets/icon.svg';
import './App.global.css';

const { ipcRenderer } = require('electron');

const Home = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [searchpath, setSearchPath] = useState<string>('');

  ipcRenderer.on('asynchronous-reply', (event: any, arg: any) => {
    setFiles(arg);
  });

  return (
    <div className="absolute inset-0 bg-white text-center h-full flex flex-col justify justify-center">
      ERB + TAILWIND = ❤
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          ipcRenderer.send('asynchronous-message', searchpath);
        }}
      >
        Find Music
      </button>
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
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
