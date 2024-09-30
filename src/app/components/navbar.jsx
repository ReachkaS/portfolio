"use client";

import React, { useState } from 'react';
import NavLink from './NavLink';
import { ArrowDownIcon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: 'HOME', href: '#home' },
  { title: 'ABOUT', href: '#about' },
  { title: 'PROJECTS', href: '#projects' },
  { title: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className='sticky top-0 scale-50 md:scale-100  right-0 left-0 opacity-90'>
      <div className='flex flex-wrap items-center justify-center mx-auto p-5'>
        <ul className='flex p-4 flex-row space-x-8 transition-colors bg-white  rounded-full drop-shadow-2xl'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.href} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;