import ProgressComponent from "./progress";

export const Overview = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-4  gap-8 mt-4">
      <div className="some flex h-52 rounded-md w-full flex-col justify-between pl-6 text-white">
        <p className="pt-4 text-sm">Allocated Budget</p>
        <p className="pb-8 text-4xl">₹3000</p>
      </div>

      <div className="some flex h-52 rounded-md  w-full flex-col justify-between pl-6 text-white">
        <p className="pt-4 text-sm">Balance</p>
        <p className="pb-8 text-4xl">₹1650</p>
      </div>

      <div className="some flex h-52 rounded-md  w-full pl-6 text-white">
        <p className="pt-4 text-sm ">Progress</p>
        {/* <p className="pb-8 text-4xl">₹3000</p> */}
        <ProgressComponent value={10} />
      </div>

      <div className="some flex h-52 rounded-md  w-full flex-col justify-between pl-6 text-white">
        <p className="pt-4 text-sm">Total cards</p>
        <p className="pb-8 text-4xl">3</p>
      </div>
    </div>
  );
};
