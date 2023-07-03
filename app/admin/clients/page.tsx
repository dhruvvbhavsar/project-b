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
import AdminOveriew from "./adminOverview";
import AdminSidebar from "../adminSidebar";
import Search from "./search";
import { Check, CircleDashed, Eye, X } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Admin() {
  if (!cookies().has("admin")) {
    redirect("/admin");
  }
  const today = new Date().toDateString();
  const allCards = await fetchAllCards();
  console.log(allCards);

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
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{card["clientId"]["name"]}</TableCell>
                      <TableCell>2023-06-01</TableCell>
                      <TableCell>₹{card["budget"]}</TableCell>
                      <TableCell>₹{card["totalSpent"]}</TableCell>
                      <TableCell>{card["platform"]}</TableCell>
                      <TableCell>{card["activity"]}</TableCell>
                      <TableCell className="flex gap-2">
                        {card["status"] === "success" ? (
                          <Check className="text-green-500" />
                        ) : card["status"] === "pending" ? (
                          <CircleDashed className="text-yellow-400" />
                        ) : (
                          <X className="text-red-600" />
                        )}
                        <Link
                          href={`/admin/clients/${card["_id"]}_${card["clientId"]["_id"]}`}
                        >
                          <Eye className="text-blue-600 hover:text-blue-200 scale-75" />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </>
  );
}

async function fetchAllCards() {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/api/admin/client/all-cards`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const result = await response.json();
  return result[0]["data"]["cardDetails"];
}
