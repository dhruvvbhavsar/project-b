/* eslint-disable react/jsx-key */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "../../adminSidebar";
import AbuseOveriew from "./abuseOverview";
import Search from "../search";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AbuseCard from "./abuseCard";

export default async function Page() {
  if (!cookies().has("admin")) {
    redirect("/admin");
  }
  const today = new Date().toDateString();
  const cards = await fetchReportedCards();
  console.log(cards);
  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <AdminSidebar />

        <div className="w-full min-h-screen ">
          <div className="text-white mt-[70px] px-4 sm:px-10 mb-4">
            <h1 className="text-[22px]">Hello, Admin!</h1>
            <p className="mt-4 text-lg text-[#ba44c5]">Report Abuse</p>
            <p className="text-sm mt-3 text-[#B0B0B0] ">{today}</p>

            <AbuseOveriew />

            <Search />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Card by</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Spent</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>No. of Reports</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>URL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cards.length === 0 ? (
                  <p className="text-center text-2xl mt-8 glow">
                    No new cards available.
                  </p>
                ) : (
                  cards.map((card: any, index: number) => (
                    <TableRow>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>
                        {card["taskId"]["clientId"]["name"]}
                      </TableCell>
                      <TableCell>₹{card["taskId"]["budget"]}</TableCell>
                      <TableCell>₹{card["taskId"]["totalSpent"]}</TableCell>
                      <TableCell>
                        {Math.floor(
                          (card["taskId"]["totalSpent"] /
                            card["taskId"]["budget"]) *
                            100
                        )}
                        %
                      </TableCell>
                      <TableCell>{card["reportCount"]}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger>
                            <Button className="h-7 text-xs">Take Action</Button>
                          </DialogTrigger>
                          <DialogContent className="p-0 min-w-[50%]">
                            <AbuseCard
                              taskId={"649e728d1ee23bf370a77432/"}
                              name={card["taskId"]["clientId"]["name"]}
                              platform={card["taskId"]["platform"]}
                              activity={card["taskId"]["activity"]}
                              taskUrl={card["taskId"]["taskUrl"]}
                              goal={card["taskId"]["goal"]}
                              budget={card["taskId"]["budget"]}
                              imageUrl={card["taskId"]["imageUrl"]}
                              status={"pending"}
                              totalSpent={0}
                              type={card["taskId"]["type"]}
                            />
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                      <TableCell>
                        <Link
                          className="underline text-blue-400 underline-offset-1"
                          target="_blank"
                          href={card["taskId"]["taskUrl"]}
                        >
                          View
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

async function fetchReportedCards() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/user/reports`,
    {
      method: "GET",
    }
  );
  const res = await response.json();
  return res[0]["data"];
}
