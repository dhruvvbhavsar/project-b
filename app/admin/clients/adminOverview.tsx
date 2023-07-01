type Overview = {
  totalClients: number;
  totalBudget: number;
  totalSpent: number;
  totalCards: number;
};

export default async function AdminOveriew() {
  const overview: Overview = await fetchClientOverview();
  return (
    <>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4  gap-1 mt-4">
        <div className="some flex h-32 sm:h-48 rounded-md w-full flex-col justify-between pl-3 sm:pl-6 text-white">
          <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
            Total Clients
          </p>
          <div className="space-y-1 pb-3">
            <p className="text-lg sm:text-2xl glow ">{overview.totalClients}</p>
            <p className="text-sm text-green-500">+10</p>
          </div>
        </div>

        <div className="some flex h-32 sm:h-48 rounded-md w-full flex-col justify-between pl-3 sm:pl-6 text-white">
          <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
            Total Budget
          </p>
          <div className="space-y-1 pb-3">
            <p className="text-lg sm:text-2xl glow ">₹{overview.totalBudget}</p>
            <p className="text-sm text-green-500">+₹40,000</p>
          </div>
        </div>

        <div className="some flex h-32 sm:h-48 rounded-md w-full flex-col justify-between pl-3 sm:pl-6 text-white">
          <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
            Total Spent
          </p>
          <div className="space-y-1 pb-3">
            <p className="text-lg sm:text-2xl glow ">₹{overview.totalSpent}</p>
            <p className="text-sm text-green-500">+₹50,000</p>
          </div>
        </div>

        <div className="some flex h-32 sm:h-48 rounded-md w-full flex-col justify-between pl-3 sm:pl-6 text-white">
          <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
            Total cards
          </p>
          <div className="space-y-1 pb-3">
            <p className="text-lg sm:text-2xl glow ">{overview.totalCards}</p>
            <p className="text-sm text-green-500">+500</p>
          </div>
        </div>
      </div>
    </>
  );
}

async function fetchClientOverview() {
  const response = await fetch(
    "https://project-b-olive.vercel.app/api/admin/client/overall",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const result = await response.json();
  return result[0]["data"];
}
