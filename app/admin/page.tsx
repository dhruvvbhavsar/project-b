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

export default function Admin() {
  const today = new Date().toDateString();

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
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>John Stone</TableCell>
                  <TableCell>2023-06-01</TableCell>
                  <TableCell>$500.00</TableCell>
                  <TableCell>$350.00</TableCell>
                  <TableCell>Facebook</TableCell>
                  <TableCell>Ad Campaign</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>John Stone</TableCell>
                  <TableCell>2023-06-05</TableCell>
                  <TableCell>$300.00</TableCell>
                  <TableCell>$280.00</TableCell>
                  <TableCell>Google Ads</TableCell>
                  <TableCell>Search Ads</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell>John Stone</TableCell>
                  <TableCell>2023-06-10</TableCell>
                  <TableCell>$200.00</TableCell>
                  <TableCell>$150.00</TableCell>
                  <TableCell>Instagram</TableCell>
                  <TableCell>Influencer Promotion</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
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
