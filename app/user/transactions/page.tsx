/* eslint-disable react/jsx-key */
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { ArrowLeft } from "lucide-react";
import TransactionCard from "./transactionCard";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";

export default async function Transactions() {
  const cookie = cookies().get("id")?.value;
  const cards = await getTransactions(cookie);
  console.log(cards);

  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <SideBar />
        <section className="mx-auto w-full sm:w-2/3 mt-[92px]">
          <p className="text-[22px] font-medium text-white text-center sm:text-start flex items-center gap-2 px-2">
            <ArrowLeft className="sm:hidden block" />
            Transactions
          </p>

          <div className="w-full flex flex-col rounded-[6px] mt-6 gap-3  p-3 sm:border sm:border-[#5B5B5B] ">
            <Button className="mb-4 w-32 self-end">Sort By</Button>
            {cards.length === 0 ? (
              <p className="text-center text-2xl mt-8 glow">
                No new transactions available.
              </p>
            ) : (
              cards.map((card: any) => (
                <TransactionCard
                  state={card["taskId"]["status"]}
                  imageUrl={card["taskId"]["imageUrl"]}
                  platform={card["taskId"]["platform"]}
                  activity={card["taskId"]["activity"]}
                  quantity={card["taskId"]["goal"]}
                  budget={card["taskId"]["budget"]}
                />
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
}

async function getTransactions(id: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/client/${id}/transactions`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const cards = await response.json();
  return cards[0]["data"];
}
