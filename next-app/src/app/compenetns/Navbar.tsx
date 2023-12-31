'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineBars } from 'react-icons/ai';
import { useCookies } from 'react-cookie';

interface NavLi {
  id: number;
  link: string;
  title: string;
  token?: string | null;
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const cookies = useCookies(['token']);

  const navChange = () => {
    setToggle(!toggle);
  };

  const NavList: NavLi[] = [
    { id: 1, link: '/', title: 'Home' },
    { id: 2, link: '/login', title: 'Login' },
    { id: 3, link: '/signup', title: 'SignUp' },
    { id: 4, link: '/todo', title: 'Todo' }
  ];

  const list = NavList.map((items) => {
    return (
      <li key={items.id} className="list-none">
        <Link href={items.link} className="mr-2">
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
            <li className="list-none">
              <Link
                href="/"
                className="mr-2"
                onClick={() => {
                  navChange();
                }}
              >
                Home
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="/todo"
                className="mr-2"
                onClick={() => {
                  navChange();
                }}
              >
                Todo
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="/logout"
                className="mr-2"
                onClick={() => {
                  navChange();
                }}
              >
                Logout
              </Link>
            </li>{' '}
            <li className="list-none">
              <Link
                href="/login"
                className="mr-2"
                onClick={() => {
                  navChange();
                }}
              >
                Login
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="/signup"
                className="mr-2"
                onClick={() => {
                  navChange();
                }}
              >
                SignUp
              </Link>
            </li>
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
