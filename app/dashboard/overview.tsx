import { Progress } from "@/components/ui/progress";
type Overview = {
  budget: number;
  balance: number;
  progress: number;
  totalCards: number;
};

export const Overview = (data: Overview) => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4  gap-4 mt-4">
      <div className="some flex h-32 sm:h-48 rounded-md w-full flex-col justify-between pl-3 sm:pl-6 text-white">
        <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
          Allocated Budget
        </p>
        <p className="pb-3 sm:pb-8 text-lg sm:text-2xl glow ">₹{data.budget}</p>
      </div>

      <div className="some flex h-32 sm:h-48 rounded-md w-full flex-col justify-between pl-3 sm:pl-6 text-white">
        <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
          Balance
        </p>
        <p className="pb-3 sm:pb-8 text-lg sm:text-2xl glow ">
          ₹{data.balance}
        </p>
      </div>

      <div className="some flex h-32 sm:h-48 rounded-md flex-col  w-full  text-white">
        <p className="pt-3 pl-6 sm:pt-4 text-xs sm:text-base text-[#CACACA] ">
          Progress
        </p>
        <div className="flex flex-col mt-12 sm:mt-16">
          <p className=" mx-auto  text-base sm:text-2xl glow">
            {data.progress}%
          </p>
          <Progress value={data.progress} className="w-3/4 mx-auto" />
        </div>
      </div>

      <div className="some flex h-32 sm:h-48 rounded-md w-full flex-col justify-between pl-3 sm:pl-6 text-white">
        <p className="pt-3 sm:pt-4 text-xs sm:text-base text-[#CACACA]">
          Total cards
        </p>
        <p className="pb-3 sm:pb-8 text-lg sm:text-2xl glow ">
          {data.totalCards}
        </p>
      </div>
    </div>
  );
};
