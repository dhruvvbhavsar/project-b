import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bell, BellDot, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Navpop } from "./navpop";

export const Nav = () => {
  return (
    <nav className="flex mt-4 h-12 w-full flex-row items-center bg-transparent px-3 text-white">
      <p className=" md:hidden">
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
            {/*  */}
            <div className="p-2 mr-6 ring-2 relative ring-[#2D3234] rounded-full">
              <div className="bg-purple-700 absolute top-0  -right-1 rounded-full w-3 h-3"></div>
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
  );
};
