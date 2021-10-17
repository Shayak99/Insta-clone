import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";


function Header() {
    const imageurl = "data:image/jpeg;base64,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"
  
    return (
    <div className="shadow-md border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24  cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
          <img src="https://links.papareact.com/jjm" />
        </div>

        {/* middle-search */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-100 block w-full pl-10 sm:text-sm border-gray-300 
                focus:ring-black focus:border-black rounded-lg"
              type="text"
              placeholder="Search...!"
            />
          </div>
        </div> 

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
        <HomeIcon className="navBtn"/>
        <MenuIcon className="h-6 md:hidden cursor-pointer"/>
        <div className="relative navBtn">  
        <PaperAirplaneIcon className=""/>
        <div className="absolute -top-2 -right-3 text-xs w-5 h-5 bg-red-400 
        rounded-full flex items-center justify-center text-white animate-pulse">3</div>
        </div>
        <PlusCircleIcon className="navBtn"/>
        <UserGroupIcon className="navBtn"/>
        <HeartIcon className="navBtn"/>
        <img className="navBtn h-10 rounded-full" src={`${imageurl}`}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
