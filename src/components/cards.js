import React from "react";
import FBIcon from "../icons/fbIcon";
import TwitterIcon from "../icons/twitterIcon";
import InstaIcon from "../icons/instaIcon";
import YouTubeIcon from "../icons/youTubeIcon";

function Cards() {
  return (
    <>
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[13rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] border-t-4 border-blue-500">
        <div className="flex justify-center mx-auto mt-4">
          <FBIcon />
          <p className="pl-2 text-gray-600 dark:text-gray-400 font-semibold py-1">
            @sands45
          </p>
        </div>
        <h1 className="text-[4rem] font-bold dark:text-white text-gray-900 mx-auto flex justify-center">
          1987
        </h1>
        <p className="-mt-4 mx-auto flex justify-center tracking-[.4rem] text-gray-600 dark:text-gray-400">
          FOLLOWERS
        </p>
        <p className="text-[.8rem] mx-auto flex justify-center text-green-500 font-bold pt-4">
          ▴12 Today
        </p>
      </div>
      {/* End Of facebook ======================== */}
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[13rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] border-t-4 border-[#23a1ec]">
        <div className="flex justify-center mx-auto mt-4">
          <TwitterIcon />
          <p className="pl-2 text-gray-600 dark:text-gray-400 font-semibold py-1">
            @sands45
          </p>
        </div>
        <h1 className="text-[4rem] font-bold dark:text-white text-gray-900 mx-auto flex justify-center">
          1044
        </h1>
        <p className="-mt-4 mx-auto flex justify-center tracking-[.4rem] text-gray-600 dark:text-gray-400">
          FOLLOWERS
        </p>
        <p className="text-[.8rem] mx-auto flex justify-center text-green-500 font-bold pt-4">
          ▴99 Today
        </p>
      </div>
      {/* End Of Twitter ======================== */}
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[13rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] border-t-4 border-[#e15392]">
        <div className="flex justify-center mx-auto mt-4">
          <InstaIcon />
          <p className="pl-2 text-gray-600 dark:text-gray-400 font-semibold py-1">
            @algo_sands45
          </p>
        </div>
        <h1 className="text-[4rem] font-bold dark:text-white text-gray-900 mx-auto flex justify-center">
          11k
        </h1>
        <p className="-mt-4 mx-auto flex justify-center tracking-[.4rem] text-gray-600 dark:text-gray-400">
          FOLLOWERS
        </p>
        <p className="text-[.8rem] mx-auto flex justify-center text-green-500 font-bold pt-4">
          ▴1099 Today
        </p>
      </div>
      {/* End Of Instagram ======================== */}
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[13rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] border-t-4 border-[#c10222]">
        <div className="flex justify-center mx-auto mt-4">
          <YouTubeIcon />
          <p className="pl-2 text-gray-600 dark:text-gray-400 font-semibold py-1">
            Sands_45
          </p>
        </div>
        <h1 className="text-[4rem] font-bold dark:text-white text-gray-900 mx-auto flex justify-center">
          8239
        </h1>
        <p className="-mt-4 mx-auto flex justify-center tracking-[.4rem] text-gray-600 dark:text-gray-400">
          SUBSCRIBERS
        </p>
        <p className="text-[.8rem] mx-auto flex justify-center text-red-500 font-bold pt-4">
          ▾144 Today
        </p>
      </div>
      {/* End Of Youtube ======================== */}
    </>
  );
}

export default Cards;
