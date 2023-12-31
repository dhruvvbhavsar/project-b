/* eslint-disable react/jsx-key */
import AdminSidebar from "../adminSidebar";
import Cage from "../clients/[slug]/card";

export default async function Page() {
  const pendingCards = await fetchCardDetails();
  console.log(pendingCards);
  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <AdminSidebar />

        <div className="w-full min-h-screen space-y-4">
          <div className="text-white mt-[70px] px-4 sm:px-10 mb-4">
            <h1 className="text-[22px]">Hello, Admin!</h1>
            <p className="mt-4 text-lg text-yellow-300 flex gap-2 items-center">
              Pending Cards
            </p>
          </div>
          <div className="space-y-6 py-4">
            {pendingCards.length === 0 ? (
              <p className="text-center text-2xl mt-8 text-white glow">
                No new cards available.
              </p>
            ) : (
              pendingCards.map((card: any) => {
                return (
                  <Cage
                    platform={card["platform"]}
                    activity={card["activity"]}
                    taskUrl={card["taskUrl"]}
                    goal={card["goal"]}
                    budget={card["budget"]}
                    imageUrl={card["imageUrl"]}
                    status={card["status"]}
                    totalSpent={card["totalSpent"]}
                    name={card["clientId"]["name"]}
                    taskId={card["_id"]}
                  />
                );
              })
            )}
          </div>
        </div>
      </main>
    </>
  );
}

async function fetchCardDetails() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/client/cards/pending`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const result = await response.json();
  return result[0]["data"];
}
