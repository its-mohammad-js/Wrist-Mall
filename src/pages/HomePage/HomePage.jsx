import { useEffect } from "react";
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
  reviewsInfo,
  slidesInformation,
  stampToTime,
} from "../../constants";
import { fetchNews } from "../../rudex/news/newsActions";

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
      {/* categories section */}
      <TopProductsSection productsData={productsData} />
      {/* top slides */}
      {/* {slidesInformation.map((info) => (
        <Slide key={info.id} {...info} />
      ))} */}
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
      <div className="mx-auto 2xl:max-w-screen-2xl">
        {/* tile */}
        <h2 className="text-start text-3xl text-secondary-400 dark:text-primary-50 px-6 py-4">
          <span className="border-b-4 border-accent-700 dark:border-accent-500/25 cursor-pointer">
            Top Products
          </span>
        </h2>
        {/* content wrapper */}
        <div
          id="wrapper"
          className="flex flex-col gap-y-8 sm:flex-row items-center justify-between gap-x-4 sm:h-[410px]"
        >
          {/* top products */}
          <div className="bg-gradient-to-br from-primary-200 via-accent-500/70 to-primary-600 dark:from-secondary-400 dark:via-accent-800/40 dark:to-secondary-400 w-11/12 px-4 py-2 sm:w-3/4 h-full rounded-tr-[30%] sm:rounded-tr-[150px] flex items-center sm:justify-center gap-x-4 sm:gap-x-10 overflow-y-auto">
            {productsData.map(
              (product) =>
                product.isOnTop && (
                  <div
                    key={product.id}
                    className="rounded-xl w-20 sm:w-48 sm:h-2/3 flex flex-col items-center bg-primary-50/50 dark:bg-secondary-400/75 group"
                  >
                    <div className="h-full w-full py-6">
                      <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="h-full w-full object-contain group-hover:scale-110 transition-all"
                      />
                    </div>

                    <div className="w-full h-full rounded-b-xl cursor-pointer px-3">
                      <h2 className="text-left line-clamp-1 w-full mt-3 font-semibold dark:text-primary-300">
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
              <h2 className="flex items-center justify-between">
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
              <p className="text-sm dark:text-primary-600">
                98% of users recommend shopping here because the items sold are
                original and reliable, what our loyal customers say.
              </p>
              {/* reviews */}
              <div className="flex flex-col items-center gap-y-3 py-2 cursor-pointer">
                {reviewsInfo.map((review, index) => (
                  <div
                    key={index}
                    className="w-full group bg-secondary-100 dark:bg-primary-50 dark:bg-opacity-20 hover:bg-opacity-20 hover:scale-105 transition-all bg-opacity-10 rounded-md px-1 py-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="dark:text-primary-50 font-semibold">
                        {review.userName}
                      </p>
                      <p className="text-sm dark:text-primary-50 flex items-center gap-x-0.5">
                        {review.point}
                        <FaStar className="text-accent-700 group-hover:scale-125 group-hover:rotate-12 transition-all" />
                      </p>
                    </div>

                    <p className="text-xs dark:text-primary-50/70 py-0.5">
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
