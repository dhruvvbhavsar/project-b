/* eslint-disable @next/next/no-img-element */
import { Insta } from "@/components/icons/insta";
import ProgressComponent from "./progress";
import { Like } from "@/components/icons/like";
import picture from "@/components/icons/unsplash_LsMxdW1zWEQ.png";
import  Image  from  "next/image"
 
type Card = {
  clientId: string;
  platform: string;
  activity: string;
  current: number;
  goal: number;
  budget: number;
};

export const Card = (card: Card) => {
  return (
    <div className="flex  rounded-md w-full flex-col justify-between pl-5 text-white bg-[#202527]">
      <div className="flex mt-4 items-center gap-3">
        <Insta className={"w-8 h-8"} />
        <p className="text-lg">
          {card.platform.charAt(0).toUpperCase() + card.platform.slice(1) } {card.activity}
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-8 mb-2 mt-7 pr-8">
        <div className="flex h-56 rounded-md w-44 flex-col text-white relative">
          <Image
            src={picture}
            className="imgg object-cover h-48 w-full rounded-md"
            alt="card picture"
          />
          {/* <Heart className="absolute bottom-2 right-2" /> */}
          <div className="absolute h-8 w-8 rounded-full circ bottom-10 right-3 flex justify-center items-center">
            <Like className={"w-5 h-5"} />
          </div>
          <p className="mt-2 text-[#B0B0B0]">17th May, 2023</p>
        </div>

        <div className="some flex h-48 rounded-md  w-60 flex-col justify-between pl-5 text-white">
          <p className="pt-5 text-sm text-[#CACACA]">Allocated Budget</p>
          <p className="pb-16 text-2xl glow">₹{card.budget}</p>
        </div>

        <div className="some flex h-48 rounded-md  w-60 flex-col justify-between pl-5 text-white">
          <p className="pt-5 text-sm text-[#CACACA]">Spent</p>
          <p className="pb-16 text-2xl glow">₹{card.current}</p>
        </div>

        <div className="some flex h-48 rounded-md  w-60 pl-5 text-white">
          <p className="pt-5 text-sm text-[#CACACA] ">Progress</p>
          <ProgressComponent
            value={Math.round((card.current / card.goal) * 100)}
          />
        </div>
      </div>
    </div>
  );
};
