/* eslint-disable @next/next/no-img-element */
import { Insta } from "@/components/icons/insta";
import { Like } from "@/components/icons/like";
import { Progress } from "@/components/ui/progress";

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

export const Card = (card: Card) => {
  return (
    <div className="flex relative  rounded-md w-full flex-col justify-between pl-5 text-white bg-[#202527]">
      <div className="absolute text-white top-3 right-3">
        {(card.status === "success" ||
          card.status === "rejected" ||
          card.status === "pending") && (
          <div className="approved px-4 h-8 grid place-items-center">
            <p
              className={`text-[10px] sm:text-sm ${
                card.status === "pending"
                  ? "text-yellow-500"
                  : card.status === "success"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {card.status === "pending"
                ? "Approval Pending"
                : card.status === "success"
                ? "Card Approved"
                : "Card Rejected"}
            </p>
          </div>
        )}
      </div>
      <div className="flex mt-4 items-center gap-3">
        <Insta className={"w-8 h-8"} />
        <p className="text-lg">
          {card.platform.charAt(0).toUpperCase() + card.platform.slice(1)}{" "}
          {card.activity}
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-3  mb-2 mt-7 pr-8">
        <div className="flex h-56 col-span-1 mx-auto rounded-md  flex-col text-white relative">
          <img
            src={card.imageUrl}
            className="imgg object-cover h-48 w-36 aspect-[9/16] rounded-md"
            alt="card picture"
          />
          {/* <Heart className="absolute bottom-2 right-2" /> */}
          <div className="absolute h-8 w-8 rounded-full circ bottom-10  mx-auto right-2  flex justify-center items-center">
            <Like className={"w-5 h-5"} />
          </div>
          <p className="mt-2 text-sm sm:text-base text-[#B0B0B0]">
            17th May, 2023
          </p>
        </div>

        <div className="flex gap-5 col-span-2 flex-wrap sm:flex-nowrap mx-auto w-full my-6 sm:my-0">
          <div className="flex space-x-5 mx-auto">
            <div className="some flex w-32 sm:w-52 h-20 sm:h-48 rounded-md  flex-col  justify-between text-white">
              <p className="pt-2 sm:pt-5 pl-3 text-xs sm:text-sm text-[#CACACA]">
                Allocated Budget
              </p>
              <p className="pb-2 pl-3 sm:pb-16 text-base sm:text-2xl glow">
                ₹{card.budget}
              </p>
            </div>

            <div className="some flex w-32 sm:w-52 h-20 sm:h-48 rounded-md  flex-col justify-between text-white">
              <p className="pt-2 sm:pt-5 pl-3 text-xs sm:text-sm text-[#CACACA]">
                Spent
              </p>
              <p className="pb-2 pl-3 sm:pb-16 text-base sm:text-2xl glow">
                {card.status === "success" ? `₹${card.current}` : "-"}
              </p>
            </div>
          </div>

          <div className="some flex mx-auto h-40 w-52 sm:h-48 flex-col rounded-md relative  text-white">
            <p className="pt-2 sm:pt-5 pl-3 text-xs sm:text-sm text-[#CACACA] ">
              Progress
            </p>
            <div className="flex flex-col mt-12">
              <p className=" mx-auto  text-base sm:text-2xl glow">
                {Math.floor((card.current / card.budget) * 100)}%
              </p>
              <Progress
                value={Math.floor((card.current / card.budget) * 100)}
                className="w-3/4 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
