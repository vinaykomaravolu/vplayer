import React, { useEffect, useState, useRef, useContext } from 'react';
import { ThemeContext } from '../utilities/ThemeContext';
import { SearchBarSearchIcon, SearchBarCloseIcon } from './icons';

function SearchBar(props: { setState: any; state: string; handleSearch: any }) {
  const { setState, state, handleSearch } = props;
  const node = useRef<any>();
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(true);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = (event: any) => {
    if (node.current.contains(event.target)) {
      return;
    }
    if (node.current.value !== '') {
      return;
    }
    setState('');
    setSearchIsOpen(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const onEnter = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  return (
    <div className="flex  relative h-10 ">
      <input
        ref={node}
        type="text"
        className={`h-10  ${
          searchIsOpen
            ? 'opacity-0 w-0'
            : 'opacity-100 w-64 sm:w-36 md:w-48 lg:w-64'
        } pl-12 pr-9 text-base rounded-full z-0 transition-width transition-slowest ease duration-300 ease-in-out  focus:shadow focus:outline-none bg-${theme}-primary-2 text-${theme}-primary-text`}
        placeholder="Search Music"
        disabled={searchIsOpen}
        onChange={(event) => {
          setState(event.target.value);
        }}
        defaultValue={state}
        onKeyPress={onEnter}
      />
      <button
        type="button"
        disabled={!searchIsOpen}
        onClick={() => {
          setSearchIsOpen(!searchIsOpen);
        }}
        className={`focus:outline-none absolute top-1 text-${theme}-secondary-1  ${
          searchIsOpen
            ? `hover:text-${theme}-secondary-hover left-16`
            : 'pointer-events-none left-2'
        }`}
      >
        {SearchBarSearchIcon}
      </button>
      {state !== '' ? (
        <button
          type="button"
          onClick={(event) => {
            setState('');
            handleSearch(event);
          }}
          className={`focus:outline-none absolute top-2.5 right-2 text-${theme}-secondary-1 hover:text-${theme}-secondary-hover`}
        >
          {SearchBarCloseIcon}
        </button>
      ) : null}
    </div>
  );
}

export default SearchBar;
