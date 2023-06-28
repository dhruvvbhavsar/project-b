/* eslint-disable react/jsx-key */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AdminCard from "./adminCard";
import AdminOveriew from "./adminOverview";
import AdminSidebar from "./adminSidebar";
import Search from "./search";

export default async function Admin() {
  const today = new Date().toDateString();
  const allCards = await fetchAllCards();
  console.log(allCards)

  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <AdminSidebar />

        <div className="w-full min-h-screen ">
          <div className="text-white mt-[70px] px-4 sm:px-10 mb-4">
            <h1 className="text-[22px]">Hello, Admin!</h1>
            <p className="mt-4 text-lg text-[#ba44c5]">Overview</p>
            <p className="text-sm mt-3 text-[#B0B0B0] ">{today}</p>

            <AdminOveriew />

            <Search />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Spent</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allCards.length === 0 ? (
                <p className="text-center text-2xl mt-8 glow">
                  No new cards available.
                </p>
              ) : (
                allCards.map((card: any, index: number) => (
                  <TableRow>
                    <TableCell className="font-medium">{index+1}</TableCell>
                    <TableCell>{card["clientId"]["name"]}</TableCell>
                    <TableCell>2023-06-01</TableCell>
                    <TableCell>₹{card["budget"]}</TableCell>
                    <TableCell>₹{card["totalSpent"]}</TableCell>
                    <TableCell>{card["platform"]}</TableCell>
                    <TableCell>{card["activity"]}</TableCell>
                    <TableCell>{card["status"]}</TableCell>
                  </TableRow>
                ))
              )}
              </TableBody>
            </Table>
            {/* <div className="w- full flex flex-col gap-8 mt-4">
              {cardProps.length === 0 ? (
                <p className="text-center text-2xl mt-8 glow">
                  No new cards available.
                </p>
              ) : (
                cardProps.map((card: any) => (
                  <AdminCard
                    key={card.clientId}
                    clientId={card.clientId}
                    platform={card.platform}
                    activity={card.activity}
                    current={card.current}
                    goal={card.goal}
                    budget={card.budget}
                  />
                ))
              )}
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
}

async function fetchAllCards() {
  const response = await fetch(
    "https://project-b-olive.vercel.app/api/admin/client/all-cards",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const result = await response.json();
  return result[0]["data"]['cardDetails'];
}
