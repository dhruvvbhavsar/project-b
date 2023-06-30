"use client";
import * as React from "react";

import { Insta } from "@/components/icons/insta";
import { Twitter } from "@/components/icons/twitter";
import { Youtube } from "@/components/icons/youtube";
import { Facebook } from "@/components/icons/facebook";

import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SocialsProps {
  onChange: (platform: string) => void;
}

const frameworks = [
  {
    value: "instagram",
    label: "Instagram",
    icon: <Insta className={"w-4 h-4"} />,
  },
  // {
  //   value: "twitter",
  //   label: "Twitter",
  //   icon: <Twitter className={"w-4 h-4"} />,
  // },
  // {
  //   value: "facebook",
  //   label: "Facebook",
  //   icon: <Facebook className={"w-4 h-4"} />,
  // },
  // {
  //   value: "youtube",
  //   label: "Youtube",
  //   icon: <Youtube className={"w-4 h-4"} />,
  // },
];

export function Socials({ onChange }: SocialsProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handlePlatformChange = (platform: string) => {
    setValue(platform);
    onChange(platform);
    setOpen(false);
  };

  return (
    <Popover open={open}  onOpenChange={setOpen}>
      <PopoverTrigger className="min-w-[294px] max-w-[345px]" asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`text-xs w-full h-12 mt-4 text-[#878787] hover:text-white justify-between bg-[#24292C] hover:bg-[#202223] ${
            open ? "border-[#ba68c8]" : "border-transparent"
          }`}
        >
          {value ? (
            <>
              <span className="ml-2 flex gap-3 text-white text-base items-center">
                {
                  frameworks.find((framework) => framework.value === value)
                    ?.icon
                }
                {
                  frameworks.find((framework) => framework.value === value)
                    ?.label
                }
              </span>
            </>
          ) : (
            "Facebook, Instagram etc"
          )}

          {/* <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_683_1347)">
              <path d="M7 10L12 15L17 10H7Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_683_1347">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 border w-[345px] sm:w-[294px] rounded-md mt-1">
        <Command className="">
          <CommandGroup className="bg-[#24292C] text-white ">
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={() => handlePlatformChange(framework.value)}
              >
                <div className="gap-3 flex items-center h-12 flex-row">
                  <div className="my-auto">{framework.icon}</div>
                  <div className="text-sm">{framework.label}</div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
