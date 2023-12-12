"use client";
import React, { useState } from "react";
import Search from "./Search";
import Nav from "./Nav";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="sticky top-10 z-20 flex gap-2 md:gap-0 mb-10  mt-2 md:mt-0 md:px-0 md:pl-4">
      <div className="md:hidden">
        <Nav openMenu={openMenu} />
      </div>
      <div className="flex flex-1">
        <Link href={"/"}>
          <div className="mb-6 mr-4 mt-2 md:mr-0 block md:hidden relative w-8 text-[24px]">
            <i className="fa-solid fa-music absolute -top-[8.5px] -left-2 text-black text-[22px] -z-10"></i>
            <i className="fa-solid fa-music text-[#5bd6d2] dark:text-[#FACD66]"></i>
          </div>
        </Link>
        <Search />
        <div
          className="w-[40px] text-[28px] md:hidden text-[#5bd6d2] dark:text-[#FACD66] h-fit mr-4"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <i className={`fa-solid ${openMenu ? "fa-xmark" : "fa-bars"}`}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
