"use client";
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { ArrowLeft, Edit, Heart } from "lucide-react";
import { Insta } from "@/components/icons/insta";
import Image from "next/image";
import picture from "@/components/icons/unsplash_LsMxdW1zWEQ.png";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { redirect, useSearchParams, useRouter } from "next/navigation";
import ConfettiExplosion from "react-confetti-explosion";
import { hasCookie } from "cookies-next";
import { Success, Fail, Process } from "./success";

export default async function AddCard() {
  if (!hasCookie("id")) {
    throw redirect("/welcome");
  }

  const searchParams = useSearchParams();
  const search = searchParams.get("card");
  const results = JSON.parse(search ? search : "loll");

  if (!search) {
    throw redirect("/dashboard/add-card");
  }
  const router = useRouter()
  const [paymentStatus, setPaymentStatus] = useState("process"); // Payment status state variable
  const card = {
    platform: results["selectedPlatform"],
    activity: results["selectedActivity"],
    budget: results["budget"],
    url: results["taskUrl"],
    target: results["target"],
  };

  // Function to simulate the payment process
  const processPayment = () => {
    // Simulating payment process by using setTimeout
    setPaymentStatus("process"); // Update payment status to "process"

    setTimeout(() => {
      // Simulating payment success after 2 seconds
      setPaymentStatus("success"); // Update payment status to "success"
    }, 2000);
  };

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
                <div className="w-[284px] create-card max-w-[306px] relative h-[414px]  max-h-[446px] rounded-[16px] mt-5 bg-white">
                  {/* <Confetti /> */}
                  <ConfettiExplosion
                    particleSize={6}
                    className="mx-32 w-full"
                    colors={["#DFB722"]}
                    force={0.4}
                    duration={3000}
                  />
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
                    <li>{card.platform}</li>
                    <li>Reel</li>
                    <li>
                      {card.target} {card.activity}
                    </li>
                  </ul>
                </div>
                <div className="max-w-[288px] sm:max-w-[200px] mt-8 border-[#383838] border"></div>
                <div className="flex w-full justify-between text-xs mt-9">
                  <p>Total:</p>
                  <p className="mr-4 text-base">₹{card.budget}</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      onClick={processPayment}
                      className="h-12 mx-auto w-[191px] mt-10 purple-button hover:bg-[#B827C6]"
                    >
                      Proceed to payment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bottom-0 sm:bottom-1/4 sm:max-w-[349px] sm:max-h-[453px] bg-[#181D1F] text-white">
                    {/* <div className="mx-auto">
                      <ConfettiExplosion
                        className="z-50"
                        force={0.4}
                        duration={3000}
                      />
                      <svg
                        width="101"
                        height="101"
                        viewBox="0 0 101 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="51" r="38" fill="#BA44C5" />
                        <path
                          d="M101 50.5C101 78.3904 78.3904 101 50.5 101C22.6096 101 0 78.3904 0 50.5C0 22.6096 22.6096 0 50.5 0C78.3904 0 101 22.6096 101 50.5Z"
                          fill="#BA44C5"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M64.8327 39.75L45.1243 59.4583L36.166 50.5"
                          stroke="white"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div> */}

                    <div className="flex items-center gap-6">
                      {paymentStatus === "process" && <Process />}{" "}
                      {/* Render the Process component when payment is in process */}
                      {paymentStatus === "fail" && <Fail />}{" "}
                      {/* Render the Fail component when payment fails */}
                      {paymentStatus === "success" && <Success />}{" "}
                      {/* Render the Success component when payment is successful */}
                      <p className="text-xl">
                        {paymentStatus === "process" && "Payment in Process"}
                        {paymentStatus === "fail" && "Payment Failed"}
                        {paymentStatus === "success" && "Payment Successful"}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-col items-center">
                      <p className="text-lg">
                        Amount: <span className="text-[#BA68C8]">₹1000</span>
                      </p>
                      <div className=" w-[245px] mt-6 border-[#383838] border"></div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={() => router.replace("/dashboard")}
                        disabled={paymentStatus === "process"}
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
