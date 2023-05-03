
import { ClockIcon } from "@heroicons/react/24/outline";

function HeaderTable() {

  return ( 
    <div className=" border-b-[1px] border-b-gray-900 shadow-md grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 space-x-8 items-center font-bold p-2">
        <div className="flex space-x-[88px] col-span-2 lg:col-span-1">
          <p>#</p>
          <p>Title</p>
        </div>
        <p className="hidden md:block">Album</p>
        <div className="flex justify-end lg:justify-between items-center">
          <p className="hidden lg:block">Date added</p>
          <ClockIcon className="w-8" />
        </div>
      </div>
   );
}

export default HeaderTable;