"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

const Nav = ({ openMenu }: any) => {
  const { theme, setTheme, systemTheme } = useTheme();
  return (
    <div className="text-[#5bd6d2] dark:text-[#FACD66] text-[24px] flex flex-col gap-3 w-fit items-center sticky top-10 z-40">
      {/* Nav Items */}
      <div
        className={`flex flex-col md:gap-6 w-fit fixed ${
          openMenu ? "left-2" : "-left-36"
        } transition-all ease-in-out duration-150 z-10 translate-y-[18%] md:translate-y-0 md:left-0 md:relative 
        shadow-lg md:shadow-none dark:shadow-neutral-100/20 shadow-cyan-500/20 rounded-[12px] overflow-hidden border-2 md:border-none border-[#5bd6d2] dark:border-[#FACD66] items-center`}
      >
        <Link href={"/"}>
          <Image
            src={theme === "light" ? "logo-light.svg" : "/logo.svg"}
            alt="musica"
            width={34}
            height={34}
            className="mb-6 mr-4 mt-2 md:mr-0 hidden md:block"
          />
        </Link>
        <ul
          className={`nav-seprator-bottom flex flex-col gap-8 bg-[#0f1112] w-fit px-4 text-center md:rounded-[32px] py-6 border-none md:border-solid border-2 border-[#5bd6d2] dark:border-[#FACD66]`}
        >
          <Link href={"/"}>
            <li className="w-8 ease-in cursor-pointer md:hover:drop-shadow-glowLight md:dark:hover:drop-shadow-glowDark active:opacity-25">
              <i className="fa-solid fa-house "></i>
            </li>
          </Link>
          <Link href={"/songs"}>
            <li className="w-8 cursor-pointer md:hover:drop-shadow-glowLight md:dark:hover:drop-shadow-glowDark active:opacity-25">
              <i className="fa-solid fa-music"></i>
            </li>
          </Link>
          <Link href={"/radio"}>
            <li className="w-8 cursor-pointer md:hover:drop-shadow-glowLight md:dark:hover:drop-shadow-glowDark active:opacity-25">
              <i className="fa-solid fa-radio"></i>
            </li>
          </Link>
          <Link href={"/albums"}>
            <li className="w-8 cursor-pointer md:hover:drop-shadow-glowLight md:dark:hover:drop-shadow-glowDark active:opacity-25">
              <i className="fa-solid fa-film"></i>
            </li>
          </Link>
        </ul>
        <ul className="nav-seprator-bottom flex flex-col gap-8 bg-[#0f1112] w-fit px-4 text-center md:rounded-[32px] py-6 border-none md:border-solid border-2 border-[#5bd6d2] dark:border-[#FACD66]">
          <Link href={"/account"}>
            <li className="w-8 cursor-pointer md:hover:drop-shadow-glowLight md:dark:hover:drop-shadow-glowDark active:opacity-25">
              <i className="fa-solid fa-user"></i>
            </li>
          </Link>
          <Link href={"/"}>
            <li className="w-8 cursor-pointer md:hover:drop-shadow-glowLight md:dark:hover:drop-shadow-glowDark active:opacity-25">
              <i className="fa-solid fa-right-from-bracket"></i>
            </li>
          </Link>
          <ThemeSwitcher />
        </ul>
      </div>
    </div>
  );
};

export default Nav;
