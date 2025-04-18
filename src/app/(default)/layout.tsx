"use client";

import Navbar from "@/components/to-do-app/layout/navbar";
import Sidebar from "@/components/to-do-app/layout/sidebar";
import React from "react";

export default function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full justify-center overflow-hidden">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="h-16 w-full">
          <Navbar />
        </div>
        <div className="flex w-full h-[calc(100vh-4rem)]">
          <div className="flex w-[300px]">
            <Sidebar />
          </div>
          <div className="flex w-full overflow-auto flex-col items-center dark:bg-gray-800 justify-center">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
