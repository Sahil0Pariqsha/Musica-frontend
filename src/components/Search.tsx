import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="w-full -my-2">
      <form className="search text-[24px] flex-1 mr-4 px-2 border-b-2 rounded-lg border-[#1D2123] dark:border-[#FACD66] bg-[#1D2123]">
        <div className="flex items-center">
          <button type="submit" className="h-full w-[30px]">
            <Image
              src="/search.svg"
              alt="search"
              width={30}
              height={30}
              className="mx-auto"
            />
          </button>
          <input
            type="text"
            placeholder="Search"
            name="search input"
            id="search"
            className="bg-transparent outline-none p-2 dark:opacity-50 text-[#39a0bc] dark:text-white w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
