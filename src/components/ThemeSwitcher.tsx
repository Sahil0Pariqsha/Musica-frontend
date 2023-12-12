"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem("preferred-theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("dark");
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("preferred-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="md:hover:drop-shadow-glowLight md:dark:hover:drop-shadow-glowDark"
    >
      {resolvedTheme === "dark" ? (
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
};
