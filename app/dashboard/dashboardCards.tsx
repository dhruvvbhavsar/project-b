"use client";
import { Card } from "./card";
import {
  sliceStartAtom,
  sliceEndAtom,
  currentPageAtom,
} from "../../storage/atoms";
import { useAtom } from "jotai";
import { Separator } from "@/components/ui/separator";

type Card = {
  clientId: string;
  platform: string;
  activity: string;
  current: number;
  goal: number;
  budget: number;
  imageUrl: string;
  status: string;
};
export default function DashboardCards({ cardProps }: any) {
  // using the global state from Jotai for setting our slice values
  const [currentSliceStart, setCurrentSliceStart] = useAtom(sliceStartAtom);
  const [currentSliceEnd, setCurrentSliceEnd] = useAtom(sliceEndAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  // the number that is added to the states specifies how many posts are displayed per page
  const nextPage = () => {
    setCurrentSliceStart(currentSliceStart + 5);
    setCurrentSliceEnd(currentSliceEnd + 5);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentSliceStart(currentSliceStart - 5);
    setCurrentSliceEnd(currentSliceEnd - 5);
    setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <div className="w-full flex flex-col gap-8 mt-4">
        {cardProps.length === 0 ? (
          <p className="text-center text-2xl mt-8 glow">
            No new cards available.
          </p>
        ) : (
          cardProps
            .slice(currentSliceStart, currentSliceEnd)
            .map((card: Card) => (
              <Card
                key={card.clientId}
                clientId={card.clientId}
                platform={card.platform}
                activity={card.activity}
                current={card.current}
                goal={card.goal}
                budget={card.budget}
                imageUrl={card.imageUrl}
                status={card.status}
              />
            ))
        )}
        <Separator className="bg-[#323739]" />

        <div className="flex justify-between gap-3 mb-24">
          <button
            onClick={previousPage}
            disabled={currentSliceStart === 0}
            className={`${
              currentSliceStart === 0
                ? " border-gray-600 border bg-transparent text-gray-500 cursor-not-allowed"
                : " text-white border-gray-600 border  cursor-pointer"
            } py-2 px-4 rounded`}
          >
            previous
          </button>
          {currentPage}
          <button
            onClick={nextPage}
            disabled={currentSliceEnd >= cardProps.length}
            className={`${
              currentSliceEnd >= cardProps.length
                ? " border-gray-600 border bg-transparent text-gray-500 cursor-not-allowed"
                : " text-white border-gray-600 border  cursor-pointer"
            } py-2 px-4 rounded`}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}
