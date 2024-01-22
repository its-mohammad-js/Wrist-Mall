import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useScrollOpacityEffect from "../../hooks/useScrollOpacityEffect";
import { scrollUp } from "../../constants";

function Slide({ backgroundUrl, title, subTitle, bottomTitle, mainText }) {
  const elementRef = useRef(null);
  const { opacity } = useScrollOpacityEffect(elementRef);

  return (
    <div
      data-aos="zoom-in"
      className="xl:w-1/4 transition-all duration-1000 relative custome-scroll"
    >
      {/* background gif */}
      <div className="transition-all">
        <video
          loading="lazy"
          id="targetElement"
          autoPlay
          muted
          loop
          className="w-full h-[600px] object-cover rounded-xl"
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
        className="w-full h-full bg-primary-600 bg-opacity-70 dark:bg-secondary-400/75 backdrop-blur-2xl absolute inset-0 transition-all duration-1000"
      >
        &nbsp;
      </div>

      {/* title & subTitle */}
      <div className="w-full h-full text-white-90 absolute inset-0 flex flex-col justify-between items-center px-6 py-4">
        <span className="text-primary-50 border-b border-accent-400 font-extrabold md:text-lg italic">
          {subTitle}
        </span>
        <h2
          data-aos="fade-up"
          className="text-center text-xl sm:text-3xl xl:text-5xl transition-all bg-gradient-to-r from-primary-50 via-accent-400 to-primary-50 dark:from-primary-50 dark:via-accent-600 dark:to-primary-50 font-black inline-block text-transparent bg-clip-text"
        >
          {title}
        </h2>
        <div className="flex items-center flex-col">
          <strong className="text-lg w-full text-primary-50 text-center">
            {bottomTitle}
          </strong>
          <p className="text-sm text-primary-300 text-center">{mainText}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
