/* eslint-disable @next/next/no-img-element */
"use client";
import { SideBar } from "@/components/ui/sidebar";
import { ArrowLeft, Edit, Heart } from "lucide-react";
import { Insta } from "@/components/icons/insta";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { redirect, useSearchParams, useRouter } from "next/navigation";
import ConfettiExplosion from "react-confetti-explosion";
import { getCookie, hasCookie } from "cookies-next";
import { Success, Fail, Process } from "@/components/ui/success";

export default async function AddCard() {
  if (!hasCookie("id")) {
    throw redirect("/welcome");
  }

  const searchParams = useSearchParams();
  const search = searchParams.get("card");
  const results = JSON.parse(search ? search : "loll");

  if (!search) {
    throw redirect("/dashboard/add-card");
  }

  const cookie = getCookie("id");
  const name = getCookie("name");

  const router = useRouter();
  const [paymentStatus, setPaymentStatus] = useState("success"); // Payment status state variable
  const card = {
    platform: results["selectedPlatform"],
    activity: results["selectedActivity"],
    budget: results["budget"],
    url: results["taskUrl"],
    target: results["target"],
  };

  const imageUrl = await fetchImageUrl(card.url);

  async function createCard() {
    console.log(card);
    const response = await fetch(
      "https://project-b-olive.vercel.app/api/${cookie}/create-card",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          platform: card.platform,
          activity: card.activity,
          imageUrl: imageUrl,
          taskUrl: card.url,
          goal: parseInt(card.target),
          budget: parseInt(card.budget),
        }),
        cache: "no-store",
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(card);
  }

  // Function to simulate the payment process
  const processPayment = async () => {
    // Simulating payment process by using setTimeout
    setPaymentStatus("process"); // Update payment status to "process"
    await displayRazorpay();
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await fetch(
      `${process.env.API_ENDPOINT}/api/checkOut`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: card.budget,
        }),
        cache: "no-cache",
      }
    );

    const ress = await result.json();

    const options = {
      key: "rzp_test_0m2WFdxXP6eco1", // Enter the Key ID generated from the Dashboard
      amount: ress[0]["data"]["amount"],
      currency: ress[0]["data"]["currency"],
      name: "Project B",
      description: "Test Transaction",
      image:
        "https://www.freeiconspng.com/thumbs/payment-icon/cash-payment-icon-5.png",
      order_id: ress[0]["data"]["id"],
      handler: async function (response) {
        const data = {
          orderCreationId: ress[0]["data"]["id"],
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await fetch(
          `${process.env.API_ENDPOINT}/api/paymentVerification`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_payment_id: data.razorpayPaymentId,
              razorpay_order_id: data.razorpayOrderId,
              razorpay_signature: data.razorpaySignature,
            }),
            cache: "no-cache",
          }
        );

        const resss = await result.json();
        console.log(await resss);
        console.log(response);
        await createCard(card);
        setPaymentStatus("success");
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#ba44c5",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      console.log(response);
      paymentObject.close();
      setPaymentStatus("fail");
    });
  }

  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <SideBar />

        <div className="grid grid-cols-1 pb-24 sm:pb-0 sm:grid-cols-3">
          <section className="sm:ml-[120px] col-span-2 sm:mt-14 mt-20 mx-4 min-h-[541px] max-h-[561px] min-w-[328px] max-w-[549px] text-white">
            <p className="text-base sm:text-2xl flex flex-col items-center  gap-4">
              <ArrowLeft className="block sm:hidden self-start" />
              Yippiee! You have created a card.... 🎉
            </p>
            <div className="mt-5 sm:mt-8 border  border-[#2D3234] relative  flex flex-col items-center rounded-[6px] mb-[55px] pb-8">
              <Edit
                onClick={() => router.back()}
                className="absolute top-4 right-4"
              />
              <p className="text-[#ba44c5] text-sm text-center sm:text-lg mt-12">
                Take a look at how you card will appear in the app.
              </p>
              <div className="w-[284px] create-card max-w-[306px] relative h-[414px]  max-h-[446px] rounded-[16px] mt-5 bg-white">
                {/* <Confetti /> */}
                <ConfettiExplosion
                  particleSize={6}
                  className="mx-32 w-full"
                  colors={["#DFB722"]}
                  force={0.4}
                  duration={3000}
                />
                <img
                  src={imageUrl}
                  className="rounded-[16px] h-full object-cover"
                  alt="card picture"
                />
                <div className="absolute bottom-4 left-4 flex flex-col gap-1 justify-start">
                  <p className="text-base font-semibold">{name}</p>
                  <p className="text-xs flex items-center gap-1">
                    <Insta className={"w-4 h-4"} /> {card.activity} on {card.platform}
                  </p>
                </div>
                <div className="rounded-full w-12 h-12 like-button grid place-content-around absolute right-4 bottom-4 ">
                  <Heart className="text-[#666666]" />
                </div>
              </div>
            </div>
          </section>

          <section className="border col-span-1 rounded-[6px] p-8 text-white  border-[#2D3234] mt-20 mx-4 md:w-[275px]  sm:place-self-start  sm:my-[172px] min-h-[343px] max-h-[400px]">
            <div className="flex flex-col">
              <p className="self-start text-base">Details:</p>
              <div className="mt-10 w-full flex justify-between text-xs">
                <ul className="text-[#878787] flex flex-col gap-4">
                  <li>Platform</li>
                  <li>Type</li>
                  <li>Target</li>
                </ul>

                <ul className="flex flex-col gap-4">
                  <li>{card.platform}</li>
                  <li>Reel</li>
                  <li>
                    {card.target} {card.activity}
                  </li>
                </ul>
              </div>
              <div className="max-w-[288px] sm:max-w-[200px] mt-8 border-[#383838] border"></div>
              <div className="flex w-full justify-between text-xs mt-9">
                <p>Total:</p>
                <p className="mr-4 text-base">₹{card.budget}</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    onClick={processPayment}
                    className="h-12 mx-auto w-[191px] mt-10 purple-button hover:bg-[#B827C6]"
                    disabled={paymentStatus === "process"}
                  >
                    {paymentStatus === "process"
                      ? "Payment in process"
                      : "Proceed to Payment"}
                  </Button>
                </DialogTrigger>
                {(paymentStatus === "success" || paymentStatus === "fail") && (
                  <DialogContent
                    onInteractOutside={(event) => event.preventDefault()}
                    className="bottom-0 sm:bottom-1/4 sm:max-w-[349px] sm:max-h-[453px] bg-[#181D1F] text-white"
                  >
                    <div className="flex items-center gap-6">
                      {paymentStatus === "process" && <Process />}{" "}
                      {/* Render the Process component when payment is in process */}
                      {paymentStatus === "fail" && <Fail />}{" "}
                      {/* Render the Fail component when payment fails */}
                      {paymentStatus === "success" && <Success />}{" "}
                      {/* Render the Success component when payment is successful */}
                      <p className="text-xl">
                        {paymentStatus === "process" && "Payment in Process"}
                        {paymentStatus === "fail" && "Payment Failed"}
                        {paymentStatus === "success" && "Payment Successful"}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-col items-center">
                      <p className="text-lg">
                        Amount:{" "}
                        <span className="text-[#BA68C8]">₹{card.budget}</span>
                      </p>
                      <div className=" w-[245px] mt-6 border-[#383838] border"></div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={async () => {
                          if (paymentStatus === "success") {
                            router.replace("/dashboard");
                          } else {
                            processPayment();
                          }
                        }}
                        disabled={paymentStatus === "process"}
                        type="submit"
                        className="h-12 mx-auto w-[191px] mt-8 purple-button hover:bg-[#90049d]"
                      >
                        {paymentStatus === "success" && "Go to Dashboard"}
                        {paymentStatus === "fail" && "Try Again"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                )}
              </Dialog>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

async function fetchImageUrl(url) {
  const obj = {
    taskUrl: url,
  };

  const response = await fetch(
    `${process.env.API_ENDPOINT}/api/image-url`,
    {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": " application/json",
      },
      cache: "no-store",
    }
  );
  const data = await response.json();
  console.log(data);
  return data[0]["data"]["imageUrl"];
}
