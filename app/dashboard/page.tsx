import { Button } from "@/components/ui/button";
import { BarChart2, ChevronDown, ChevronRight, Plus } from "lucide-react";
import { Card } from "./card";
import { Nav } from "./nav";
import { Overview } from "./overview";

import { Socials } from "./socials";

type Card = {
  clientId: string;
  platform: string;
  activity: string;
  current: number;
  goal: number;
  budget: number;
};

export default async function Dashboard() {
  const cardProps = await fetchCards();
  const userProps = await fetchOverall();
  return (
    <>
      <main className="flex w-full flex-row bg-[#181d1f]">
        {/* sidebar */}
        <div className="w-0 sm:w-64 bg-[#2d3234]">
          <div className="flex h-12 w-full flex-row items-center justify-center gap-5 bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            <p className="text-[#586266] opacity-0 sm:opacity-100">BrandName</p>
          </div>
          <div className="w-full h-10 flex flex-row justify-center mt-3 opacity-0 sm:opacity-100">
            <Button className="bg-[#586266] hover:bg-[#202223] space-x-3">
              <BarChart2 />
              Dashboard
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <Nav />
          <div className="text-white px-10 h-full w-full">
            <h1 className="text-2xl">Hello, Ritwika!</h1>
            <p className="mt-4 text-lg">Overview</p>
            <p className="text-lg mt-3 text-[#B0B0B0] ">
              13th June,2023 Tuesday
            </p>

            <Overview
              budget={userProps.budget}
              balance={userProps.balance}
              progress={userProps.progress}
              totalCards={userProps.totalCards}
            />

            <div className="w-full flex flex-row items-center justify-between mt-4">
              <p className="text-lg">My Cards ({cardProps ? cardProps.length : "3" })</p>
              <div className="flex gap-3 justify-center  items-center">
                <Socials />
                <Button className="bg-[#ba44c5] hover:bg-[#90049D]">
                  <Plus className="mr-3" /> Add New Card
                </Button>
              </div>
            </div>

            <div className="w-full flex flex-col gap-8 mt-4">
              {cardProps.map((card: Card) => (
                <Card
                  key={card.clientId}
                  clientId={card.clientId}
                  platform={card.platform}
                  activity={card.activity}
                  current={card.current}
                  goal={card.goal}
                  budget={card.budget}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

async function fetchCards() {
  const response = await fetch(
    "https://project-b-olive.vercel.app/api/client/648aa9bffc4cc18a693c2514/cards",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const res = await response.json();
  const clientData = res["data"];

  const cardProps = clientData.map((card: Card) => {
    return {
      clientId: card.clientId,
      platform: card.platform,
      activity: card.activity,
      current: card.current,
      goal: card.goal,
      budget: card.budget,
    };
  });
  return cardProps;
}

async function fetchOverall() {
  const response = await fetch(
    "https://project-b-olive.vercel.app/api/client/648aa9bffc4cc18a693c2514/overall",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const res = await response.json();
  const overallData = res[0]["data"];

  const overview = {
    budget: Math.round(overallData["totalbudget"]),
    balance: Math.round(overallData["balance"]),
    progress: Math.round(overallData["totalProgress"]),
    totalCards: Math.round(overallData["totalCards"]),
  };
  console.log(overview);

  return overview;
}
