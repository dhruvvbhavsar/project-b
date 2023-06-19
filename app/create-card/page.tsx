"use client";
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { ChevronLeft } from "lucide-react";

export default function AddCard() {
  return (
    <>
      <main className="flex h-screen w-full flex-row bg-[#181d1f] overflow-y-scroll">
        <SideBar />

        <div className="flex w-full flex-col">
          <Nav />

          <section className="sm:ml-[120px] sm:mt-12 mt-20 mx-4 min-h-[541px] max-h-[561px] min-w-[328px] max-w-[549px] text-white">
            <p className="text-base sm:text-2xl flex flex-col items-center  gap-4">
              <ChevronLeft className="block sm:hidden self-start" />
              Yippiee! You have created a card.... 🎉
            </p>
            <div className="mt-5 border  border-[#2D3234] relative  flex flex-col  rounded-[6px] mb-[55px] pb-8">
                
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
