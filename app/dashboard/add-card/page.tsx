"use client";
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { Socials } from "./socials";
import CreateCardButton from "./createCardButton";
import { Activity } from "./activity";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { hasCookie } from "cookies-next";
import { redirect } from "next/navigation";

export default function AddCard() {
  if (!hasCookie("id")) {
    throw redirect("/welcome");
  }
  const [isClicked, setisClicked] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [budget, setBudget] = useState(0);
  const [targetValue, setTargetValue] = useState("");

  useEffect(() => {
    console.log(selectedPlatform, selectedActivity);
  }, [selectedPlatform, selectedActivity]);

  async function handleClick() {
    setisClicked(!isClicked);
    const apiUrl = "https://project-b-olive.vercel.app/api/client/get-budget";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        platform: selectedPlatform,
        activity: selectedActivity,
        goal: targetValue,
      }),
    });
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      setBudget(result[0]["data"]["budget"]);
    } else {
      console.error("Error calculating budget:", result.message);
    }
  }

  function handlePlatformChange(platform: string) {
    setSelectedPlatform(platform);
    setisClicked(false);
  }

  function handleActivityChange(activity: string) {
    setSelectedActivity(activity);
    setisClicked(false);
  }

  function handleTargetValueChange(value: any) {
    setTargetValue(value);
    setisClicked(false);
  }

  return (
    <>
      <main className="flex h-screen w-full flex-row bg-[#181d1f] overflow-y-scroll">
        <SideBar />

        <div className="flex w-full flex-col">
          <Nav />

          <section className="sm:ml-14 mt-20 mx-4 text-white">
            <p className="text-lg sm:text-2xl flex gap-6">
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
                    <Activity
                      platform={selectedPlatform}
                      onChange={handleActivityChange}
                    />
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
                      onChange={(e) => handleTargetValueChange(e.target.value)}
                      className="px-[12px] text-sm sm:text-base py-[14px] rounded-[6px] overflow-x-visible h-12 min-w-[294px] max-w-[345px] bg-[#24292C] hover:bg-[#202223] mt-4  placeholder:text-[#878787] placeholder:text-xs"
                      placeholder="500 likes"
                    />
                  </div>
                </article>
              </section>

              {isClicked && setBudget && (
                <section id="isDone" className="mt-[50px] flex flex-col">
                  <p className="text-base sm:text-lg text-center">
                    Here is your estimate budget
                  </p>
                  <div className="min-h-[56px] min-w-[74px] max-w-[110px] max-h-[74px] rounded-[6px] flex justify-center items-center p-3 mt-5 bg-[#24292C] mx-auto">
                    <p className="text-2xl glow font-medium text-[#BA44C5]">
                      ₹{budget}
                    </p>
                  </div>
                  <CreateCardButton setBudget={setBudget} />
                </section>
              )}

              {!isClicked && (
                <Button
                  onClick={handleClick}
                  className="mt-11 purple-glow w-[212px] self-center h-12 px-[36px] py-[12px bg-[#BA44C5] hover:bg-[#90049D]"
                >
                  Calculate budget
                </Button>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
