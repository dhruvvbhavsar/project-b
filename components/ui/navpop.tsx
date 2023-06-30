"use client"
import { ChevronDown, Cookie, FileQuestion, HelpCircle, Info, LogOut, ShieldQuestion, User2, Wallet } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from 'next/navigation'


export function Navpop() {
  const router = useRouter()
  function logout() {
    deleteCookie('id');
    deleteCookie('name');   
    deleteCookie('mobile'); 
    deleteCookie('registered');
    deleteCookie('verified');
    router.refresh()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 z-10 navpop mr-12 mt-3 p-0">
        <DropdownMenuGroup>
        <DropdownMenuItem className="focus:bg-[#191E1F] h-12 text-white" onClick={() => router.push('/user/my-account')}>
            <User2 className="mr-2 h-4 w-4" />
            <span>My Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-[#191E1F] h-12 text-white" onClick={() => router.push('/user/transactions')} >
            <Wallet className="mr-2 h-4 w-4" />
            <span>Transactions</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-[#191E1F] h-12 text-white" >
            <FileQuestion className="mr-2 h-4 w-4" />
            <span>FAQs</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-[#191E1F] h-12 text-white" onClick={() => router.push('/help-n-support')}>
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help & Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-[#191E1F] h-12 text-white" >
            <ShieldQuestion className="mr-2 h-4 w-4" />
            <span>Privacy Policy</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-[#191E1F] h-12 text-white" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
