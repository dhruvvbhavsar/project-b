"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { Camera } from "lucide-react";
import { useState } from "react";

export default function MyAccount() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <SideBar />
        <section className="mx-auto mt-[92px]">
          <p className="text-[22px] font-medium text-white">My Account</p>
          <div className="h-fit bg-inherit rounded-[6px] mt-6 p-12 border border-[#5B5B5B] min-w-[424px]">
            <section className="relative w-fit mx-auto">
              <Avatar className="h-20 w-20 ring-2 ring-[#2D3234]">
                <AvatarImage
                  src={selectedImage || "https://github.com/shadcn.png"}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-4 rounded-full flex flex-col justify-center items-center  h-9 w-9 bg-[#666666] ring-2 ring-[#2D3234]">
                <input
                  id="uploadImage"
                  type="file"
                  className="h-full w-full opacity-0 absolute"
                  onChange={handleImageChange}
                />
                <Camera className="text-white h-5 w-5" />
              </div>
            </section>

            <section className="mt-9">
              <div className="w-full text-white">
                <p className="text-[#9F9F9F] text-sm">Your Name</p>
                <input
                  type="text"
                  className="w-full h-12 text-sm p-4 rounded-[6px] border border-[#5B5B5B] mt-1 bg-[#1F2325]"
                />
              </div>

              <div className="w-full text-white relative mt-4">
                <p className="text-[#9F9F9F] text-sm">Mobile Number</p>
                <div className="relative">
                  <input
                    type="tel"
                    className="w-full h-12 text-sm p-4 rounded-[6px] border border-[#5B5B5B] mt-1 bg-[#1F2325]"
                  />
                  <button className="absolute right-3 text-[#BA44C5]  top-[18px] bg-transparent text-sm">
                    Change
                  </button>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <Button className="w-full h-12 rounded-[6px] bg-[#BA44C5] text-white">
                Save Details
              </Button>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
