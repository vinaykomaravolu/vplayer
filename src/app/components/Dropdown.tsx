import React, { useEffect, useState, useRef, createRef } from 'react';
import { createPopper, VirtualElement } from '@popperjs/core';
import { motion } from 'framer-motion';

const Dropdown = ({
  buttonStyle,
  i,
}: {
  buttonStyle: JSX.Element;
  i: number;
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
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', openDropdownPopover);

    return () => {
      document.removeEventListener('mousedown', openDropdownPopover);
    };
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        <div
          className="w-full sm:w-6/12 md:w-4/12 px-4 "
          onMouseLeave={() => {
            setDropdownPopoverShow(false);
          }}
        >
          <div className="relative inline-flex align-middle w-full ">
            <motion.button
              className="focus:outline-none w-full h-full"
              whileHover={{ scaleX: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onMouseOver={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onClick();
              }}
            >
              <div ref={btnDropdownRef}>{buttonStyle}</div>
            </motion.button>
            <div
              ref={popoverDropdownRef}
              className={`${
                dropdownPopoverShow ? 'block ' : 'hidden '
              } bg-primary3 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1`}
              style={{ minWidth: '12rem' }}
            >
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
                onClick={(e) => e.preventDefault()}
              >
                {i < 3 ? (
                  <Dropdown buttonStyle={buttonStyle} i={i + 1} />
                ) : null}
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
                onClick={(e) => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
                onClick={(e) => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
                onClick={(e) => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
