"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SideBar } from "@/components/ui/sidebar";
import { getCookie } from "cookies-next";
import { Camera } from "lucide-react";
import { useState } from "react";

export default function MyAccount() {
  const clientNumber = getCookie("mobile").valueOf();
  const id = getCookie("id").valueOf();
  const [name, setName] = useState(getCookie("name"));
  const [newMobileNumber, setNewMobileNumber] = useState(clientNumber);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isNumberChanged, setNewNumber] = useState(false);
  const [isOTPVerified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setNewMobileNumber(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  async function sendOTP(number) {
    const num = {
      number: number,
      signature: "",
    };
    const response = await fetch(
      `${process.env.API_ENDPOINT}/api/get-otp`,
      {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(num),
      }
    );

    const res = await response.json();
    if (response.ok) {
      setNewNumber(true);
    }
    console.log(res);
  }

  async function verify(number, otp) {
    const num = {
      number: number?.toString(),
      otp: otp,
    };
    const response = await fetch(
      `${process.env.API_ENDPOINT}/api/verify-otp`,
      {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(num),
      }
    );

    const res = await response.json();
    if (response.ok) {
      setNewNumber(false);
      setIsOtpVerified(true);
    }
    console.log(res);
  }

  const updateDetails = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("number", newMobileNumber);
    if (selectedImage) {
      formData.append("image",selectedImage);
    }

    try {
      const response = await fetch(
        `${process.env.API_ENDPOINT}/api/client/${id}/edit-profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // Details updated successfully
        console.log("Details updated successfully");
      } else {
        // Handle error case
        console.log("Failed to update details");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : "https://github.com/shadcn.png"
                  }
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
                  value={name}
                  onChange={handleNameChange}
                  type="text"
                  className="w-full h-12 text-sm p-4 rounded-[6px] border border-[#5B5B5B] mt-1 bg-[#1F2325]"
                />
              </div>

              <div className="w-full text-white relative mt-4">
                <p className="text-[#9F9F9F] text-sm">Mobile Number</p>
                <div className="relative">
                  <input
                    disabled
                    type="tel"
                    className="w-full h-12 text-sm p-4 rounded-[6px] border border-[#5B5B5B] mt-1 bg-[#1F2325] placeholder:text-white"
                    placeholder={clientNumber}
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="absolute right-3 text-[#BA44C5]  top-[18px] bg-transparent text-sm">
                        Change
                      </button>
                    </DialogTrigger>
                    <DialogContent className="bottom-0 sm:bottom-1/4 sm:max-w-[349px] sm:max-h-[453px] bg-[#181D1F] text-white">
                      {!isNumberChanged && (
                        <section>
                          <p className="text-[#ba44c5] text-xl">
                            Change Number
                          </p>
                          <p className="text-xs">Enter a new mobile number</p>
                          <input
                            onChange={handleMobileNumberChange}
                            type="tel"
                            className="w-full h-12 text-sm p-4 rounded-[6px] border border-[#5B5B5B] mt-1 bg-[#1F2325]"
                          />
                          <DialogFooter>
                            <Button
                              onClick={async () => {
                                await sendOTP(newMobileNumber);
                              }}
                              className="h-12 mx-auto w-[191px] mt-8 purple-button hover:bg-[#90049d]"
                            >
                              Get OTP
                            </Button>
                          </DialogFooter>
                        </section>
                      )}
                      {isNumberChanged && (
                        <section>
                          <p className="text-[#ba44c5] text-xl">Verify OTP</p>
                          <p className="text-xs">Enter your received OTP</p>
                          {!isOTPVerified && (
                            <input
                              onChange={handleOtpChange}
                              type="tel"
                              className="w-full h-12 text-sm p-4 rounded-[6px] border border-[#5B5B5B] mt-1 bg-[#1F2325]"
                            />
                          )}
                          <DialogFooter>
                            <Button
                              disabled={isOTPVerified}
                              onClick={async () => {
                                await verify(newMobileNumber, otp);
                              }}
                              className="h-12 mx-auto w-[191px] mt-8 purple-button hover:bg-[#90049d]"
                            >
                              {isOTPVerified ? "OTP Verified" : "Verify OTP"}
                            </Button>
                          </DialogFooter>
                        </section>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <Button
                onClick={updateDetails}
                className="w-full h-12 rounded-[6px] bg-[#BA44C5] text-white"
              >
                Save Details
              </Button>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
