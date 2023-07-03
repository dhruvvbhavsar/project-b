export default async function AbuseOveriew() {
  // const overview = await fetchUserOverview();
  return (
    <>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4  gap-0 mt-4 some">
        <div className="flex h-32 sm:h-48  w-full flex-col justify-between pl-3 sm:pl-6 text-white">
          <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
            Total Cards
          </p>
          <div className="space-y-1 pb-3">
            <p className="text-lg sm:text-2xl glow ">50</p>
            <p className="text-sm text-green-500">10%</p>
          </div>
        </div>

        <div className="flex h-32 sm:h-48  w-full flex-col justify-between pl-3 sm:pl-6 text-white">
          <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
            Total Cards Banned
          </p>
          <div className="space-y-1 pb-3">
            <p className="text-lg sm:text-2xl glow ">10</p>
            {/* <p className="text-sm text-green-500">+₹40,000</p> */}
          </div>
        </div>

        <div className="flex h-32 sm:h-48  w-full flex-col justify-between pl-3 sm:pl-6 text-white">
          <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
            Total Cards Resolved
          </p>
          <div className="space-y-1 pb-3">
            <p className="text-lg sm:text-2xl glow ">40</p>
            {/* <p className="text-sm text-green-500">+₹50,000</p> */}
          </div>
        </div>

        <div className="flex h-32 sm:h-48  w-full flex-col justify-between pl-3 sm:pl-6 text-white">
          <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
            Total Cards Pending
          </p>
          <div className="space-y-1 pb-3">
            <p className="text-lg sm:text-2xl glow ">10</p>
            {/* <p className="text-sm text-green-500">+500</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

// async function fetchUserOverview() {
//   const response = await fetch(
//     "https://project-b-olive.vercel.app/api/admin/user/overall",
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       cache: "no-store",
//     }
//   );
//   const result = await response.json();
//   return result[0]["data"];
// }
