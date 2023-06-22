import { BarChart2, ChevronDown, ChevronRight, Plus } from "lucide-react";
import { Card } from "./card";
import { Nav } from "../../components/ui/nav";
import { Overview } from "./overview";
import  AddCardButton  from "./addCardButton";
import { Socials } from "./socials";
import { SideBar } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

type Card = {
  clientId: string;
  platform: string;
  activity: string;
  current: number;
  goal: number;
  budget: number;
};

export default async function Dashboard() {
  if(!cookies().has("id")){
    throw redirect("/welcome")
  }
  const cardProps = await fetchCards();
  const userProps = await fetchOverall();
  return (
    <>
      <main className="flex w-full flex-row bg-[#181d1f]">
        <SideBar />

        <div className="flex w-full flex-col">
          <Nav />
          <div className="text-white mt-[70px] px-10 h-full w-full">
            <h1 className="text-[22px]">Hello, Ritwika!</h1>
            <p className="mt-4 text-lg text-[#ba44c5]">Overview</p>
            <p className="text-sm mt-3 text-[#B0B0B0] ">
              13th June,2023 Tuesday
            </p>

            <Overview
              budget={userProps.budget}
              balance={userProps.balance}
              progress={userProps.progress}
              totalCards={userProps.totalCards}
            />

            <div className="w-full flex flex-row items-center justify-between mt-4">
              <p className="text-lg text-[#ba44c5]">
                My Cards ({cardProps ? cardProps.length : "3"})
              </p>
              <div className="flex gap-3 justify-center  items-center">
                <Socials />
                <AddCardButton />
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
    "https://project-b-olive.vercel.app/api/client/648aac96fc4cc18a693c2523/cards",
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
    "https://project-b-olive.vercel.app/api/client/648aac96fc4cc18a693c2523/overall",
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
