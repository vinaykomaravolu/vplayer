import React, { useEffect, useState, useRef } from 'react';

const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);

const CloseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

function SearchBar(props: { setState: any; state: string; handleSearch: any }) {
  const { setState, state, handleSearch } = props;
  const node = useRef<any>();
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(true);

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
        } pl-12 pr-9 text-base rounded-full z-0 transition-width transition-slowest ease duration-300 ease-in-out  focus:shadow focus:outline-none bg-primary2 text-white`}
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
        className={`focus:outline-none absolute top-1 left-2 text-secondary  ${
          searchIsOpen ? 'hover:text-secondary2 ' : 'pointer-events-none'
        }`}
      >
        {SearchIcon}
      </button>
      {state !== '' ? (
        <button
          type="button"
          onClick={(event) => {
            setState('');
            handleSearch(event);
          }}
          className="focus:outline-none absolute top-2.5 right-2 text-secondary hover:text-secondary2"
        >
          {CloseIcon}
        </button>
      ) : null}
    </div>
  );
}

export default SearchBar;
