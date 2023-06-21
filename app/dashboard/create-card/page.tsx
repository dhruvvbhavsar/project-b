"use client";
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { ArrowLeft, ChevronLeft, Edit, Heart } from "lucide-react";
import { Insta } from "@/components/icons/insta";
import Image from "next/image";
import picture from "@/components/icons/unsplash_LsMxdW1zWEQ.png";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default function AddCard() {
  return (
    <>
      <main className="flex h-screen w-full flex-row bg-[#181d1f] overflow-y-scroll">
        <SideBar />

        <div className="flex w-full flex-col">
          <Nav />

          <div className="grid grid-cols-1 pb-24 sm:pb-0 sm:grid-cols-3">
            <section className="sm:ml-[120px] col-span-2 sm:mt-12 mt-20 mx-4 min-h-[541px] max-h-[561px] min-w-[328px] max-w-[549px] text-white">
              <p className="text-base sm:text-2xl flex flex-col items-center  gap-4">
                <ArrowLeft className="block sm:hidden self-start" />
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
              <div className="flex flex-col">
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
                <div className="max-w-[288px] sm:max-w-[200px] mt-8 border-[#383838] border"></div>
                <div className="flex w-full justify-between text-xs mt-9">
                  <p>Total:</p>
                  <p className="mr-4 text-base">₹1000</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="h-12 mx-auto w-[191px] mt-10 purple-button hover:bg-[#90049d]">
                      Proceed to payment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bottom-0 sm:bottom-52 sm:max-w-[349px] sm:max-h-[280px] bg-[#181D1F] text-white">
                    <div className="flex items-center gap-6">
                      <svg
                        width="47"
                        height="44"
                        viewBox="0 0 47 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="33"
                          height="33"
                          rx="5"
                          stroke="white"
                          stroke-width="2"
                        />
                        <path
                          d="M22.918 13.1094L22.3789 14.9609H11.5039L12.043 13.1094H22.918ZM18.043 26L11.8438 18.7578L11.832 17.3047H14.6914C15.5195 17.3047 16.2031 17.168 16.7422 16.8945C17.2891 16.6133 17.6992 16.2344 17.9727 15.7578C18.2461 15.2812 18.3828 14.7461 18.3828 14.1523C18.3828 13.4883 18.2539 12.9062 17.9961 12.4062C17.7383 11.8984 17.332 11.5039 16.7773 11.2227C16.2305 10.9336 15.5117 10.7891 14.6211 10.7891H11.5273L12.0781 8.9375H14.6211C15.9805 8.9375 17.1016 9.14453 17.9844 9.55859C18.875 9.96484 19.5391 10.5586 19.9766 11.3398C20.4141 12.1211 20.6328 13.0664 20.6328 14.1758C20.6328 15.1289 20.4492 15.9844 20.082 16.7422C19.7227 17.4922 19.125 18.082 18.2891 18.5117C17.4609 18.9414 16.3438 19.1562 14.9375 19.1562L20.7031 25.8594V26H18.043ZM22.918 8.9375L22.3789 10.7891H13.6133L14.1523 8.9375H22.918Z"
                          fill="white"
                        />
                        <rect
                          x="26"
                          y="23"
                          width="20"
                          height="20"
                          rx="10"
                          fill="#34A853"
                        />
                        <path
                          d="M41.5 29.334L33.9375 36.6673L30.5 33.334"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          x="26"
                          y="23"
                          width="20"
                          height="20"
                          rx="10"
                          stroke="#34A853"
                          stroke-width="2"
                        />
                      </svg>

                      <p className="text-xl">Payment Successful</p>
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                      <p className="text-lg">
                        Paid: <span className="text-[#BA68C8]">₹1000</span>
                      </p>
                      <div className=" w-[245px] mt-6 border-[#383838] border"></div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        className="h-12 mx-auto w-[191px] mt-8 purple-button hover:bg-[#90049d]"
                      >
                        Go to Dashboard
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
