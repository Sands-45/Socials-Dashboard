import Cards from "./cards";
import DailyStats from "./daily-stats";

const Frame = ({ currentTheme, themes }) => {
  return (
    <div className="absolute w-screen px-[10%] top-[5%]">
      <div className="grid lg:grid-cols-2 w-full">
        <div className="col-span-1">
          <h1 className="text-2xl font-bold my-1 dark:text-white text-gray-900">
            Social Media Dashboard
          </h1>
          <small className="font-semibold text-[15px] text-gray-600 dark:text-gray-400">
            Total Followers: 23,004
          </small>
        </div>
        <hr className="md:hidden my-4" />
        <div className="col-span-1 flex md:my-3 my-3 relative">
          <small className="font-semibold text-[15px] text-gray-600 dark:text-gray-400 md:absolute right-16">
            {themes.current}
          </small>
          <div
            onClick={() => currentTheme(1)}
            className="h-5 bg-[#3ec59c] cursor-pointer w-12 p-[0.14rem] rounded-xl overflow-hidden absolute right-0"
          >
            <div
              className={`${themes.toggle} h-4 w-4 rounded-[50%] dark:bg-[#252b43] bg-white transform  transition duration-500`}
            ></div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-8 w-full">
        <Cards />
      </div>
      <h1 className="text-2xl font-bold my-1 dark:text-white text-gray-900">
        Overview - Today
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-8 w-full">
        <DailyStats />
      </div>
    </div>
  );
};

export default Frame;
