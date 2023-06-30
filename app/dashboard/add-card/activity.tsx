"use client";
import * as React from "react";
import {
  Bell,
  Heart,
  MessageCircle,
  MessageSquare,
  PlusSquare,
  Repeat,
  ThumbsUp,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Framework {
  value: string;
  label: string;
  icon: JSX.Element;
}

interface ActivityProps {
  platform: string;
  onChange: (activity: string) => void;
}

const platforms: Record<string, Framework[]> = {
  instagram: [
    // {
    //   value: "comments",
    //   label: "Comments",
    //   icon: <MessageSquare className={"w-4 h-4"} />,
    // },
    {
      value: "followers",
      label: "Followers",
      icon: <UserPlus className={"w-4 h-4"} />,
    },
    {
      value: "likes",
      label: "Likes",
      icon: <Heart className={"w-4 h-4"} />,
    },
  ],
  // facebook: [
  //   {
  //     value: "comments",
  //     label: "Comments",
  //     icon: <MessageSquare className={"w-4 h-4"} />,
  //   },
  //   {
  //     value: "followers",
  //     label: "Followers",
  //     icon: <PlusSquare className={"w-4 h-4"} />,
  //   },
  //   {
  //     value: "likes",
  //     label: "Likes",
  //     icon: <ThumbsUp className={"w-4 h-4"} />,
  //   },
  // ],
  // youtube: [
  //   {
  //     value: "comments",
  //     label: "Comments",
  //     icon: <MessageSquare className={"w-4 h-4"} />,
  //   },
  //   {
  //     value: "likes",
  //     label: "Likes",
  //     icon: <Heart className={"w-4 h-4"} />,
  //   },
  //   {
  //     value: "subscribers",
  //     label: "Subscribers",
  //     icon: <Bell className={"w-4 h-4"} />,
  //   },
  // ],
  // twitter: [
  //   {
  //     value: "comments",
  //     label: "Comments",
  //     icon: <MessageCircle className={"w-4 h-4"} />,
  //   },
  //   {
  //     value: "followers",
  //     label: "Followers",
  //     icon: <UserPlus className={"w-4 h-4"} />,
  //   },
  //   {
  //     value: "likes",
  //     label: "Likes",
  //     icon: <Heart className={"w-4 h-4"} />,
  //   },
  //   {
  //     value: "retweets",
  //     label: "Retweets",
  //     icon: <Repeat className={"w-4 h-4"} />,
  //   },
  // ],
};

export function Activity({ platform, onChange }: ActivityProps) {
  function handleActivityChange(activity: string) {
    onChange(activity); // Call the onChange prop to update the selected activity
  }
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const frameworkData = platforms[platform] || [];

  return (
    <Popover open={open} onOpenChange={setOpen}>
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
                  frameworkData.find((framework) => framework.value === value)
                    ?.icon
                }
                {
                  frameworkData.find((framework) => framework.value === value)
                    ?.label
                }
              </span>
            </>
          ) : (
            "Likes, Followers, etc."
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
      <PopoverContent className="p-0 border-orange-500 w-[345px] sm:w-[294px] rounded-md mt-1">
        <Command className="">
          <CommandGroup className="bg-[#24292C] text-white ">
            {frameworkData.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={() => {
                  setValue(framework.value);
                  setOpen(false);
                  handleActivityChange(framework.value);
                }}
              >
                <div className="gap-3 flex  items-center h-12 flex-row">
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
