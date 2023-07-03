/* eslint-disable react/jsx-key */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AdminOveriew from "./adminOverview";
import AdminSidebar from "../adminSidebar";
import Search from "./search";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Admin() {
  if (!cookies().has("admin")) {
    redirect("/admin");
  }
  const today = new Date().toDateString();
  const allCards = await fetchAllUsers();
  console.log(allCards)

  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <AdminSidebar />

        <div className="w-full min-h-screen ">
          <div className="text-white mt-[70px] px-4 sm:px-10 mb-4">
            <h1 className="text-[22px]">Hello, Admin!</h1>
            <p className="mt-4 text-lg text-[#ba44c5]">Users Overview</p>
            <p className="text-sm mt-3 text-[#B0B0B0] ">{today}</p>

            <AdminOveriew />

            <Search />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Mobile Number</TableHead>
                  <TableHead>Earned</TableHead>
                  <TableHead>Withdrawn</TableHead>
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
                    <TableCell>{card["name"]}</TableCell>
                    <TableCell>2023-06-01</TableCell>
                    <TableCell>{card["number"]}</TableCell>
                    <TableCell>₹{card["totalEarning"]}</TableCell>
                    <TableCell>{card["totalWithdrawn"]}</TableCell>
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

async function fetchAllUsers() {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/api/admin/user/all-users`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const result = await response.json();
  console.log(result)
  return result[0]["data"];
}
