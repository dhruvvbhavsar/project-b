import { Card } from "./card";
import { Overview } from "./overview";
import AddCardButton from "./addCardButton";
import { Socials } from "./socials";
import { SideBar } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import DashboardCards from "./dashboardCards";

type Card = {
  clientId: string;
  platform: string;
  activity: string;
  current: number;
  goal: number;
  budget: number;
  imageUrl: string;
  status: string;
};

export default async function Dashboard() {
  if (!cookies().has("id")) {
    throw redirect("/welcome");
  }

  const cookie = cookies().get("id")?.value;
  const name = cookies().get("name")?.value;
  const cardProps = await fetchCards(cookie);
  const userProps = await fetchOverall(cookie);

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <SideBar />

        <div className="w-full min-h-screen ">
          <div className="text-white mt-[70px] px-4 sm:px-10 mb-4">
            <h1 className="text-[22px]">Hello, {name}!</h1>
            <p className="mt-4 text-lg text-[#ba44c5]">Overview</p>
            <p className="text-sm mt-3 text-[#B0B0B0] ">{today}</p>

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
                {/* <Socials /> */}
                <AddCardButton />
              </div>
            </div>

            <DashboardCards cardProps={cardProps} />
          </div>
        </div>
      </main>
    </>
  );
}

async function fetchCards(id: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/client/${id}/cards`,
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
      imageUrl: card.imageUrl,
      status: card.status,
    };
  });
  console.log(cardProps);
  return cardProps;
}

async function fetchOverall(id: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/client/${id}/overall`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
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
