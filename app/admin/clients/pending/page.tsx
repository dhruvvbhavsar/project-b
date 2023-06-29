/* eslint-disable @next/next/no-img-element */
import AdminSidebar from "../../adminSidebar";
import Cage from "../[slug]/card";

export default async function Page() {
  const cards = await fetchCardDetails();
  // console.log("HI", cards);
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
            {cards.map((card: any) => {
              <Cage
                platform={card.platform}
                activity={card.activity}
                taskUrl={card.cardUrl}
                goal={card.goal}
                budget={card.budget}
                imageUrl={card.imageUrl}
                status={card.status}
                totalSpent={card.totalSpent}
                name={card.clientId.name}
                taskId={card._id}
              />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}

async function fetchCardDetails() {
  const response = await fetch(
    `https://project-b-olive.vercel.app/api/admin/client/cards/pending`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = await response.json();
  return result[0]["data"];
}
