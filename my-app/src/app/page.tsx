'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  // const [count, setCount] = useState(0);
  const { count } = useSelector((state: any) => state.countManagement);
  // const inc = () => {
  //   setCount(count + 1);
  // };
  // const dec = () => {
  //   setCount(count - 1);
  // };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-xl">{count}</h1>
        <div className="flex ">
          <button className="bg-red-500 p-2 m-1 rounded-lg " onClick={dec}>
            Remove
          </button>
          <button className="bg-green-500 p-2 m-1 rounded-lg" onClick={inc}>
            Addons
          </button>
        </div>
      </div>
    </>
  );
}
