import React from "react";
import FBIcon from "../icons/fbIcon";
import TwitterIcon from "../icons/twitterIcon";
import InstaIcon from "../icons/instaIcon";
import YouTubeIcon from "../icons/youTubeIcon";

const DailyStats = () => {
  return (
    <>
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[7rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] px-3">
        <div className="flex mt-4 relative">
          <p className="text-gray-600 dark:text-gray-400 font-semibold py-1">
            Page Views
          </p>
          <div className="absolute right-0">
            <FBIcon />
          </div>
        </div>
        <div className="flex mt-4 relative">
          <p className="text-2xl font-bold my-1 dark:text-white text-gray-900">
            87
          </p>
          <p className="text-[.8rem] absolute right-0 text-green-500 font-bold pt-4">
            ▴3%
          </p>
        </div>
      </div>
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[7rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] px-3">
        <div className="flex mt-4 relative">
          <p className="text-gray-600 dark:text-gray-400 font-semibold py-1">
            Likes
          </p>
          <div className="absolute right-0">
            <FBIcon />
          </div>
        </div>
        <div className="flex mt-4 relative">
          <p className="text-2xl font-bold my-1 dark:text-white text-gray-900">
            52
          </p>
          <p className="text-[.8rem] absolute right-0 text-red-500 font-bold pt-4">
            ▾2%
          </p>
        </div>
      </div>
      {/*======End Of Facebook==========*/}
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[7rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] px-3">
        <div className="flex mt-4 relative">
          <p className="text-gray-600 dark:text-gray-400 font-semibold py-1">
            Likes
          </p>
          <div className="absolute right-0">
            <InstaIcon />
          </div>
        </div>
        <div className="flex mt-4 relative">
          <p className="text-2xl font-bold my-1 dark:text-white text-gray-900">
            5462
          </p>
          <p className="text-[.8rem] absolute right-0 text-green-500 font-bold pt-4">
            ▴225%
          </p>
        </div>
      </div>
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[7rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] px-3">
        <div className="flex mt-4 relative">
          <p className="text-gray-600 dark:text-gray-400 font-semibold py-1">
            Profile Views
          </p>
          <div className="absolute right-0">
            <InstaIcon />
          </div>
        </div>
        <div className="flex mt-4 relative">
          <p className="text-2xl font-bold my-1 dark:text-white text-gray-900">
            52k
          </p>
          <p className="text-[.8rem] absolute right-0 text-green-500 font-bold pt-4">
            ▴1375%
          </p>
        </div>
      </div>
      {/*======End Of Instagram==========*/}
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[7rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] px-3">
        <div className="flex mt-4 relative">
          <p className="text-gray-600 dark:text-gray-400 font-semibold py-1">
            Retweets
          </p>
          <div className="absolute right-0">
            <TwitterIcon />
          </div>
        </div>
        <div className="flex mt-4 relative">
          <p className="text-2xl font-bold my-1 dark:text-white text-gray-900">
            117
          </p>
          <p className="text-[.8rem] absolute right-0 text-green-500 font-bold pt-4">
            ▴303%
          </p>
        </div>
      </div>
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[7rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] px-3">
        <div className="flex mt-4 relative">
          <p className="text-gray-600 dark:text-gray-400 font-semibold py-1">
            Likes
          </p>
          <div className="absolute right-0">
            <TwitterIcon />
          </div>
        </div>
        <div className="flex mt-4 relative">
          <p className="text-2xl font-bold my-1 dark:text-white text-gray-900">
            507
          </p>
          <p className="text-[.8rem] absolute right-0 text-green-500 font-bold pt-4">
            ▴553%
          </p>
        </div>
      </div>
      {/*======End Of Twitter==========*/}
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[7rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] px-3">
        <div className="flex mt-4 relative">
          <p className="text-gray-600 dark:text-gray-400 font-semibold py-1">
            Likes
          </p>
          <div className="absolute right-0">
            <YouTubeIcon />
          </div>
        </div>
        <div className="flex mt-4 relative">
          <p className="text-2xl font-bold my-1 dark:text-white text-gray-900">
            107
          </p>
          <p className="text-[.8rem] absolute right-0 text-red-500 font-bold pt-4">
            ▴19%
          </p>
        </div>
      </div>
      <div className="cursor-pointer transition duration-500 ease-in-out hover:bg-[#e1e2f1] dark:hover:bg-[#323b56] col-span-1 h-[7rem] w-full bg-[#f0f3fa] rounded-md dark:bg-[#252b43] px-3">
        <div className="flex mt-4 relative">
          <p className="text-gray-600 dark:text-gray-400 font-semibold py-1">
            Total Views
          </p>
          <div className="absolute right-0">
            <YouTubeIcon />
          </div>
        </div>
        <div className="flex mt-4 relative">
          <p className="text-2xl font-bold my-1 dark:text-white text-gray-900">
            1407
          </p>
          <p className="text-[.8rem] absolute right-0 text-red-500 font-bold pt-4">
            ▴12%
          </p>
        </div>
      </div>
      {/*======End Of Youtube==========*/}
    </>
  );
};

export default DailyStats;
