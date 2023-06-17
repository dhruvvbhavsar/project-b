/* eslint-disable @next/next/no-img-element */
import { Insta } from "@/components/icons/insta";
import ProgressComponent from "./progress";
import { Like } from "@/components/icons/like";
import picture from "@/components/icons/unsplash_LsMxdW1zWEQ.png";

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
        <p className="text-2xl">
          {card.platform} {card.activity}
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-8 mb-2 mt-7 pr-8">
        <div className="flex h-56 rounded-md w-44 flex-col text-white relative">
          <img
            className="imgg object-cover object-top h-48 w-full rounded-md "
            src="https://images.unsplash.com/photo-1636139565467-fa3e429261ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
            alt="photo"
          ></img>
          {/* <Heart className="absolute bottom-2 right-2" /> */}
          <div className="absolute h-8 w-8 rounded-full circ bottom-10 right-3 flex justify-center items-center">
            <Like className={"w-5 h-5"} />
          </div>
          <p className="mt-2 text-[#B0B0B0]">17th May, 2023</p>
        </div>

        <div className="some flex h-48 rounded-md  w-60 flex-col justify-between pl-5 text-white">
          <p className="pt-5 text-sm">Allocated Budget</p>
          <p className="pb-16 text-2xl glow">₹{card.budget}</p>
        </div>

        <div className="some flex h-48 rounded-md  w-60 flex-col justify-between pl-5 text-white">
          <p className="pt-5 text-sm">Spent</p>
          <p className="pb-16 text-2xl glow">₹{card.current}</p>
        </div>

        <div className="some flex h-48 rounded-md  w-60 pl-5 text-white">
          <p className="pt-5 text-sm ">Progress</p>
          <ProgressComponent
            value={Math.round((card.current / card.goal) * 100)}
          />
        </div>
      </div>
    </div>
  );
};
