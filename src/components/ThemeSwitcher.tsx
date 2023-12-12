"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="md:hover:drop-shadow-glowLight md:dark:hover:drop-shadow-glowDark"
    >
      {theme === "dark" ? (
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
};
