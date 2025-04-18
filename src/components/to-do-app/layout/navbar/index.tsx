"use client";

import { BellIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import DarkModeButton from "../../dark-mode-button";
import { Button } from "@heroui/react";

const Navbar = () => {
  return (
    <nav className="flex w-full h-full items-center justify-between bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-start w-1/2 gap-x-4">
        <p className="text-lg font-bold">LOGO</p>
      </div>
      <div className="flex items-center justify-end w-1/2 gap-x-1">
        <Button isIconOnly className="bg-transparent">
          <BellIcon width={24} height={24} />
        </Button>
        <Button className="bg-transparent" isIconOnly>
          <Cog8ToothIcon width={24} height={24} />
        </Button>

        <DarkModeButton />
      </div>
    </nav>
  );
};
export default Navbar;
