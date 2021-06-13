import React, { useEffect, useState, useRef, useContext } from 'react';
import { ThemeContext } from '../utilities/ThemeContext';
import { SearchBarSearchIcon, SearchBarCloseIcon } from './Icons';

function SearchBar(props: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  state: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSearch: any;
}) {
  const { setState, state, handleSearch } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const node = useRef<any>();
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(true);
  const { theme } = useContext(ThemeContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div className="flex relative h-10 ">
      <input
        ref={node}
        type="text"
        className={`h-10  ${
          searchIsOpen
            ? 'opacity-0 w-0 ml-0 pl-0'
            : 'opacity-100 w-64 sm:w-36 md:w-48 lg:w-64 ml-10 pl-12'
        } text-base rounded-full z-0 focus:outline-none outline-none pr-10 transition-all transition-slowest ease duration-500 ease-in-out focus:shadow bg-${theme}-primary-2 text-${theme}-primary-text`}
        placeholder="Search Music"
        disabled={searchIsOpen}
        onChange={(event) => {
          setState(event.target.value);
        }}
        value={state}
        defaultValue=""
        onKeyPress={onEnter}
      />
      <button
        type="button"
        disabled={!searchIsOpen}
        onClick={() => {
          setSearchIsOpen(!searchIsOpen);
        }}
        className={`focus:outline-none outline-none absolute top-1 ${
          searchIsOpen ? 'left-0' : 'left-12'
        }  text-${theme}-secondary-1 hover:text-${theme}-secondary-hover transition-all transition-slowest ease duration-500 ease-in-out`}
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
