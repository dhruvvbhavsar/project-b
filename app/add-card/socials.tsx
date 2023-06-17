"use client";

import * as React from "react";
import { ChevronDown, ChevronsUpDown } from "lucide-react";

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

const frameworks = [
  {
    value: "instagram",
    label: "Instagram",
    icon: <Insta className={"w-4 h-4"} />,
  },
  {
    value: "twitter",
    label: "Twitter",
    icon: <Twitter className={"w-4 h-4"} />,
  },
  {
    value: "facebook",
    label: "Facebook",
    icon: <Facebook className={"w-4 h-4"} />,
  },
  {
    value: "youtube",
    label: "Youtube",
    icon: <Youtube className={"w-4 h-4"} />,
  },
];

export function Socials() {
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
            "Facebook, Instagram etc"
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
