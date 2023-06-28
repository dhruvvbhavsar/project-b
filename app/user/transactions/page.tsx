/* eslint-disable react/jsx-key */
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { ArrowLeft } from "lucide-react";
import TransactionCard from "./transactionCard";
import { cookies } from "next/headers";

export default async function Transactions() {
  const cookie = cookies().get("id")?.value;
  // const cards = await getTransactions(cookie);
  console.log(cookie);

  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <SideBar />
        <section className="mx-auto w-full sm:w-2/3 mt-[92px]">
          <p className="text-[22px] font-medium text-white text-center sm:text-start flex items-center gap-2 px-2">
            <ArrowLeft className="sm:hidden block" />
            Transactions
          </p>
          {/* {cards.map((card: any) => ( */}
          <TransactionCard
            state={""}
            imageUrl={""}
            platform={""}
            activity={""}
            quantity={""}
            budget={0}
          />
          {/* ))} */}
        </section>
      </main>
    </>
  );
}

// async function getTransactions(id: any) {
//   const response = await fetch(
//     `https://project-b-olive.vercel.app/api/client/${id}/transactions`,
//     {
//       method: "GET",
//       cache: "no-store",
//     }
//   );

//   const cards = await response.json();
//   const transactionData = cards.map(())=> {
//     return {
//       state: card.data.status,
//       imageUrl: card.data.taskId.imageUrl,
//       platform: card.data.taskId.platform,
//       activity: card.data.taskId.activity,
//       quantity: card.data.taskId.goal,
//       budget: card.data.taskId.budget,
//     };
//   });
//   return transactionData
// }
