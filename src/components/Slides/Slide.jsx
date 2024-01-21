import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useScrollOpacityEffect from "../../hooks/useScrollOpacityEffect";
import { scrollUp } from "../../constants";

function Slide({ backgroundUrl, title, subTitle }) {
  const elementRef = useRef(null);
  const { opacity } = useScrollOpacityEffect(elementRef);

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl transition-all relative">
      {/* background gif */}
      <div data-aos="zoom-in-up" className="transition-all">
        <video
          loading="lazy"
          id="targetElement"
          autoPlay
          muted
          loop
          className="w-full h-[400px] md:h-[80vh] 2xl:max-h-[600px] object-cover"
        >
          <source src={backgroundUrl} />
        </video>
      </div>

      {/* background glassEffect */}
      <div
        ref={elementRef}
        style={{
          opacity: opacity,
        }}
        className="w-full h-full bg-primary-600 bg-opacity-70 dark:bg-secondary-400/75 backdrop-blur-md absolute inset-0 transition-all duration-1000"
      >
        &nbsp;
      </div>

      {/* title & subTitle */}
      <div className="w-full h-full text-white-90 absolute inset-0 flex flex-col justify-center items-center gap-y-6">
        <span
          data-aos="fade-right"
          className="text-primary-50 border-b border-accent-400 font-extrabold md:text-2xl"
        >
          {subTitle}
        </span>
        <h2
          data-aos="fade-left"
          className="text-left text-xl sm:text-5xl transition-all bg-gradient-to-r from-primary-50 via-accent-400 to-primary-50 dark:from-primary-50 dark:via-accent-600 dark:to-primary-50 font-black inline-block text-transparent bg-clip-text"
        >
          {title}
        </h2>

        <Link
          onClick={scrollUp}
          to="/WristMall/Shop"
          data-aos="zoom-in"
          className="bg-accent-50 bg-opacity-20 backdrop-blur-md rounded-md text-white-100-500 px-4 py-2 md:text-2xl"
        >
          Learn More...
        </Link>
      </div>
    </div>
  );
}

export default Slide;
