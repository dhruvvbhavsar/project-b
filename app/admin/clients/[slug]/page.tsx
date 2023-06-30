/* eslint-disable @next/next/no-img-element */
"use client";
import { ArrowLeft } from "lucide-react";
import AdminSidebar from "../../adminSidebar";
import Cage from "./card";
import { useRouter } from "next/navigation";
import { hasCookie } from "cookies-next";

export default async function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  if (!hasCookie("admin")) {
    router.push("/admin");
  }
  const [taskId, clientId] = params.slug.split("_");
  const cards = await fetchCardDetails(taskId, clientId);
  const task = cards["card"];
  const otherCards = cards["cards"];
  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <AdminSidebar />

        <div className="w-full min-h-screen ">
          <div className="text-white mt-[70px] px-4 sm:px-10 mb-4">
            <h1 className="text-[22px]">Hello, Admin!</h1>
            <p className="mt-4 text-lg text-[#ba44c5] flex gap-2 items-center">
              <ArrowLeft className="text-white" />
              Client Requirements
            </p>
          </div>

          <Cage
            platform={task.platform}
            activity={task.activity}
            taskUrl={task.taskUrl}
            goal={task.goal}
            budget={task.budget}
            imageUrl={task.imageUrl}
            status={task.status}
            totalSpent={task.totalSpent}
            name={task.clientId.name}
            taskId={task._id}
          />
          <p className="px-4 sm:px-10 mt-8 text-lg text-white">
            {task.clientId.name} also created these cards
          </p>
          <div className="space-y-6 py-4">
            {otherCards &&
              otherCards.map((card: any) => {
                <Cage
                  platform={card.platform}
                  activity={card.activity}
                  taskUrl={card.cardUrl}
                  goal={card.goal}
                  budget={card.budget}
                  imageUrl={card.imageUrl}
                  status={card.status}
                  totalSpent={card.totalSpent}
                  name={task.clientId.name}
                  taskId={card._id}
                />;
              })}
          </div>
        </div>
      </main>
    </>
  );
}

async function fetchCardDetails(taskId: string, clientId: string) {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/api/admin/client/${clientId}/cards`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taskId: taskId,
      }),
      cache: "no-store",
    }
  );

  const result = await response.json();
  return result[0]["data"];
}
