/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useRef, createRef } from 'react';
import { createPopper, VirtualElement } from '@popperjs/core';
import { motion } from 'framer-motion';
import { Console } from 'node:console';
import DropdownData from '../types/DropdownData';

const dirIcon = (
  <svg
    className="fill-current h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M8.854 11.646l5.792-5.792a.5.5 0 01.854.353v11.586a.5.5 0 01-.854.353l-5.792-5.792a.5.5 0 010-.708z" />
  </svg>
);

const Dropdown = ({
  buttonStyle,
  data,
}: {
  buttonStyle: JSX.Element;
  data: DropdownData;
}) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef: React.RefObject<
    Element | VirtualElement | any
  > = createRef();
  const popoverDropdownRef: React.RefObject<
    Element | VirtualElement | any
  > = createRef();

  const openDropdownPopover = (event: any) => {
    event.preventDefault();
    if (btnDropdownRef.current) {
      if (btnDropdownRef.current.contains(event.target)) {
        return;
      }
    }
    setDropdownPopoverShow(false);
  };

  // bg colors

  const onClick = () => {
    if (dropdownPopoverShow) {
      return;
    }
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'left-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-6, -2],
          },
        },
      ],
    });
    setDropdownPopoverShow(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', openDropdownPopover);
    window.addEventListener('scroll', openDropdownPopover, true);
    return () => {
      document.removeEventListener('mousedown', openDropdownPopover);
      window.removeEventListener('scroll', openDropdownPopover);
    };
  }, []);
  return (
    <>
      <div className="flex flex-wrap w-full h-full shadow-md">
        <div
          className="w-full h-full"
          onMouseLeave={
            data.type === 'menu'
              ? () => {
                  setDropdownPopoverShow(false);
                }
              : () => {}
          }
        >
          <div className="inline-flex align-middle w-full h-full ">
            {data.type === 'root' || data.type === 'menu' ? (
              data.type === 'root' ? (
                <button
                  className="focus:outline-none w-full h-full"
                  type="button"
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    if (data.type !== 'item') {
                      onClick();
                    }
                  }}
                >
                  <div ref={btnDropdownRef}>
                    {data.name ? data.name : buttonStyle}
                  </div>
                </button>
              ) : (
                <button
                  className="focus:outline-none w-full h-full hover:bg-primary2 rounded text-left pr-2 truncate"
                  type="button"
                  onMouseEnter={(event) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    event.stopPropagation();
                    onClick();
                  }}
                >
                  <div ref={btnDropdownRef} className="flex flex-row w-full">
                    <div>{dirIcon}</div>
                    <div>{data.name}</div>
                  </div>
                </button>
              )
            ) : (
              <button
                className="focus:outline-none w-full h-full hover:bg-primary2 rounded text-left pl-5 pr-2 truncate"
                type="button"
                onMouseDown={
                  data.handle
                    ? () => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        data.handle();
                      }
                    : () => {}
                }
              >
                <div ref={btnDropdownRef}>
                  <div>{data.name}</div>
                </div>
              </button>
            )}
            <div
              ref={popoverDropdownRef}
              className={`${
                dropdownPopoverShow ? 'block ' : 'hidden '
              } bg-primary3 text-base z-50 flex flex-col text-left rounded shadow-lg `}
              style={{ minWidth: '12rem' }}
            >
              {data.children?.map((child) => {
                return (
                  <a
                    href="#pablo"
                    className="text-sm font-normal h-8 w-full whitespace-nowrap bg-transparent text-white "
                    onClick={(e) => e.preventDefault()}
                    key={data.name}
                  >
                    <Dropdown buttonStyle={buttonStyle} data={child} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;