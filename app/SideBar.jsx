import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import image from "../icons8-spotify-50.png";
import Image from "next/image";
import SignInOrOutButton from "./login/SignInOrOutButton";
import PlayListCompo from "./PlayListCompo";

function SideBar() {
  return (
    <div className="p-4 lg:p-6 bg-black overflow-hidden flex-col text-xs lg:text-sm sm:w-fit lg:w-52 hidden md:flex">
      <div className=" bg-black sticky  top-0 z-10 shadow-md shadow-black">
        <div className="flex items-center space-x-2 ">
          <Image src={image} alt="spotify logo" className="w-7 lg:w-10"></Image>
          <p className="text-white text-lg md:text-2xl font-sans font-medium ">
            Spotify
          </p>
        </div>
        <div className="text-gray-400 pt-8  flex flex-col space-y-3">
          <button className="flex space-x-2 lg:space-x-4 items-center hover:text-white transition-color duration-200">
            <HomeIcon className="w-5 lg:w-7" />
            <p className="font-bold">Home</p>
          </button>
          <button className="flex  space-x-2 lg:space-x-4 items-center hover:text-white transition-color duration-200">
            <MagnifyingGlassIcon className="w-5 lg:w-7" />
            <p className="font-bold">Search</p>
          </button>
          <button className="flex space-x-2 lg:space-x-4 items-center hover:text-white transition-color duration-200">
            <BuildingLibraryIcon className="w-5 lg:w-7" />
            <p className="font-bold">Your Library</p>
          </button>
        </div>
        <div className="text-gray-400 pt-8 pb-4  flex flex-col space-y-3 border-b-[0.1px] border-gray-700">
          <button className="flex space-x-2 lg:space-x-4 items-center hover:text-white transition-color duration-200">
            <PlusIcon className="w-5 lg:w-7" />
            <p className="font-bold">Create Playlist</p>
          </button>
          <button className="flex  space-x-2 lg:space-x-4 items-center hover:text-white transition-color duration-200">
            <HeartIcon className="w-5 lg:w-7" />
            <p className="font-bold">Liked Songs</p>
          </button>
        </div>
      </div>
      <PlayListCompo />
    </div>
  );
}

export default SideBar;
