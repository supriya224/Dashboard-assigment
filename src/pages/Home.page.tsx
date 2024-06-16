/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Bookmark, Compass, Search, Tv } from 'react-feather';
import { MainLayout } from '../layouts';
import Card from '../components/core/cards/Card';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <section className="w-[90vw] h-screen bg-zinc-300 gap-1">
        {/* navabr section */}
        <div className="flex justify-between bg-zinc-900 py-8 px-2 items-center mx-1">
          <div>
            <h3 className="text-white text-3xl ">Hello jane</h3>
            <p className="text-zinc-400">
              Thursday <span>February 15</span>
            </p>
          </div>
          <div className="flex gap-9 text-zinc-400">
            <h3 className="flex gap-1 text-xs items-center justify-center w-fit bg-zinc-800 rounded-full p-2">
              <span>
                <Compass />
              </span>
              For you
            </h3>
            <h3 className="flex gap-1 text-sm items-center justify-center w-fit bg-zinc-800 rounded-full p-2">
              <span>
                <Tv />
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
      </section>
    </MainLayout>
  );
};

export default HomePage;
