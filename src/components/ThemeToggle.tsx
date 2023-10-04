import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ThemeToggle() {


  const [theme, setTheme] = useState("light"); 


  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Update local storage with new theme
  };


  useEffect(() => {
    // When the component mounts, check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If no theme is found in localStorage, use the default "light" theme
      localStorage.setItem("theme", "light");
    }
  }, []);


  useEffect(() => {
    // Update the document styling based on the theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button onClick={handleClick} className="relative">
      <SunIcon
        className={`w-6 h-6 transition-all ${
          theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <MoonIcon
        className={`absolute top-0 transition-all ${
          theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
    </button>
  );
}
