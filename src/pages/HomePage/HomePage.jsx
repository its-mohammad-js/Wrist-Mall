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
  exploreSectionBg,
  faqInfo,
  reviewsInfo,
  slidesInformation,
  stampToTime,
  summarySectionPic,
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
      {/* summary section */}
      <div className="mx-auto 2xl:max-w-screen-2xl">
        <div
          id="wrapper"
          className="flex flex-col md:flex-row gap-x-4 xl:h-full items-center justify-between xl:px-8 xl:py-4 px-4 py-2 gap-y-3"
        >
          {/* summary pic */}
          <div className="hidden md:block w-1/2 xl:w-1/3 h-full">
            <img
              src={summarySectionPic}
              alt="summary-section-pic"
              className="h-full w-full object-cover max-h-80"
            />
          </div>

          <div className="xl:w-2/3 h-full xl:px-6 xl:py-3 my-4 xl:my-0 flex flex-col gap-y-3 items-start justify-between">
            <h2 className="text-xl xl:text-3xl text-secondary-400 dark:text-primary-50 font-semibold">
              A Watch As Unique As You
            </h2>
            <p className=" xl:text-2xl text-secondary-300 dark:text-primary-200">
              with{" "}
              <strong className="text-accent-800 border-b-2 border-secondary-400 dark:border-accent-700">
                10 more years experience in the field
              </strong>
              , witching's invests, designs, and new entry manufactures a range
              of award-wining .
            </p>
            <p className="xl:text-2xl text-secondary-300 dark:text-primary-200">
              Come clinically validated smart health devices and associated
              apps, Withing's provides an the comfort of home, and can help
              anyone master long term health goals{" "}
            </p>

            <button className="px-4 py-2 xl:px-6 xl:py-4 text-lg font-medium bg-accent-800 text-primary-100 hover:bg-accent-600 transition-all">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* explore section */}
      <ExploreSection />
      {/* features section */}
      <div className="mx-auto 2xl:max-w-screen-2xl my-4 xl:my-8">
        <h2 className="text-2xl sm:text-3xl px-4 py-2 sm:px-6 sm:py-5 text-secondary-400 dark:text-primary-50">
          <span className="border-b-4 border-accent-700 dark:border-accent-800">
            Why Wrist Mall ?
          </span>
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
      {/* news section */}
      <NewsSection />
      {/* faq section */}
      <FaqSection />
      {/* bottom slides */}
      <div className="h-screen overflow-y-auto custome-scroll-parent snap-mandatory">
        {slidesInformation.map((info) => (
          <Slide key={info.id} {...info} />
        ))}
      </div>
    </>
  );
}

export default HomePage;

function TopProductsSection({ productsData }) {
  if (productsData.length)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl mb-8 md:mb-0">
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

function ExploreSection() {
  //  products state
  const { productsData } = useSelector((state) => state.products);
  const [selectedProduct, setSelectedProduct] = useState(0);

  const settings = {
    autoplay: true,
    vertical: true,
    touchMove: false,
    autoplaySpeed: 5000,
    arrows: false,
  };

  if (productsData[selectedProduct])
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl mt-8 mb-2">
        <div id="wrapper" className="flex flex-col items-center">
          {/* title */}
          <h2 className="text-3xl xl:text-8xl text-center dark:text-primary-200 leading-[3rem] xl:leading-[8rem] cursor-pointer">
            Explore{" "}
            <span className="border-b-4 border-accent-700">Largest</span> Watch
            &nbsp;
            <p className="text-accent-700">Marketplace</p>
          </h2>

          {/* main content */}
          <div className="xl:h-96 w-full px-4 py-2 flex flex-col md:flex-row items-center justify-start gap-x-4 gap-y-4">
            {/* watch gallery */}
            <div
              data-aos-delay="1000"
              data-aos="fade-up"
              className="grid grid-rows-6 grid-cols-6 gap-x-2 w-full sm:w-1/3 h-full"
            >
              {/* header card */}
              <div className="bg-secondary-300 rounded-xl col-span-4 row-span-3 flex flex-col justify-evenly mx-2 px-4 py-2 hover:-translate-y-2 transition-all duration-500">
                <h4 className="text-primary-50 xl:text-xl font-bold px-2 py-1">
                  Explore watches from the most reputable dealers across world
                </h4>

                <div className="w-full flex items-center justify-between my-2 gap-x-2">
                  <button className="px-2 py-1 bg-secondary-400 rounded-xl w-2/3">
                    <span className="font-bold text-primary-50">Explore</span>
                  </button>
                  <button className="px-2 py-1 bg-primary-50 rounded-xl w-1/3">
                    <span className="">Buy</span>
                  </button>
                </div>
              </div>
              {/* summary title */}
              <div className="col-span-2 row-span-2 dark:bg-primary-50 rounded-xl flex items-center justify-center px-2 py-1">
                <p className="text-center text-xs xl:text-sm">
                  Timeless Elegance: Explore the Finest Watch Collections at
                  Wrist Mall
                </p>
              </div>
              {/* watch primary image */}
              <div className="col-start-1 col-end-5 row-start-4 row-end-7 py-2">
                <Slider
                  {...settings}
                  vertical={false}
                  touchMove={true}
                  className="w-full h-full"
                >
                  {productsData[selectedProduct].images.map(
                    (imgUrl, index) =>
                      index > 0 && (
                        <img
                          key={imgUrl}
                          src={imgUrl}
                          className="w-full xl:h-44 object-cover rounded-xl"
                        />
                      )
                  )}
                </Slider>
              </div>
              {/* main text */}
              <div className="flex items-center dark:bg-black rounded-xl my-2 row-start-3 col-span-2 row-span-2">
                <span className="text-secondary-400 dark:text-primary-50 text-center text-xs xl:text-lg font-semibold cursor-pointer">
                  Over{" "}
                  <strong className="border-b-2 border-b-accent-300">
                    50,000
                  </strong>{" "}
                  costumers !
                </span>
              </div>
              {/* footer text */}
              <div className="bg-gradient-to-br from-accent-500 via-accent-700 to-accent-900 flex items-center justify-center row-span-2 col-span-2 px-2 py-1 rounded-xl">
                <p className="text-xs xl:text-sm text-secondary-300 font-bold cursor-pointer">
                  Unveiling Innovation: Dive into Cutting-Edge Watches at Wrist
                  Mall
                </p>
              </div>
            </div>
            {/* watch pic */}
            <div
              data-aos-delay="1200"
              data-aos="fade-up"
              className="w-full sm:w-1/3 h-full flex items-center justify-center py-2"
            >
              <div className="w-full h-full relative group">
                <div className="absolute inset-0 bg-primary-50 rounded-xl transition-all group-hover:bg-opacity-10 duration-700 group-hover:backdrop-blur-sm group-hover:z-10 flex items-center justify-center">
                  <button className="group-hover:visible group-hover:opacity-100 px-4 py-2 rounded-2xl text-xl hover:text-2xl transition-all duration-700 dark:text-black invisible bg-primary-50 opacity-0">
                    Watch Detail
                  </button>
                </div>
                <Slider
                  afterChange={(e) => setSelectedProduct(e)}
                  {...settings}
                  className="w-full h-full"
                >
                  {productsData.map((product) => (
                    <img
                      key={product.id}
                      src={product.thumbnail}
                      className="w-full h-80 object-contain"
                    />
                  ))}
                </Slider>
              </div>
            </div>
            {/* summary sectrion */}
            <div
              data-aos-delay="1500"
              data-aos="fade-up"
              className="w-full sm:w-1/3 h-full relative group"
            >
              <img
                src={exploreSectionBg}
                alt="explore section background"
                className="w-full h-full object-cover rounded-xl group"
              />

              <div className="absolute inset-0 bg-accent-500 backdrop-blur-sm group-hover:scale-95 group-hover:backdrop-blur-md transition-all duration-700 bg-opacity-25 rounded-xl flex items-center">
                <p className="text-center dark:text-primary-50 text-xl cursor-pointer group-hover:scale-90 duration-700 transition-all font-semibold line-clamp-6">
                  {productsData[selectedProduct].description}
                </p>
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

  if (!loading)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl">
        <div id="wrapper" className="px-4 py-2 flex flex-col gap-y-4">
          {/* title  */}
          <h2 className="text-4xl text-secondary-400 dark:text-primary-50">
            <span className="border-b-4 border-accent-700 dark:border-accent-800">
              Last News
            </span>
          </h2>

          {/* news slider */}
          <Slider autoplay {...settings}>
            {newsData.map((news) => {
              return (
                <div
                  key={news.id}
                  className="w-full h-full px-2 xl:px-4 xl:py-2"
                >
                  <h3 className=" line-clamp-1 text-secondary-400 dark:text-primary-200 text-lg text-white-100">
                    {news.title}
                  </h3>
                  <p className="text-sm text-primary-500">{news.description}</p>

                  <div className="w-11/12 mx-auto my-2 md:text-lg flex items-center justify-between py-1">
                    <p className="dark:bg-accent-900 bg-secondary-400 text-accent-400 dark:text-primary-50 rounded-md text-white-99 p-1">
                      {news.topic}
                    </p>

                    <p className="text-white-100 text-secondary-400 dark:text-primary-500">
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
