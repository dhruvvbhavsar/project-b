/* eslint-disable @next/next/no-img-element */
"use client";
import { Like } from "@/components/icons/like";
import { Progress } from "@/components/ui/progress";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

type AdminCard = {
  taskId: string;
  name: string;
  platform: string;
  activity: string;
  taskUrl: string;
  goal: number;
  budget: number;
  imageUrl: string;
  status: string;
  totalSpent: number;
};
export default function Cage(card: AdminCard) {
  const [isLoading, setIsLoading] = useState(false);
  const stat = card.status
  const cardId = card.taskId
  const [cardStatus, setCardStatus] = useState(stat)
  return (
    <>
      <section
        className={`bg-[#202527] mx-14 rounded-[6px] ${
          cardStatus === "success" ? "h-96" : ""
        } p-3`}
      >
        <div className="flex justify-between">
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="lol"
            />
            <div className="text-white ml-3">
              <p className="text-sm">{card.name}</p>
              <p className="text-xs font-extralight text-[#B0B0B0]">
                10 May, 2023
              </p>
            </div>
          </div>
          {(cardStatus === "success" || cardStatus === "rejected") && (
            <div className="justify-self-end approved w-40 grid place-items-center">
              <p
                className={`text-sm ${
                  cardStatus === "success" ? "text-[#3FE025]" : "text-red-500"
                }`}
              >
                {cardStatus === "success" ? "Card Approved" : "Card Rejected"}
              </p>
            </div>
          )}
          {isLoading ? (
            <div className="text-white">loading</div>
          ) : (
            cardStatus === "pending" && (
              <div className="justify-self-end w-36 flex gap-3">
                <Button
                  onClick={async () => {
                    setIsLoading(true);
                    const status = await sendStatus("success", cardId);
                    console.log(status)
                    if (status) {
                      console.log(status)
                      setIsLoading(false);
                      setCardStatus(status)
                      console.log(cardStatus)
                    }
                  }}
                  className="approved hover:bg-sky-100 w-full grid place-items-center"
                >
                  <Check className="text-green-500" />
                </Button>
                <Button
                  onClick={async () => {
                    setIsLoading(true);
                    const status = await sendStatus("rejected", cardId);
                    console.log(status)
                    if (status === "success") {
                      setIsLoading(false);
                      setCardStatus(status)
                      console.log(cardStatus)
                    }
                  }}
                  className="approved hover:bg-sky-100 w-full grid place-items-center"
                >
                  <X className="text-red-500" />
                </Button>
                <div></div>
              </div>
            )
          )}
        </div>

        <article className="flex gap-6 items-center">
          <div className="flex rounded-md w-fit mt-8  flex-col text-white relative">
            <img
              src={card.imageUrl}
              className="imgg object-cover h-40 sm:w-28 rounded-md"
              alt="card picture"
            />
            <div className="absolute h-5 w-5 rounded-full circ bottom-2 right-2 flex justify-center items-center">
              <Like className="w-3 h-3 text-white" />
            </div>
          </div>

          <div className="mt-10 w-full flex justify-between text-xs">
            <ul className="text-[#878787] flex flex-col gap-4">
              <li>Platform:</li>
              <li>Quantity:</li>
              <li>Amount Paid:</li>
              <li>URL:</li>
            </ul>

            <ul className="flex flex-col items-end gap-4 text-white">
              <li>{card.platform}</li>
              <li>
                {card.goal} {card.activity}
              </li>
              <li>₹{card.budget}</li>
              <li className="text-blue-600">
                <Link href={card.taskUrl} target="_blank">
                  {card.taskUrl}
                </Link>
              </li>
            </ul>
          </div>
        </article>

        {cardStatus === "success" && (
          <article className="grid grid-cols-3 w-full h-1/3 mt-4 gap-6">
            <div className="bg-[#181D1F] w-full h-full rounded-[6px] pt-4 pl-6">
              <p className="text-sm text-[#A3A3A3]">Allocated Budget</p>
              <p className="text-lg sm:text-2xl glow text-white mt-6">
                ₹{card.budget}
              </p>
            </div>
            <div className="bg-[#181D1F] w-full h-full rounded-[6px] pt-4 pl-6">
              <p className="text-sm text-[#A3A3A3]">Spent</p>
              <p className="text-lg sm:text-2xl glow text-white mt-6">
                ₹{card.totalSpent}
              </p>
            </div>
            <div className="bg-[#181D1F] w-full h-full rounded-[6px] relative pt-4 pl-6">
              <p className="text-sm text-[#A3A3A3]">Progress</p>
              <Progress
                value={Math.floor((card.totalSpent / card.budget) * 100)}
                className="-ml-2 mt-10"
              />
              <p className="absolute text-2xl glow text-white left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2">
                {Math.floor((card.totalSpent / card.budget) * 100)}%
              </p>
            </div>
          </article>
        )}
      </section>
    </>
  );
}

async function sendStatus(setStatus: string, taskId: string) {
  const obj = {
    status: setStatus,
  }
  const response = await fetch(
    `https://project-b-olive.vercel.app/api/admin/client/card/${taskId}/status`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(obj),
    }
  );
  const data = await response.json();
  console.log(data)
  return data[0]["data"]["status"];
}
