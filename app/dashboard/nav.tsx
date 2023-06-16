import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BellDot, ChevronDown } from "lucide-react";

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
        <BellDot className="mr-6" />
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ChevronDown />
      </div>
    </nav>
  );
};
