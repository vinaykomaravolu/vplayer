/* eslint-disable import/prefer-default-export */
import React from 'react';

export const PlayIcon = (
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

export const PauseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export const repeatIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  >
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

export const repeatIconOf = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  >
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

export const shuffleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17,17h-1.559l-9.7-10.673C5.552,6.119,5.283,6,5.001,6H2v2h2.559l4.09,4.5l-4.09,4.501H2v2h3.001 c0.282,0,0.551-0.119,0.74-0.327L10,13.987l4.259,4.686C14.448,18.881,14.717,19,14.999,19H17v3l5-4l-5-4V17z" />
    <path d="M15.441,8H17v3l5-3.938L17,3v3h-2.001c-0.282,0-0.551,0.119-0.74,0.327l-3.368,3.707l1.48,1.346L15.441,8z" />
  </svg>
);

export const shuffleIconOf = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="primary"
  >
    <path d="M17,17h-1.559l-9.7-10.673C5.552,6.119,5.283,6,5.001,6H2v2h2.559l4.09,4.5l-4.09,4.501H2v2h3.001 c0.282,0,0.551-0.119,0.74-0.327L10,13.987l4.259,4.686C14.448,18.881,14.717,19,14.999,19H17v3l5-4l-5-4V17z" />
    <path d="M15.441,8H17v3l5-3.938L17,3v3h-2.001c-0.282,0-0.551,0.119-0.74,0.327l-3.368,3.707l1.48,1.346L15.441,8z" />
  </svg>
);

export const volOf = (
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
      strokeWidth="2"
      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
      clipRule="evenodd"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
    />
  </svg>
);

export const volOn = (
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
      strokeWidth="2"
      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
    />
  </svg>
);

export const diagonalLine = (
  <svg
    className="h-10 w-10"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <line x1="0" y1="0" x2="5" y2="5" strokeWidth="2" stroke="red" />
  </svg>
);
