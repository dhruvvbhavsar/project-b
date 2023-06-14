"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Left } from "@/components/left";

export default function Reg() {
  // Add a state to track the button click
  const [isClicked, setIsClicked] = useState(false);

  // Add a click handler for the button
  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      <main className="flex h-screen w-full flex-row justify-center bg-[#181d1f] sm:justify-around">
        
        <Left />
        <section className="flex my-auto h-5/6 sm:w-2/6 w-full mx-6 flex-col items-center rounded-lg bg-[#2d3234] text-white pb-24">
          <Select>
            <SelectTrigger className="w-3/12/12 text-sm self-end mt-6 border-none focus:border-none focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="English (UK)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eng">English (UK)</SelectItem>
              <SelectItem value="hin">Hindi</SelectItem>
              <SelectItem value="fra">French</SelectItem>
            </SelectContent>
          </Select>

          <div className="my-auto w-full flex flex-col  h-full justify-center px-8 space-y-8 pb-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="white"
              className="bi bi-heart-fill self-center"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            <div className="space-y-1 mx-auto w-full px-6 pt-8">
              <h1 className="text-4xl  text-[#BA44C5]">Verify Details</h1>
              <p className="text-xs">
                OTP sent on{" "}
                <span className="text-blue-700">+91 7715944948</span>
              </p>
            </div>
            <div className="grid items-center gap-2 px-6">
              <Label htmlFor="email-2">Enter 4 Digit OTP</Label>
              <Input className="placeholder:text-[#e0e0e0]" type="email" id="email-2" placeholder="OTP" />
              <Button
                className={`bg-[#BA44C5] w-full`}
                variant="default"
                onClick={handleClick}
              >
                Verify
                {isClicked && (
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                )}
              </Button>
              <p className="text-center text-xs">Resend OTP in 15s</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
