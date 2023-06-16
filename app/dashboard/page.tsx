"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProgressComponent from "./progress";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  BellDot,
  ChevronDown,
  Heart,
  Instagram,
  Plus,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <main className="flex h-screen w-full flex-row bg-[#181d1f] overflow-y-scroll">
        <div className="h-full hidden w-64 bg-[#2d3234]">
          <div className="flex h-12 w-full flex-row items-center justify-center gap-5 bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            <p className="text-[#586266]">BrandName</p>
          </div>
          <div className="w-full h-10 flex flex-row justify-center mt-3">
            <Button className="bg-[#586266]">
              <BarChart2 />
              Dashboard
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <nav className="flex h-12 w-full flex-row items-center bg-transparent px-3 text-white">
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
            <div className="flex w-full flex-row items-center justify-end gap-3">
              <BellDot />
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <ChevronDown />
            </div>
          </nav>
          <div className="text-white px-10 h-full w-full">
            <h1 className="text-4xl">Hello, Ritika!</h1>
            <p className="mt-4 text-2xl">Overview</p>
            <p className="text-xs mt-3 text-gray-500 ">
              13th June,2023 Tuesday
            </p>

            <div className="w-full flex flex-row gap-8 mt-4">
              <div className="some flex h-52 rounded-md w-1/4 flex-col justify-between pl-6 text-white">
                <p className="pt-4 text-sm">Allocated Budget</p>
                <p className="pb-8 text-4xl">₹3000</p>
              </div>

              <div className="some flex h-52 rounded-md  w-1/4 flex-col justify-between pl-6 text-white">
                <p className="pt-4 text-sm">Balance</p>
                <p className="pb-8 text-4xl">₹1650</p>
              </div>

              <div className="some flex h-52 rounded-md  w-1/4 pl-6 text-white">
                <p className="pt-4 text-sm ">Progress</p>
                {/* <p className="pb-8 text-4xl">₹3000</p> */}
                <ProgressComponent value={10} />
              </div>

              <div className="some flex h-52 rounded-md  w-1/4 flex-col justify-between pl-6 text-white">
                <p className="pt-4 text-sm">Total cards</p>
                <p className="pb-8 text-4xl">3</p>
              </div>
            </div>

            <div className="w-full flex flex-row justify-between mt-4">
              <h1>My Cards</h1>
              <div className="flex gap-3 justify-center  items-center">
                <Button className="bg-[#2d3234]">
                  Social Media
                  <ChevronDown />
                </Button>
                <Button className="bg-[#ba44c5]">
                  <Plus /> Add New Card
                </Button>
              </div>
            </div>

            <div className="w-full flex flex-col gap-8 mt-4">


            <div className="some flex h-96 rounded-md w-full flex-col justify-between pl-6 text-white">
                <div className="flex mt-4 items-center gap-3">
                  <Instagram className="h-8 w-8" />
                  <p className="text-2xl">Instagram Reel</p>
                </div>

                <div className="w-full flex flex-row gap-8 mb-16 mt-4 pr-8">
                  <div className="some flex h-60 rounded-md w-3/4 flex-col justify-between text-white relative">
                    <img
                      className="object-cover h-full w-full rounded-md "
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYEMweEx15jXbuRsOBxuEKMyFHTkobwMi_Qw&usqp=CAU"
                      alt="photo"
                    />
                    <Heart className="absolute bottom-2 right-2" />
                    <p className="mt-2 text-muted-foreground">17th May, 2023</p>
                  </div>

                  <div className="some flex h-52 rounded-md my-auto  w-full flex-col justify-between pl-6 text-white">
                    <p className="pt-4 text-sm">Allocated Budget</p>
                    <p className="my-auto text-4xl">₹1650</p>
                  </div>

                  <div className="some flex h-52 rounded-md my-auto  w-full flex-col justify-between pl-6 text-white">
                    <p className="pt-4 text-sm">Spent</p>
                    <p className="my-auto text-4xl">₹1650</p>
                  </div>

                  <div className="some flex h-52 rounded-md  w-full my-auto pl-6 text-white">
                    <p className="pt-4 text-sm ">Spent</p>
                    <ProgressComponent value={10} />
                  </div>
                </div>
              </div>

              




            </div>
          </div>
        </div>
      </main>
    </>
  );
}
