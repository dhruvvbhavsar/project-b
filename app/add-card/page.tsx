"use client";
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { Socials } from "./socials";
import { Activity } from "./activity";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function AddCard() {
  const [isClicked, setisClicked] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");

  function handleClick() {
    setisClicked(!isClicked);
  }

  function handlePlatformChange(platform: string) {
    setSelectedPlatform(platform);
  }

  return (
    <>
      <main className="flex h-screen w-full flex-row bg-[#181d1f] overflow-y-scroll">
        <SideBar />

        <div className="flex w-full flex-col">
          <Nav />

          <section className="sm:ml-14 mt-20 mx-4 text-white">
            <p className="text-base sm:text-2xl flex gap-6">
              <ChevronLeft className="block sm:hidden" />
              Exciting! Something interesting is going to start...
            </p>
            <div className="mt-8 border border-[#2D3234] min-w-[326px] max-w-[818px] flex flex-col  rounded-[6px] mb-[55px] pb-8">
              <section className="flex flex-col w-full">
                <article className="flex flex-col sm:flex-row">
                  <div className="mx-3 sm:ml-8 mt-[36px]">
                    <p className="text-[#F3F3F3] text-sm">Select Platform</p>
                    <Socials onChange={handlePlatformChange} />
                  </div>

                  <div className="mx-3 sm:ml-8 mt-[36px]">
                    <p className="text-[#F3F3F3] text-sm">
                      Your goal is to achieve?
                    </p>
                    <Activity platform={selectedPlatform} />
                  </div>
                </article>

                <article className="flex flex-col sm:flex-row">
                  <div className="flex flex-col mx-3 sm:ml-8 mt-[32px]">
                    <p className="text-[#F3F3F3] text-sm">
                      Paste the URL below
                    </p>
                    <input
                      type="text"
                      className="px-[12px] text-sm sm:text-base py-[14px] rounded-[6px] overflow-x-visible h-12 min-w-[294px] max-w-[345px] bg-[#24292C] hover:bg-[#202223] mt-4 placeholder:text-[#878787] placeholder:text-xs"
                      placeholder="Copy and paste the text here"
                    />
                  </div>

                  <div className="flex flex-col mx-3 sm:ml-8 mt-[32px]">
                    <p className="text-[#F3F3F3] text-sm">Target</p>
                    <input
                      type="text"
                      className="px-[12px] text-sm sm:text-base py-[14px] rounded-[6px] overflow-x-visible h-12 min-w-[294px] max-w-[345px] bg-[#24292C] hover:bg-[#202223] mt-4  placeholder:text-[#878787] placeholder:text-xs"
                      placeholder="500 Likes"
                    />
                  </div>
                </article>
              </section>

              {isClicked && (
                <section id="isDone" className="mt-[50px]">
                  <p className="text-base sm:text-lg text-center">
                    Here is your estimate budget
                  </p>
                  <div className="min-h-[56px] min-w-[74px] max-w-[110px] max-h-[74px] rounded-[6px] flex justify-center items-center mt-5 bg-[#24292C] mx-auto">
                    <p className="text-2xl glow font-medium text-[#BA44C5]">
                      ₹1000
                    </p>
                  </div>
                </section>
              )}

              <Button
                onClick={handleClick}
                className="mt-11 purple-glow w-[212px] self-center h-12 px-[36px] py-[12px bg-[#BA44C5] hover:bg-[#90049D]"
              >
                {isClicked ? "Create Card" : "Calculate budget"}
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
