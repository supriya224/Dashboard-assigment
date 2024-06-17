/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */

import React, { useState } from 'react';
import {
  AlignRight,
  BarChart2,
  BookOpen,
  Bookmark,
  HelpCircle,
  Home,
} from 'react-feather';
import { NavLink } from 'react-router-dom';

interface MenuItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

const SideBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);

  const menus: MenuItem[] = [
    { name: 'Home', link: '/', icon: <Home /> },
    { name: 'Stock', link: '/stock', icon: <BarChart2 /> },
    { name: 'Details', link: '/details', icon: <BookOpen /> },
    { name: 'Market', link: '/markets', icon: <Bookmark /> },
    { name: 'Help', link: '/help', icon: <HelpCircle /> },
  ];

  return (
    <section className="relative">
      <div
        className={`bg-zinc-950 h-full ${open ? 'w-48' : 'w-14'} text-white`}
      >
        <div className="cursor-pointer flex justify-end">
          <AlignRight onClick={() => setOpen(!open)} />
        </div>

        <div className="mt-48 flex flex-col gap-1 relative">
          {menus.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className={({ isActive }) =>
                `group flex gap-3 leading-10 font-medium items-center text-sm hover:bg-zinc-800 rounded-md p-2 m-2 ${
                  isActive ? 'border-r-4 border-blue-400' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <p className={`top-28 ${isActive ? 'text-blue-400' : ''}`}>
                    {item.icon}
                  </p>
                  <h3
                    style={{
                      transitionDelay: `${index + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && 'opacity-0 translate-x-28 overflow-hidden'
                    }`}
                  >
                    {item.name}
                  </h3>
                  <h3
                    className={`${
                      open && 'hidden'
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-500 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-16 group-hover:duration-500 group-hover:w-fit`}
                  >
                    {item.name}
                  </h3>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
