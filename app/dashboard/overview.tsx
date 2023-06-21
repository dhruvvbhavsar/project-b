import ProgressComponent from "./progress";

type Overview = {
  budget: number,
  balance: number,
  progress: number,
  totalCards: number
}

export const Overview = (data: Overview) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-4  gap-8 mt-4">
      <div className="some flex h-[192px] rounded-md w-full flex-col justify-between pl-6 text-white">
        <p className="pt-4 text-base text-[#CACACA]">Allocated Budget</p>
        <p className="pb-8 text-2xl glow ">₹{data.budget}</p>
      </div>

      <div className="some flex h-[192px] rounded-md  w-full flex-col justify-between pl-6 text-white">
        <p className="pt-4 text-base text-[#CACACA]">Balance</p>
        <p className="pb-8 text-2xl glow">₹{data.balance}</p>
      </div>

      <div className="some flex h-[192px] rounded-md  w-full pl-6 text-white">
        <p className="pt-4 text-base text-[#CACACA] ">Progress</p>
        <ProgressComponent value={data.progress} />
      </div>

      <div className="some flex h-[192px] rounded-md  w-full flex-col justify-between pl-6 text-white">
        <p className="pt-4 text-base text-[#CACACA]">Total cards</p>
        <p className="pb-8 text-2xl glow">{data.totalCards}</p>
      </div>
    </div>
  );
};
