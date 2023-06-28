import { Button } from "@/components/ui/button";
import { X, BarChart2, ChevronRight } from "lucide-react";

export default function AdminSidebar() {
  return (
    <>
      <div
        className={`w-56 absolute inset-y-0 left-0 z-10 transform  md:translate-x-0 md:relative ease-in-out transition duration-200 bg-[#2d3234]`}
      >
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
}
