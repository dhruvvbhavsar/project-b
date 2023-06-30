"use client";
import { BarChart2, ChevronRight, X } from "lucide-react";
import { Button } from "./button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Navpop } from "./navpop";
import { useState } from "react";

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }
  return (
    <>
      <nav className="fixed top-0 right-0 bg-[#181d1f] sm:bg-blend-darken pt-4 z-10 flex h-fit py-1 w-full flex-row items-center px-3  sm:px-12 text-white">
        <p onClick={handleClick} className=" md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </p>
        <div className="flex w-full flex-row items-center justify-end gap-2">
          <Popover>
            <PopoverTrigger>
              {" "}
              <div className="p-2 mr-6 ring-2 relative ring-[#2D3234] rounded-full">
                <div className="bg-[#BA44C5] absolute top-0  -right-1 rounded-full w-3 h-3"></div>
                <Bell />
              </div>
            </PopoverTrigger>
            <PopoverContent>Notifications</PopoverContent>
          </Popover>
          <Avatar className="h-10 w-10 ring-2 ring-[#2D3234]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Navpop />
        </div>
      </nav>
      <div className={`w-56 absolute inset-y-0 left-0 z-10 transform ${!open ? "-translate-x-full" : ""} md:translate-x-0 md:relative ease-in-out transition duration-200 bg-[#2d3234]`}>
        <p onClick={handleClick} className=" text-white fixed right-0 p-3 md:hidden"><X className="text-gray-400" /></p>
        <div className="flex mt-8 w-full flex-row items-center justify-center gap-2 bg-transparent">
          <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28.5" cy="28.5" r="28.5" fill="#181D1F" />
          </svg>

          <p className="text-[#979797]">BrandName</p>
        </div>
        <div className="w-full h-12 flex flex-row justify-center mt-9">
          <Button className="bg-[#586266] hover:bg-[#202223] flex ">
            <BarChart2 className="h-6 w-6" />
            <p className="text-sm">Dashboard</p>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </>
  );
};
