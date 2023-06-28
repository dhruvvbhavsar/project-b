import { Like } from "@/components/icons/like";
import Image from "next/image";
import picture from "@/components/icons/unsplash_LsMxdW1zWEQ.png";
import { Success, Fail } from "@/components/ui/success";
import { Button } from "@/components/ui/button";

type TransactionCard = {
  state: string;
  imageUrl: string;
  platform: string;
  activity: string;
  quantity: string;
  budget: number;
};

export default async function TransactionCard(card: TransactionCard) {
  console.log(card);
  return (
    <>
      <div className="h-screen rounded-[6px] mt-6  p-3 sm:border sm:border-[#5B5B5B] ">
        <Button className="mb-4">Sort By</Button>
        <div className="w-full h-72  sm:bg-[#24292C] border border-[#5B5B5B] rounded-[6px] p-4">
          <div className="h-1/4 flex items-center">
            <Success />
            <div className="ml-2 text-white">
              <p className="text-base font-medium">Payment Successful</p>
              <p className="text-sm font-medium text-[#B0B0B0]">
                17th May 2002
              </p>
            </div>
          </div>
          <section className="bg-[#181D1F] w-full h-2/3 mt-2 p-4 flex rounded-[6px]">
            <div className="flex rounded-md  flex-col text-white relative">
              <Image
                src={picture}
                className="imgg object-cover h-full w-48 sm:w-28 rounded-md"
                alt="card picture"
              />
              <div className="absolute h-5 w-5 rounded-full circ bottom-2 right-2 flex justify-center items-center">
                <Like className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center w-full sm:justify-between px-3 text-white">
              <div>
                <p className="text-sm">Instagram Reel</p>
                <p className="text-xs text-[#B0B0B0]">Quantity: 500 Likes</p>
              </div>
              <div>
                <p className="text-green-500 text-lg">₹2,000</p>
              </div>
            </div>
          </section>
          <p className="underline text-[#BA44C5] text-sm font-medium text-end my-auto mt-1">
            View Details
          </p>
        </div>
      </div>
    </>
  );
}