import { useEffect, useState } from "react";
import HomePageHero from "../../components/HeroSections/HomePageHero";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import Slider from "react-slick";
import { TbTruckDelivery } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { FaMoneyBillWave, FaStar } from "react-icons/fa";
import Slide from "../../components/Slides/Slide";
import {
  categoriesInformation,
  faqInfo,
  reviewsInfo,
  slidesInformation,
  stampToTime,
} from "../../constants";
import { fetchNews } from "../../rudex/news/newsActions";
import { FaDollarSign, FaPlus, FaQ, FaWallet } from "react-icons/fa6";

function HomePage() {
  //  products state
  const { loading, productsData, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  // fetch data onMount
  useEffect(() => {
    // fetch all products
    dispatch(fetchProducts());
    // fetch all news
    dispatch(fetchNews());
  }, []);

  return (
    <>
      {/* watch swiper */}
      <HomePageHero />
      {/* top products and reviews section */}
      <TopProductsSection productsData={productsData} />
      {/* top slides */}
      {slidesInformation.map((info) => (
        <Slide key={info.id} {...info} />
      ))}
      {/* features section */}
      <div className="mx-auto 2xl:max-w-screen-2xl my-4">
        <h2 className="text-2xl sm:text-3xl px-4 py-2 sm:px-6 sm:py-5 text-secondary-400 dark:text-primary-50">
          <span className="border-b-4 border-accent-700">Why Wrist Mall ?</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-evenly gap-y-4 px-4 py-2 sm:py-4">
          <div className="sm:w-1/4 h-64 group xl:gap-y-3 xl:h-52 rounded-xl flex flex-col items-center justify-evenly sm:justify-center px-3 py-2 bg-primary-100/75 dark:bg-secondary-200">
            <span>
              <FaWallet className="text-5xl text-accent-900 dark:text-accent-400 cursor-pointer" />
            </span>
            <h2 className="xl:text-xl whitespace-nowrap font-semibold relative cursor-pointer text-secondary-400 dark:text-primary-100">
              <span className="absolute bottom-0 w-full h-1 group-hover:h-2/3 transition-all duration-500 z-0 bg-accent-600 dark:bg-accent-800"></span>
              <p className="z-10 relative">Timeless Elegance</p>
            </h2>
            <p className="text-sm xl:px-4 py-2 text-secondary-400 dark:text-primary-300">
              At Wrist Mall, discover an exquisite selection of luxury
              timepieces that exude timeless elegance and sophistication.
            </p>
          </div>
          <div className="sm:w-1/4 h-64 group xl:gap-y-3 xl:h-52 rounded-xl flex flex-col items-center justify-evenly sm:justify-center px-3 py-2 bg-primary-100/75 dark:bg-secondary-200">
            <span>
              <TbTruckDelivery className="text-5xl text-accent-900 dark:text-accent-400 cursor-pointer" />
            </span>
            <h2 className="xl:text-xl whitespace-nowrap font-semibold relative cursor-pointer text-secondary-400 dark:text-primary-100">
              <span className="absolute bottom-0 w-full h-1 group-hover:h-2/3 transition-all duration-500 z-0 bg-accent-600 dark:bg-accent-800"></span>
              <p className="z-10 relative">Unveiling Innovation</p>
            </h2>
            <p className="text-sm xl:px-4 py-2 text-secondary-400 dark:text-primary-300">
              Step into the world of innovation and precision engineering at
              Wrist Mall. Our shop section features.
            </p>
          </div>
          <div className="sm:w-1/4 h-64 group xl:gap-y-3 xl:h-52 rounded-xl flex flex-col items-center justify-evenly sm:justify-center px-3 py-2 bg-primary-100/75 dark:bg-secondary-200">
            <span>
              <FaDollarSign className="text-5xl text-accent-900 dark:text-accent-400 cursor-pointer" />
            </span>
            <h2 className="xl:text-xl whitespace-nowrap font-semibold relative cursor-pointer text-secondary-400 dark:text-primary-100">
              <span className="absolute bottom-0 w-full h-1 group-hover:h-2/3 transition-all duration-500 z-0 bg-accent-600 dark:bg-accent-800"></span>
              <p className="z-10 relative"> Unmatched Luxury</p>
            </h2>
            <p className="text-sm xl:px-4 py-2 text-secondary-400 dark:text-primary-300">
              ndulge in the epitome of luxury as you peruse the opulent
              selection of timepieces at Wrist Mall.
            </p>
          </div>
        </div>
      </div>
      {/* faq section */}
      <FaqSection />
      {/* news section */}
      {/* <NewsSection /> */}
      {/* overview section */}
      {/* {productsData.length && <OverviewSection productsData={productsData} />} */}
    </>
  );
}

export default HomePage;

function TopProductsSection({ productsData }) {
  if (productsData.length)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl mb-8 md:-mb-2">
        {/* tile */}
        <h2 className="text-start text-3xl text-secondary-400 dark:text-primary-50 px-4 sm:px-6 py-4">
          <span className="border-b-4 border-accent-700 dark:border-accent-500/25 cursor-pointer">
            Top Products
          </span>
        </h2>
        <p className="px-5 py-2 sm:hidden dark:text-primary-50">
          ⌚️ Unleash the adventurer in you with the ProDiver Extreme, built to
          withstand the elements while exuding rugged charm and reliable
          performance.
        </p>
        {/* content wrapper */}
        <div
          id="wrapper"
          className="flex flex-col gap-y-8 sm:flex-row items-center justify-between gap-x-4"
        >
          {/* top products */}
          <div className="sm:bg-gradient-to-br from-primary-200 via-accent-500/70 to-primary-600 dark:from-secondary-400 dark:via-accent-800/40 dark:to-secondary-400 w-11/12 px-4 py-2 sm:w-3/4 h-auto sm:h-[420px] rounded-tr-[0%] sm:rounded-tr-[150px] flex flex-col gap-y-5 sm:flex-row items-center sm:justify-center gap-x-4 sm:gap-x-10 overflow-y-auto">
            {productsData.map(
              (product) =>
                product.isOnTop && (
                  <div
                    key={product.id}
                    className="rounded-xl w-full sm:w-1/5 flex flex-col items-center bg-primary-50/50 dark:bg-secondary-300 group"
                  >
                    <div className="h-full w-full sm:py-6 flex items-center justify-center px-4 py-4">
                      <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="w-4/6 sm:h-full sm:w-full object-contain group-hover:scale-110 transition-all"
                      />
                    </div>

                    <div className="w-full h-full rounded-b-xl cursor-pointer px-3 py-2">
                      <h2 className="text-left text-lg line-clamp-1 w-full mt-3 font-semibold dark:text-primary-300">
                        {product.name}
                      </h2>

                      <p className="dark:text-secondary-100/100">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>

          {/* reviews section */}
          <div className="sm:w-1/4 h-full flex items-center justify-center px-2">
            {/* content wrapper */}
            <div className="sm:w-11/12 h-full rounded-3xl bg-gradient-to-br from-primary-200 via-accent-500/70 to-primary-600 dark:from-secondary-400 dark:via-accent-800/20 dark:to-secondary-400 px-6 py-4">
              {/* main title */}
              <h2 className="flex items-center justify-between flex-wrap">
                <p className="text-secondary-400 dark:text-primary-200 text-2xl font-black">
                  REVIEWS
                </p>
                <p className=" dark:text-primary-200 text-lg font-semibold">
                  240+&nbsp;
                  <span className="text-secondary-100 dark:text-primary-400">
                    users
                  </span>
                </p>
              </h2>
              {/* summary caption */}
              <p className="text-xs dark:text-primary-600 hidden xl:inline-block">
                98% of users recommend shopping here because the items sold are
                original and reliable, what our loyal customers say.
              </p>
              {/* reviews */}
              <div className="flex flex-col items-center gap-y-1 px-1 py-2 cursor-pointer rounded-xl">
                {reviewsInfo.map((review, index) => (
                  <div
                    key={index}
                    className="w-full h-1/2 group bg-secondary-100 dark:bg-primary-50 dark:bg-opacity-20 hover:bg-opacity-20 hover:scale-105 transition-all bg-opacity-10 rounded-md px-1 py-0.5"
                  >
                    <div className="h-10 flex items-center justify-between flex-wrap">
                      <p className="dark:text-primary-50 font-semibold text-sm line-clamp-1">
                        {review.userName}
                      </p>
                      <p className="text-sm dark:text-primary-50 flex items-center gap-x-0.5">
                        {review.point}
                        <FaStar className="text-accent-700 group-hover:scale-125 group-hover:rotate-12 transition-all" />
                      </p>
                    </div>

                    <p className="text-xs dark:text-primary-50/70 py-0.5 line-clamp-3 xl:line-clamp-5">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

function FaqSection() {
  const [answerShow, setAnswer] = useState(null);

  const openAnswerModal = (key) => {
    if (answerShow === key) {
      setAnswer(null);
    } else {
      setAnswer(key);
    }
  };

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl my-6">
      <div
        id="wrapper"
        className="flex flex-col md:flex-row items-center justify-between sm:h-[600px] px-4 sm:px-6 gap-x-8"
      >
        <div className="sm:w-1/3 h-full flex flex-col items-start justify-start gap-y-5 py-2">
          <h2 className="text-secondary-400 text-5xl dark:text-primary-50">
            <span className="border-b-4 border-accent-700 dark:border-accent-800">
              FAQ
            </span>
          </h2>
          <p className="text-secondary-200 dark:text-primary-400 text-sm xl:text-xl">
            Answer to some questions you might have. Find answers to questions
            about Wrist Mall, our mission, and the quality of our products.
            &nbsp;
            <span className="hidden xl:inline">
              Learn about placing orders, shipping times, tracking packages, and
              international shipping options. Discover our return and exchange
              policies, including eligibility, time frames, and how to initiate
              a return or exchange.Get information about the watch brands we
              offer, product availability, and details on specific watch models.
            </span>
          </p>
        </div>
        <div className="sm:w-2/3 h-full flex flex-col sm:px-6 py-4 justify-evenly">
          {faqInfo.map(({ question, answer }, index) => (
            <div key={index} className="">
              <h2
                onClick={() => openAnswerModal(index)}
                className="dark:text-primary-50 hover:dark:text-primary-200 transition-all py-2 cursor-pointer rounded-xl text-sm sm:text-xl gap-x-2 font-bold flex items-center justify-between"
              >
                <span>{question}</span>
                <span
                  className={`${
                    answerShow === index && "scale-150 rotate-45"
                  } transition-all`}
                >
                  <FaPlus className="text-accent-700" />
                </span>
              </h2>

              <div
                className={`${
                  answerShow === index
                    ? "visible h-24 opacity-100"
                    : "invisible h-6 opacity-0"
                } xl:px-2 py-1 transition-all duration-500`}
              >
                <p className="dark:text-primary-300 text-xs xl:text-lg">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsSection() {
  const { loading, newsData } = useSelector((state) => state.news);
  // slick.js settings
  const settings = {
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };

  if (loading) return <p>Loading...</p>;

  if (!loading)
    return (
      <div className="container mx-auto 2xl:max-w-screen-2xl">
        <div id="wrapper" className="px-4 py-2 flex flex-col gap-y-4">
          {/* title  */}
          <h2 className="neon-title !text-Buff-300 text-3xl font-extrabold">
            Last News
          </h2>

          {/* news slider */}
          <Slider {...settings}>
            {newsData.map((news) => {
              return (
                <div
                  key={news.id}
                  className="text-EerieBlack-600 w-full h-full px-2"
                >
                  <h3 className="text-center line-clamp-1 text-lg md:text-xl text-white-100">
                    {news.title}
                  </h3>
                  <p className="text-sm text-white-90">{news.description}</p>

                  <div className="w-11/12 mx-auto my-2 md:text-lg flex items-center justify-between py-1">
                    <p className="bg-EerieBlack-400 rounded-md text-white-99 p-1">
                      {news.topic}
                    </p>

                    <p className="text-white-100">
                      date : {stampToTime(news.createdAt.seconds)}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
}

function OverviewSection({ productsData }) {
  // slick.js settings
  const settings = {
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    vertical: true,
    touchMove: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto flex flex-col px-4 py-2 md:py-4 gap-y-4">
      <h2 className="text-4xl font-bold text-EerieBlack-100 neon-title">
        Overview
      </h2>
      <div className="md:flex md:gap-x-8">
        <div className="md:w-1/3" data-aos="fade-right">
          <Slider {...settings} className="h-64 md:h-96 rounded-md">
            {productsData[0].images.map(
              (link, index) =>
                index !== 0 && (
                  <img
                    key={index}
                    src={link}
                    className="w-full h-64 md:h-96 object-cover transition-all"
                  />
                )
            )}
          </Slider>
        </div>
        <div className="md:w-2/3 flex flex-col items-center">
          <p className="text-white-100 mt-4 text-base text-center md:text-start">
            Welcome to Wrist Mall, where time meets style! ⌚️ Step into a world
            of exquisite timepieces that redefine luxury and elegance. Our
            collection boasts a fusion of classic and contemporary designs,
            ensuring there's a watch for every taste.{" "}
            <span className="hidden md:inline-block">
              {" "}
              Whether you're a horology enthusiast or seeking the perfect gift,
              we've got you covered. Our expert staff is dedicated to providing
              personalized service to help you find the perfect timepiece. At
              Wrist Mall, every watch tells a story and becomes a cherished
              companion. Visit us today and discover the art of keeping time in
              style! ⏱️
            </span>
          </p>

          <div className="w-full flex flex-col gap-y-4 md:flex-row items-center justify-between px-4 py-3 md:py-10 md:mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="400"
              className="text-5xl flex flex-col md:flex-row text-Buff-200 items-center gap-x-2 cursor-pointer group"
            >
              <TbTruckDelivery className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Delivery</span>
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-5xl flex flex-col md:flex-row text-Buff-200 items-center gap-x-2 cursor-pointer group"
            >
              <BsWatch className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Unique Products</span>
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="text-5xl flex flex-col md:flex-row text-Buff-200 items-center gap-x-2 cursor-pointer group"
            >
              <FaMoneyBillWave className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Expert Advice </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
