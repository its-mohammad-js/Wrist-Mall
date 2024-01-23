import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import Slider from "react-slick";
import {
  IoIosArrowDown,
  IoIosArrowDropleft,
  IoIosArrowDropright,
} from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { HiArrowTrendingDown } from "react-icons/hi2";
import WatchSwiperLoader from "../Loaders/WatchSwiperLoader";
import { Link, useNavigate } from "react-router-dom";
import { brandsinfo } from "../../constants";

function HomePageHero() {
  //  products state
  const { loading, productsData } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // filter top products
  const topProucts = productsData.filter((product) => product.isOnTop);

  //   get all products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <WatchSwiperLoader />;

  if (!loading && productsData)
    return (
      <>
        <WatchSwiper topProucts={topProucts} />
      </>
    );
}

function WatchSwiper({ topProucts }) {
  // selected product state (index)
  const [selectedWatch, setSelectedWatch] = useState(0);
  // animation status => loaded || onSwipe
  const [status, setStatus] = useState("loaded");
  const sliderRef = useRef();
  const navigate = useNavigate();

  // slick.js settings
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: appendDotsFunc,
    dots: true,
    arrows: false,
    useTransform: true,
  };

  // change selected watch state on swipe
  function afterSwipe(e) {
    // Preventing unnecessary and unexpected re-rendering
    if (status === "onSwipe") return;

    setStatus("onSwipe");

    setTimeout(() => {
      setSelectedWatch(e);

      setStatus("loaded");
    }, 100);
  }

  // customize pagination controll (dots , arrows) (jsx)
  function appendDotsFunc(e) {
    return (
      <>
        <div className="flex justify-center sm:justify-between items-end mt-2 gap-x-2 absolute -bottom-4 left-0 w-full px-4">
          {/* pagination numbers */}
          <div className="flex items-center justify-center">
            {e.map((dotNum) => (
              <p
                key={dotNum.key}
                className={`${
                  dotNum.props.className === "" &&
                  "!bg-secondary-400 md:!bg-opacity-0"
                } w-5 h-1 bg-accent-500 dark:bg-accent-700 transition-all`}
              >
                <span
                  className={`${
                    dotNum.props.className === ""
                      ? "text-sm -top-3"
                      : "text-lg -top-5"
                  }  list-none text-secondary-400 dark:text-primary-50 relative text-center hidden md:inline`}
                >
                  {dotNum}
                </span>
              </p>
            ))}
          </div>
          {/* arrow buttons */}
          <div className="hidden sm:flex items-end gap-x-2">
            <button onClick={() => sliderRef.current.slickPrev()}>
              <IoIosArrowDropleft className="text-3xl text-secondary-400 dark:text-primary-50" />
            </button>
            <button onClick={() => sliderRef.current.slickNext()}>
              <IoIosArrowDropright className="text-3xl text-secondary-400 dark:text-primary-50" />
            </button>
          </div>
        </div>
      </>
    );
  }

  // just scroll down :)
  const scrollDownHandle = () => {
    window.scrollTo({ top: 400 });
  };

  if (topProucts[selectedWatch])
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl h-[500px]">
        <div
          id="wrapper"
          className="w-full h-full flex justify-center items-center relative sm:px-8"
        >
          {/* description and title (desktop screen) */}
          <div className="text-white w-2/3 hidden md:flex flex-col justify-center items-start h-full">
            <h2 className="text-5xl h-20 text-left w-full transition-all bg-gradient-to-r from-secondary-400 via-accent-400 to-secondary-100 dark:from-primary-50 dark:via-accent-600 dark:to-secondary-400 font-black inline-block text-transparent bg-clip-text">
              <span className="border-b border-secondary-400 dark:border-primary-50 whitespace-nowrap">
                {topProucts[selectedWatch].name}
              </span>
            </h2>

            <p className="line-clamp-4 w-5/6 text-xl my-7 font-semibold text-secondary-400 dark:text-primary-50">
              {topProucts[selectedWatch].description}
            </p>

            <div className="justify-self-end flex flex-col w-full items-start gap-y-4">
              <div className="flex items-center gap-x-4">
                <button className="bg-secondary-400 dark:bg-primary-300 px-4 py-2 rounded-xl text-primary-50 dark:text-secondary-400 font-semibold border border-secondary-400">
                  Order Now!
                </button>
                <button className="font-semibold text-secondary-400 dark:text-primary-50 flex items-center gap-x-0.5 group">
                  Show More ...
                  <MdArrowForwardIos className="text-xl font-semibold group-hover:translate-x-2 transition-all" />
                </button>
              </div>

              <div className="">
                <p className="text-xl text-secondary-400 dark:text-primary-50">
                  Collaborate with the best brands :
                </p>

                <div className="flex items-center w-4/5 gap-x-8 py-6">
                  {brandsinfo.map((brand, index) => {
                    return (
                      <img
                        key={index}
                        src={brand.logoSrc}
                        alt={brand.BrandName}
                        className="w-1/4 h-10 object-contain hover:-translate-y-4 transition-all duration-500 dark:bg-primary-50 dark:bg-opacity-5 rounded-md"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* watch slider */}
          <div className="h-[90%] w-11/12 md:w-1/3 sm:flex sm:flex-col">
            <div className="h-3/5 sm:h-full group bg-gradient-to-br from-primary-50 via-accent-50 to-accent-700 dark:from-secondary-400 dark:via-secondary-300 dark:to-accent-400/40 rounded-t-xl sm:rounded-xl flex items-center justify-center relative">
              {/* gradient ball */}
              <div
                className={`w-5/6 h-5/6 group-hover:scale-105 transition-all absolute bg-gradient-to-br from-accent-700 via-accent-500 to-primary-50 dark:via-secondary-300 dark:to-secondary-400 rounded-full mx-1`}
              ></div>
              {/* glaasy bg */}
              <div className="h-1/2 w-full bg-accent-800 bg-opacity-5 backdrop-blur-sm absolute z-0 self-end rounded-3xl"></div>
              {/* watch slider */}
              <div className="h-5/6 w-full z-20">
                <Slider
                  ref={sliderRef}
                  afterChange={afterSwipe}
                  {...settings}
                  className="h-full w-full z-20 relative py-4"
                >
                  {topProucts.map((product, index) => (
                    <img
                      key={index}
                      src={product.thumbnail}
                      alt={product.name}
                      className="h-48 sm:h-80 w-full object-contain cursor-pointer"
                    />
                  ))}
                </Slider>
              </div>
            </div>

            {/* description (mobile vision) */}
            <div className="sm:hidden flex flex-col items-center rounded-b-xl bg-accent-400 dark:bg-accent-800 py-2">
              <h2 className="text-lg line-clamp-1 font-bold text-center text-secondary-400 dark:text-primary-50 px-4">
                {topProucts[selectedWatch].name}
              </h2>

              <div className="flex items-center gap-x-4 py-2 px-4">
                {topProucts[selectedWatch].summaryDetails.map(
                  (detail, index) => (
                    <p
                      key={index}
                      className="text-xs dark:text-accent-50 font-semibold line-clamp-1"
                    >
                      {detail}
                    </p>
                  )
                )}
              </div>

              <div className="flex w-full justify-between items-center px-4">
                <h4 className="text-secondary-400 dark:text-primary-50 border-b-2 border-accent-700 dark:border-accent-400 font-medium">
                  ${topProucts[selectedWatch].price}
                </h4>
                <p className="text-secondary-400 dark:text-primary-50 border-b-2 border-accent-700 dark:border-accent-400 font-medium">
                  {topProucts[selectedWatch].category}
                </p>
              </div>

              <button className="bg-gradient-to-r from-accent-700 via-accent-600 to-accent-500 dark:text-primary-50 font-bold text-lg w-full px-4 py-2 mt-4 -mb-2 rounded-lg">
                Watch Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HomePageHero;
