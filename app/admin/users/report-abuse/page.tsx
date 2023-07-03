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

export default async function Page() {
  if (!cookies().has("admin")) {
    redirect("/admin");
  }
  const today = new Date().toDateString();

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
                {/* {users.length === 0 ? (
                  <p className="text-center text-2xl mt-8 glow">
                    No new cards available.
                  </p>
                ) : (
                  users.map((card: any, index: number) => (
                    <TableRow>
                      <TableCell className="font-medium">{index+1}</TableCell>
                      <TableCell>{card["cardBy"]}</TableCell>
                      <TableCell>{card["budget"]}</TableCell>
                      <TableCell>{card["spent"]}</TableCell>
                      <TableCell>₹{card["totalEarning"]}</TableCell>
                      <TableCell>{card["totalWithdrawn"]}</TableCell>
                    </TableRow>
                  ))
                )} */}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </>
  );
}

const users = [
  {
    number: 1,
    cardBy: "John Doe",
    budget: "$1000",
    spent: "$750",
    progress: "75%",
    numReports: 3,
    status: "In Progress",
    url: "https://example.com",
  },
  {
    number: 2,
    cardBy: "Jane Smith",
    budget: "$500",
    spent: "$200",
    progress: "40%",
    numReports: 2,
    status: "In Progress",
    url: "https://example.com",
  },
  {
    number: 3,
    cardBy: "Mark Johnson",
    budget: "$2000",
    spent: "$1800",
    progress: "90%",
    numReports: 5,
    status: "Completed",
    url: "https://example.com",
  },
];
