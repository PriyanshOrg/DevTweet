import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button onClick={handleClick}>
      {theme === 'light'
        ? <SunIcon className="h-6 hover:text-blue-700" />
        : <MoonIcon className="h-6 hover:text-blue-400" />
      }
    </button>
  );
}
