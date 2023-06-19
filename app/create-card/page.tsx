"use client";
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { ChevronLeft, Edit, Heart } from "lucide-react";
import { Insta } from "@/components/icons/insta";
import Image from "next/image";
import picture from "@/components/icons/unsplash_LsMxdW1zWEQ.png";
import { Button } from "@/components/ui/button";

export default function AddCard() {
  return (
    <>
      <main className="flex h-screen w-full flex-row bg-[#181d1f] overflow-y-scroll">
        <SideBar />

        <div className="flex w-full flex-col">
          <Nav />

          <div className="grid grid-cols-1 sm:grid-cols-3">
            <section className="sm:ml-[120px] col-span-2 sm:mt-12 mt-20 mx-4 min-h-[541px] max-h-[561px] min-w-[328px] max-w-[549px] text-white">
              <p className="text-base sm:text-2xl flex flex-col items-center  gap-4">
                <ChevronLeft className="block sm:hidden self-start" />
                Yippiee! You have created a card.... 🎉
              </p>
              <div className="mt-5 sm:mt-8 border  border-[#2D3234] relative  flex flex-col items-center rounded-[6px] mb-[55px] pb-8">
                <Edit className="absolute top-4 right-4" />
                <p className="text-[#ba44c5] text-sm text-center sm:text-lg mt-12">
                  Take a look at how you card will appear in the app.
                </p>
                <div className="w-[284px] create-card max-w-[306px] relative h-[414px] max-h-[446px] rounded-[16px] mt-5 bg-white">
                  <Image
                    src={picture}
                    className="rounded-[16px]"
                    alt="card picture"
                  />
                  <div className="absolute bottom-4 left-4 flex flex-col gap-1 justify-start">
                    <p className="text-base font-semibold">Ritwika Khurana</p>
                    <p className="text-xs flex items-center gap-1">
                      <Insta className={"w-4 h-4"} /> Reel on Instagram
                    </p>
                  </div>
                  <div className="rounded-full w-12 h-12 like-button grid place-content-around absolute right-4 bottom-4 ">
                    <Heart className="text-[#666666]" />
                  </div>
                </div>
              </div>
            </section>

            <section className="border col-span-1 rounded-[6px] p-8 text-white  border-[#2D3234] mt-20 mx-4 md:w-[275px]  sm:place-self-start  sm:my-[172px] min-h-[343px] max-h-[400px]">
              <div className='flex flex-col'>
                <p className="self-start text-base">Details:</p>
                <div className="mt-10 w-full flex justify-between text-xs">
                  <ul className="text-[#878787] flex flex-col gap-4">
                    <li>Platform</li>
                    <li>Type</li>
                    <li>Target</li>
                  </ul>

                  <ul className="flex flex-col gap-4">
                    <li>Instagram</li>
                    <li>Reel</li>
                    <li>500 Likes</li>
                  </ul>
                </div>
                <div className="max-w-[288px] sm:max-w-[200px] mt-8 border-[#878787] border"></div>
                <div className="flex w-full justify-between text-xs mt-9">
                  <p>Total:</p>
                  <p className="mr-4 text-base">₹1000</p>
                </div>
                <Button className="h-12 mt-10 purple-button hover:bg-[#90049d]">Proceed to payment</Button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
