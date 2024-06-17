"use client"

import React from 'react'
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from './constants'

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky -mt-16 top-0 z-50 py-3 backdrop-blur-lg border-0 border-b-white border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    {/* Logo + Name */}
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2' src="/c-logo-w.png" alt='logo' />
                        <span className='text-xl text-white tracking-tight'></span>
                    </div>

                    {/* Menu */}
                    <ul className='hidden lg:flex ml-14 space-x-12 text-white text-base font'>
                        {navItems.map((item, index) => 
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        )}
                    </ul>

                    {/* Sandwich Menu */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar} className="text-white">
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-[#2D2928] w-full p-12 flex flex-col justify-center items-center lg:hidden text-white">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Optional for now */}
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a
                                href="#"
                                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                            >
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar