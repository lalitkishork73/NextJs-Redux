'use client'
import React from 'react';

const Home = () => {
  return (
    <div className="bg-[url(https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_1280.jpg)] w-full bg-cover">
      <main className="flex justify-center items-center h-[90vh] text-black bg-black-0 blur-1  ">
        <div className="p-2 bg-transparent">
          <h1 className=" m-2 text-2xl text-white text-center">
            Organize Your Amazing Thoughts, Add Your First ToDo
          </h1>
          <div className="flex justify-center">
            <button className="bg-orange-400 hover:bg-orange-500 p-2 rounded-lg text-purple-50 m-2">
              Todo Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
