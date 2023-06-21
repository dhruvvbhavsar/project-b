"use client"
import { ChevronDown, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteCookie } from "cookies-next";
import { useRouter } from 'next/navigation'


export function Navpop() {
  const router = useRouter()
  function logout() {
    deleteCookie("id");    
    router.push("/welcome")
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-10">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={logout}>
            <LogOut className="mr-2 h-4 w-4 text-red-700" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
