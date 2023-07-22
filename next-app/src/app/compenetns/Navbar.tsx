'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineBars } from 'react-icons/ai';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navChange = () => {
    setToggle(!toggle);
  };

  const token = true;

  const NavList = [
    { id: 1, link: '/', title: 'Home' },
    { id: 2, link: '/login', title: 'Login' },
    { id: 3, link: '/signup', title: 'SignUp' },
    { id: 4, link: '/todo', title: 'Todo' }
  ];

  const list = NavList.map((items) => {
    return (
      
      <li key={items.id} className="list-none p-1">
        <Link
          className="hover:font-bold text-orange-50"
          href={items.link}
        >
          {items.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className="bg-orange-500  relative sm:flex sm:justify-around ">
        <h1 className="font-bold text-2xl p-2 sm:mt-3">
          To<span className="text-orange-800">Do</span>
        </h1>
        <div>
          <nav
            className={
              toggle
                ? `flex flex-col sm:flex-row text-center p-5`
                : `hidden sm:flex sm:flex-row text-center p-5`
            }
          >
            {list}
          </nav>
        </div>

        <div className={'sm:hidden'}>
          {toggle ? (
            <AiOutlineClose
              className="absolute top-0 right-0 m-2 text-2xl"
              onClick={() => {
                navChange();
              }}
            />
          ) : (
            <AiOutlineBars
              className="absolute top-0 right-0 m-2 text-2xl"
              onClick={() => {
                navChange();
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
