"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll/modules'

const navLinks = [
  { id: "home", label: "Home", },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "contact" },
  { id: "projects", label: "Projects" }

]



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false)

  const pathname = usePathname()



  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200)
    };
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }

  )

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={`${sticky ? 'sticky  font-normal text-3xl text-gray-900 ' : " transition-all justify-between items-center font-normal text-3xl text-gray-900"}`}>

      <div className=" max-w-screen-xl flex justify-between items-center mx-auto h-28">


        <div className="flex">
          <Image className=" w-16 h-16" src="/images/logo.png" alt="Bordered avatar" width={65} height={65} />
          <div className="ml-5 text-xl">
            <span className=" font-black">Meraj Naqui</span>
            <p className="tracking-widest">Frontend Developer</p>
          </div>
        </div>

        <nav className="flex justify-end">
          <div className="font-noraml text-lg text-black capitalize hidden md:block lg:block">
            <ul className="flex gap-8">

              {
                navLinks.map((link) => {
                  return <Link activeClass="active" to={link.id} spy={true} smooth={true} offset={0} duration={500}>
                    {link.label}
                  </Link>
                })
              }
             </ul>
          </div>
          <div onClick={handleMenu} className="mr-6 sm:hidden">
            {!menuOpen ? (
              <AiOutlineMenu size={30} className=" text-2xl cursor-pointer ease-in duration-500" />
            ) : (
              <AiOutlineClose size={30} className=" text-2xl cursor-pointer ease-in duration-500" />
            )}
          </div>
        </nav>

        {/* Mobile version  listed menu */}
        <div
          className={menuOpen ? "left-0 top-0 w-[65%] h-screen relative bg-slate-800 ease-in duration-500 flex flex-col justify-start  z-10" : " left-[-100%]"}
        >
          {
            navLinks.map((link) => {
              return <Link activeClass="active" to={link.id} spy={true} smooth={true} offset={0} duration={500}>
                {link.label}
              </Link>
            })
          }


        </div>
      </div>
    </header>
  );
}

export default Navbar