"use client";
import { BarChart2, ChevronRight } from "lucide-react"
import { Button } from "./button"

export const SideBar = () => {
    return (
                <div className="w-0 sm:w-56 bg-[#2d3234]">
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
      
                  <p className="text-[#979797] opacity-0 sm:opacity-100">BrandName</p>
                </div>
                <div className="w-full h-12 flex flex-row justify-center mt-9 opacity-0 sm:opacity-100">
                  <Button className="bg-[#586266] hover:bg-[#202223] flex ">
                    <BarChart2 className="h-6 w-6" />
                    <p className="text-sm">Dashboard</p>
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
    )
}