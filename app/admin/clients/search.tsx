import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <>
      <div className="bg-transparent border border-gray-500 w-80 mt-3 flex items-center  h-12 rounded-md">
        <SearchIcon className="text-gray-600 w-5 h-5 ml-2" />
        <input type="text" className="bg-transparent text-white w-full mx-2 focus:outline-none placeholder:text-gray-600 placeholder:text-sm" placeholder="search by name, social media etc"  />
      </div>
    </>
  );
}
