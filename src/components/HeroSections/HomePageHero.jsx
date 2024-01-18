import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import Slider from "react-slick";
import {
  IoIosArrowDown,
  IoIosArrowDropleft,
  IoIosArrowDropright,
} from "react-icons/io";
import WatchSwiperLoader from "../Loaders/WatchSwiperLoader";
import { Link, useNavigate } from "react-router-dom";

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: appendDotsFunc,
    dots: true,
    arrows: false,
    useTransform: true,
    // fade : true
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

  // customize pagination dots (jsx)
  function appendDotsFunc(e) {
    return (
      <>
        <div className="flex justify-center mt-2 gap-x-2 md:absolute right-10 -bottom-5">
          {e.map((p) => (
            <p
              key={p.key}
              className={`${
                p.props.className === "" &&
                "!bg-EerieBlack-100 md:!bg-opacity-0"
              } w-5 h-1 bg-Buff-400 transition-all`}
            >
              <span
                className={`${
                  p.props.className === "" ? "text-sm -top-3" : "text-lg -top-5"
                }  list-none text-white-100 relative text-center hidden md:inline`}
              >
                {p}
              </span>
            </p>
          ))}
        </div>
      </>
    );
  }

  // just scroll down :)
  const scrollDownHandle = () => {
    window.scrollTo({ top: 400 });
    // console.log(window.scrollY);
  };

  return (
    <div className="w-screen h-screen relative sm:container sm:mx-auto sm:h-[95vh] 2xl:max-w-screen-2xl flex items-center justify-center md:justify-between">
      {/* background video  */}
      <video
        autoPlay
        loop
        muted
        className="h-screen w-screen md:h-full md:rounded-bl-md object-cover absolute z-10 md:z-0 md:w-full"
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/gifs%2Fhero%20bg.webm?alt=media&token=e9695373-b9d7-4786-8d44-5891095b0734" />
      </video>

      {/* product card */}
      <div
        className={`${
          status === "onSwipe"
            ? "bg-opacity-60 backdrop-blur-0"
            : "bg-opacity-60 backdrop-blur-sm"
        } bg-white-90 relative w-11/12 md:w-3/5 md:h-full md:flex items-center justify-center px-4 py-2 z-20 rounded-md md:bg-opacity-0 md:px-0 md:py-0 md:backdrop-blur-0`}
      >
        {topProucts[selectedWatch] && (
          <div>
            {/* image slider */}
            <div className="relative">
              <Slider
                ref={sliderRef}
                {...settings}
                afterChange={(e) => afterSwipe(e)}
                className="bg-Buff-100 md:bg-opacity-0 backdrop-blur-sm bg-opacity-25 rounded-md md:max-w-lg px-4 py-2 md:mt-40"
              >
                {topProucts.map((product) => (
                  <img
                    key={product.id}
                    src={product.thumbnail}
                    alt={product.name}
                    className={`w-44 h-44 object-contain md:w-1/4 md:h-[400px] xl:h-[600px] md:mt-20`}
                  />
                ))}
              </Slider>
              {/* arrow buttons */}
              <div className="hidden -bottom-6 absolute w-20 md:flex items-center justify-between">
                <button
                  disabled={status === "onSwipe"}
                  className="bg-Buff-500 bg-opacity-5 rounded-full "
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <IoIosArrowDropleft className="text-white-100 text-3xl disabled:cursor-pointer" />
                </button>
                <button
                  disabled={status === "onSwipe"}
                  className="bg-Buff-500 bg-opacity-5 rounded-full "
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <IoIosArrowDropright className="text-white-100 text-3xl disabled:cursor-pointer" />
                </button>
              </div>
            </div>
            {/* description  */}
            <div className="w-full text-center py-4 px-2 flex flex-col justify-center items-center gap-y-2 md:invisible">
              {/* title */}
              <h2
                className={`${
                  status !== "onSwipe" && "animate-typing"
                } text-lg line-clamp-1 text-center overflow-hidden whitespace-nowrap`}
              >
                {topProucts[selectedWatch].name}
              </h2>
              {/* price */}
              <p
                className={`${
                  status === "onSwipe" && "animate-pulse w-20 h-8"
                } bg-black text-white-100 px-2 py-1 rounded-full transition-all`}
              >
                {status === "loaded" && `$${topProucts[selectedWatch].price}`}
              </p>
            </div>
            {/* card buttons */}
            <div className="flex items-center justify-center md:justify-between gap-x-2 md:invisible">
              <Link
                to={`/WristMall/SingleWatch/${topProucts[selectedWatch].id}`}
                className="bg-black text-white-100 px-4 py-2 rounded-md flex-1 text-center"
              >
                Show Detail
              </Link>
            </div>
          </div>
        )}
        {/* scroll button */}
        <button
          onClick={scrollDownHandle}
          className="text-Buff-300 absolute -bottom-10 animate-upDown w-10/12 z-10 text-4xl animate-puls md:hidden flex items-center justify-center"
        >
          <IoIosArrowDown />
        </button>
      </div>

      {/* details section (desktop vision) */}
      {topProucts[selectedWatch] && (
        <div className="w-full h-full hidden md:flex absolute bg-EerieBlack-600 bg-opacity-25 backdrop-blur-lg items-center justify-end px-16 xl:px-20">
          {/* product detail */}
          <div className="w-56 xl:w-72 mt-28">
            {/* name */}
            <h2
              className={`${
                status !== "onSwipe" && "animate-typing"
              } text-white-100 neon-title leading-10 max-h-40 xl:max-h-72 max-w-[200px] xl:max-w-sm text-left transition-all overflow-hidden whitespace- text-3xl xl:text-5xl font-bold my-2`}
            >
              {topProucts[selectedWatch].name}
            </h2>
            <div className="w-full flex items-center justify-between">
              {/* categroy */}
              <span
                className={`bg-white-100 bg-opacity-75 text-xs px-2 py-1 rounded-md`}
              >
                {topProucts[selectedWatch].category}
              </span>
              {/* price */}
              <p className="bg-Buff-100 text-sm px-2 py-0.5 rounded-md">
                ${topProucts[selectedWatch].price}
              </p>
            </div>
            {/* detail btn */}
            <button
              onClick={() =>
                navigate(
                  `/WristMall/SingleWatch/${topProucts[selectedWatch].id}`
                )
              }
              className="bg-black text-white-100 rounded-md hover:bg-white-100 hover:text-EerieBlack-600 transition-all !duration-300 px-4 py-2 mt-4 w-full"
            >
              Show Detail
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePageHero;
