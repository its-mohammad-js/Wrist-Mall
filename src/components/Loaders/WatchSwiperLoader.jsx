function WatchSwiperLoader() {
  return (
    <div className="w-screen animate-pulse h-screen relative sm:container sm:mx-auto sm:h-[95vh] 2xl:max-w-screen-2xl flex items-center justify-center md:justify-between">
      {/* background video  */}
      <div className="h-screen w-screen md:h-full md:rounded-bl-md object-cover absolute z-10 md:z-0 md:w-full bg-Buff-300"></div>

      {/* product card */}
      <div
        className={`bg-white-90 relative w-11/12 md:w-3/5 md:h-full md:flex items-center justify-center px-4 py-2 z-20 rounded-md md:px-0 md:py-0 md:backdrop-blur-0`}
      >
        <div>
          {/* image slider */}
          <div className="relative">
            <div className="bg-white-100 md:bg-opacity-0 rounded-md md:w-full px-4 py-2 md:mt-40">
              <div
                className={`w-full h-44  md:h-[400px] xl:h-[600px] md:mt-20 flex items-center justify-center`}
              >
                <p className="animate-infinityType whitespace-nowrap line-clamp-1 text-center">
                  Product Loading...
                </p>
              </div>
            </div>
          </div>
          {/* description  */}
          <div className="w-full text-center py-4 px-2 flex flex-col justify-center items-center gap-y-2 md:invisible">
            {/* title */}
            <h2
              className={`text-lg line-clamp-1 text-center overflow-hidden whitespace-nowrap`}
            >
              Watch Name
            </h2>
            {/* price */}
            <p
              className={`bg-black text-white-100 px-2 py-1 rounded-full transition-all`}
            >
              Price
            </p>
          </div>
          {/* card buttons */}
          <div className="flex items-center justify-center md:justify-between gap-x-2 md:invisible">
            <p className="bg-black text-white-100 px-4 py-2 rounded-md flex-1 text-center">
              &nbsp;
            </p>
          </div>
        </div>
      </div>

      {/* details section (desktop vision) */}
      <div className="w-full h-full hidden md:flex absolute bg-EerieBlack-600 bg-opacity-25 backdrop-blur-lg items-center justify-end px-16 xl:px-20">
        {/* product detail */}
        <div className="w-56 xl:w-72 mt-28">
          {/* name */}
          <h2
            className={`text-white-100 neon-title leading-10 max-h-40 xl:max-h-72 max-w-[200px] xl:max-w-sm text-left transition-all overflow-hidden whitespace- text-3xl xl:text-5xl font-bold my-2`}
          >
            name
          </h2>
          <div className="w-full flex items-center justify-between">
            {/* categroy */}
            <span
              className={`bg-white-100 bg-opacity-75 text-xs px-2 py-1 rounded-md`}
            >
              category
            </span>
            {/* price */}
            <p className="bg-Buff-100 text-sm px-2 py-0.5 rounded-md">price</p>
          </div>
          {/* detail btn */}
          <button className="bg-black text-white-100 rounded-md hover:bg-white-100 hover:text-EerieBlack-600 transition-all !duration-300 px-4 py-2 mt-4 w-full">
            Show Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchSwiperLoader;
