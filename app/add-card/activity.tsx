"use client";

import * as React from "react";
import { ChevronDown, Heart, MessageCircle, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "likes",
    label: "Likes",
    icon: <Heart className={"w-4 h-4"} />,
  },
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
];

export function Activity() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[345px] h-12 mt-4 text-[#878787] hover:text-white justify-between bg-[#24292C] hover:bg-[#202223] ${
            open ? "border-[#ba68c8]" : "border-transparent"
          }`}
        >
          {value ? (
            <>
              <span className="ml-2 flex gap-3 text-white text-base items-center">
              {frameworks.find((framework) => framework.value === value)?.icon}
                {
                  frameworks.find((framework) => framework.value === value)
                    ?.label
                }
              </span>
            </>
          ) : (
            "Likes, Followers etc"
          )}

          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[345px] p-0 border-[#24292C] rounded-none mt-1 ml-1">
        <Command className="border-[#24292C] rounded-none">
          <CommandGroup className="bg-[#24292C] text-white border-[#24292C] rounded-none">
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <div className="gap-3 flex flex-row">
                  <div className="my-auto">{framework.icon}</div>
                  <div>{framework.label}</div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
