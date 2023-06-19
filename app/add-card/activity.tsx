"use client";
import * as React from "react";
import {
  Bell,
  ChevronDown,
  Heart,
  MessageCircle,
  MessageSquare,
  PlusSquare,
  RefreshCw,
  Repeat,
  Share2,
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

// interface ActivityProps {
//   platform: "instagram" | "twitter" | "youtube" | "facebook";
// }

const platforms: Record<string, Framework[]> = {
  instagram: [
    {
      value: "comments",
      label: "Comments",
      icon: <MessageSquare className={"w-4 h-4"} />,
    },
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
  facebook: [
    {
      value: "comments",
      label: "Comments",
      icon: <MessageSquare className={"w-4 h-4"} />,
    },
    {
      value: "followers",
      label: "Followers",
      icon: <PlusSquare className={"w-4 h-4"} />,
    },
    {
      value: "likes",
      label: "Likes",
      icon: <ThumbsUp className={"w-4 h-4"} />,
    },
  ],
  youtube: [
    {
      value: "comments",
      label: "Comments",
      icon: <Heart className={"w-4 h-4"} />,
    },
    {
      value: "likes",
      label: "Likes",
      icon: <Heart className={"w-4 h-4"} />,
    },
    {
      value: "subscribers",
      label: "Subscribers",
      icon: <Bell className={"w-4 h-4"} />,
    },
  ],
  twitter: [
    {
      value: "comments",
      label: "Comments",
      icon: <MessageCircle className={"w-4 h-4"} />,
    },
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
    {
      value: "retweets",
      label: "Retweets",
      icon: <Repeat className={"w-4 h-4"} />,
    },
  ],
};

export function Activity({ platform }: any) {
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

          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 border-none w-[345px] sm:w-[294px] rounded-md mt-1">
        <Command className="">
          <CommandGroup className="bg-[#24292C] text-white ">
            {frameworkData.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
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
