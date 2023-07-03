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
import { RotatingLines } from "react-loader-spinner";

export default function AddCard() {
  if (!hasCookie("id")) {
    throw redirect("/welcome");
  }
  const [isClicked, setisClicked] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [budget, setBudget] = useState(null);
  const [targetValue, setTargetValue] = useState("");
  const [taskUrl, settaskUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);

  useEffect(() => {
    console.log(selectedPlatform, selectedActivity);
  }, [selectedPlatform, selectedActivity]);

  async function handleClick() {
    setisClicked(!isClicked);
    const apiUrl = `${process.env.API_ENDPOINT}/api/client/get-budget`;
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
    // localStorage.setItem("platform", platform);
    setisClicked(false);
    setBudget(null);
  }

  function handleActivityChange(activity: string) {
    setSelectedActivity(activity);
    // localStorage.setItem("activity", activity);
    setisClicked(false);
    setBudget(null);
  }

  function handleTargetValueChange(value: any) {
    setTargetValue(value);
    // localStorage.setItem("goal", value);
    setisClicked(false);
    setBudget(null);
  }

  function handleUrlValueChange(value: any) {
    settaskUrl(value);
    const urlPattern = /^(https?:\/\/)?(www\.)?instagram\.com\//;
    const isValid = urlPattern.test(value);
    setIsValidUrl(isValid);
    // localStorage.setItem("url", value);
    setisClicked(false);
    setBudget(null);
  }

  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <SideBar />
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
                  <p className="text-[#F3F3F3] text-sm">Paste the URL below</p>
                  <input
                    type="text"
                    onChange={(e) => handleUrlValueChange(e.target.value)}
                    className={`px-[12px] text-sm sm:text-base py-[14px] rounded-[6px] overflow-x-visible h-12 min-w-[294px] max-w-[345px] bg-[#24292C] hover:bg-[#202223] mt-4 placeholder:text-[#878787] placeholder:text-xs ${
                      isValidUrl ? "" : "border border-red-500"
                    }`}
                    placeholder="Copy and paste the text here"
                    // value={localStorage.getItem("url") || ""}
                  />
                  {!isValidUrl && taskUrl.length > 3 && (
                    <p className="text-red-500 text-sm mt-1">Invalid URL</p>
                  )}
                </div>

                <div className="flex flex-col mx-3 sm:ml-8 mt-[32px]">
                  <p className="text-[#F3F3F3] text-sm">Target</p>
                  <input
                    type="text"
                    onChange={(e) => handleTargetValueChange(e.target.value)}
                    className="px-[12px] text-sm sm:text-base py-[14px] rounded-[6px] overflow-x-visible h-12 min-w-[294px] max-w-[345px] bg-[#24292C] hover:bg-[#202223] mt-4  placeholder:text-[#878787] placeholder:text-xs"
                    placeholder="500 likes"
                    // value={localStorage.getItem("goal") || ""}
                  />
                </div>
              </article>
            </section>

            {isClicked && (
              <section id="isDone" className="mt-[50px] flex flex-col">
                <p className="text-base sm:text-lg text-center">
                  Here is your estimate budget
                </p>
                <div className="min-h-[56px] min-w-[74px] max-w-[110px] max-h-[74px] rounded-[6px] flex justify-center items-center p-3 mt-5 bg-[#24292C] mx-auto">
                  {budget ? (
                    <p className="text-2xl glow font-medium text-[#BA44C5]">
                      ₹{budget}
                    </p>
                  ) : (
                    <RotatingLines
                      strokeColor="#BA44C5"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="40"
                      visible={true}
                    />
                  )}
                </div>
                <CreateCardButton
                  platform={selectedPlatform}
                  activity={selectedActivity}
                  target={targetValue}
                  budget={budget}
                  url={taskUrl}
                />
              </section>
            )}

            {!isClicked && (
              <Button
                disabled={!isValidUrl}
                onClick={handleClick}
                className="mt-11 purple-glow w-[212px] self-center h-12 px-[36px] py-[12px bg-[#BA44C5] hover:bg-[#90049D]"
              >
                Calculate budget
              </Button>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
