/* eslint-disable @next/next/no-img-element */
import { Instagram } from "lucide-react";
import ProgressComponent from "./progress";

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
    <div className="some flex h-full rounded-md w-full flex-col justify-between pl-6 text-white">
      <div className="flex mt-4 items-center gap-3">
        <Instagram className="h-8 w-8" />
        <p className="text-2xl">{card.platform} {card.activity}</p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-8 mb-16 mt-4 pr-8">
        <div className="flex mx-auto h-60 rounded-md w-3/5 flex-col text-white relative">
          <img
            className="object-cover h-full w-full rounded-md "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYEMweEx15jXbuRsOBxuEKMyFHTkobwMi_Qw&usqp=CAU"
            alt="photo"
          />
          {/* <Heart className="absolute bottom-2 right-2" /> */}
          <p className="mt-2 text-muted-foreground">17th May, 2023</p>
        </div>

        <div className="some flex h-52 rounded-md my-auto  w-full flex-col justify-between pl-6 text-white">
          <p className="pt-4 text-sm">Allocated Budget</p>
          <p className="my-auto text-4xl">₹{card.budget}</p>
        </div>

        <div className="some flex h-52 rounded-md my-auto  w-full flex-col justify-between pl-6 text-white">
          <p className="pt-4 text-sm">Spent</p>
          <p className="my-auto text-4xl">₹{card.current}</p>
        </div>

        <div className="some flex h-52 rounded-md  w-full my-auto pl-6 text-white">
          <p className="pt-4 text-sm ">Progress</p>
          <ProgressComponent value={Math.round((card.current / card.goal) * 100 )} />
        </div>
      </div>
    </div>
  );
}