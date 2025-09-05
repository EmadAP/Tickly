"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex w-11 h-11 justify-center items-center dark:bg-slate-800 bg-white p-2 rounded-full dark:hover:bg-slate-700 hover:bg-zinc-200 text-2xl outline-none cursor-pointer">
      <button onClick={handleToggle} className="z-20 cursor-pointer">
        {isDark ? (
          <Moon className="text-orange-500" size={27} />
        ) : (
          <Sun className="text-orange-500" />
        )}
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
}
