/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Bookmark, Compass, Search, Tv } from 'react-feather';
import { MainLayout } from '../layouts';
import Card from '../components/core/cards/Card';
import MarketPage from './Market.page';
import Charts from '../components/core/Charts';

const HomePage: React.FC = () => {
  // Get the current date in a formatted string
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  return (
    <MainLayout>
      <section className="w-[90vw] h-full gap-1  bg-zinc-900">
        {/* navabr section */}
        <div className="flex flex-wrap md:justify-between bg-zinc-900 py-5 px-2 items-center mx-1 ">
          <div>
            <h3 className="text-white text-3xl">Hello Jane</h3>
            <p className="text-zinc-400">{currentDate}</p>
          </div>
          <div className="flex gap-2 pt-1 text-zinc-400">
            <h3 className="flex gap-1 text-xs items-center justify-center w-fit bg-zinc-800 rounded-full p-2">
              <span>
                <Compass />
              </span>
              For you
            </h3>
            <h3 className="flex gap-1 text-sm items-center justify-center w-fit bg-zinc-800 rounded-full p-2">
              <span>
                <Tv size={30} className="p-1" />
              </span>
              screener
            </h3>
            <Search size={40} className=" w-fit p-2 bg-zinc-800 rounded-full" />
            <Bookmark
              size={40}
              className=" w-fit p-2 bg-zinc-800 rounded-full"
            />
          </div>
        </div>
        <hr className="border-zinc-800" />
        {/* card section */}
        <Card />
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-12 rounded-xl  bg-black h-fit">
          <MarketPage />
          <Charts />
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
