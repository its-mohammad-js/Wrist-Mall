import { Link, useNavigate } from "react-router-dom";
import { routesInfo, scrollUp } from "../../constants";
import { BsWatch } from "react-icons/bs";
import {
  FaBook,
  FaEye,
  FaGithub,
  FaLinkedin,
  FaPerson,
  FaPhone,
  FaTelegram,
  FaVoicemail,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl bg-primary-500 dark:bg-secondary-300 rounded-t-3xl">
      <div
        id="wrapper"
        className="grid grid-rows-4 grid-cols-1 md:grid-rows-4 md:grid-cols-6 px-4 py-2 md:px-10 md:py-8"
      >
        {/* logo */}
        <div className="md:col-span-6 flex items-center justify-center md:justify-start py-2 md:py-0">
          <div className="dark:text-primary-50 flex items-center font-semibold group w-fit">
            <span className="text-4xl sm:text-4xl sm: mx-0.5 duration-500 group-hover:scale-110 group-hover:-translate-y-4 transition-all">
              <BsWatch className="" />
            </span>
            <p className="text-4xl sm:text-2xl border-b-[1px] border-accent-900 dark:border-accent-700/100 cursor-pointer">
              Wrist
              <span className="text-accent-600 dark:text-accent-500">
                &nbsp;Mall
              </span>
            </p>
          </div>
        </div>
        {/* Overview */}
        <div className="row-start-2 md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-2 flex flex-col">
          <h2 className="text-lg xl:text-2xl text-center text-primary-50 flex items-center justify-center md:justify-start md:py-2 gap-x-2 cursor-pointer">
            <FaEye /> Overview
          </h2>
          <h2 className="text-primary-200 text-sm md:text-base md:px-2 md:mr-3">
            Wrist Mall, your ultimate destination for luxury timepieces! Explore
            our carefully curated collection of ⌚️ watches from top brands,
            designed to elevate your style and serve as a timeless accessory.
            Find the perfect watch to suit every occasion, from casual to
            formal,
            <span className="hidden xl:inline"></span>
          </h2>
        </div>
        {/* Explore Links */}
        <div className="row-start-3 md:col-span-2 md:row-span-3 md:col-start-3 md:mt-0 md:col-end-5 md:row-start-2 w-full -mt-4">
          <h2 className="text-lg xl:text-2xl text-center text-black dark:text-primary-50 flex items-center justify-center md:justify-start md:py-2 gap-x-2 cursor-pointer">
            <FaSearch /> EXPLORE
          </h2>
          <ul className="flex flex-col gap-y-2 items-start dark:text-primary-300">
            {routesInfo.map(({ path, title }, index) => (
              <Link
                key={index}
                to={path}
                className="border-b border-secondary-200 dark:border-primary-200"
              >
                {title}
              </Link>
            ))}
          </ul>
        </div>
        {/* contact links */}
        <div className="row-start-4 col-start-1 md:col-span-2 md:row-span-3 md:col-start-5 col-end-7 md:row-start-2">
          <h2 className="text-lg cursor-pointer text-black dark:text-primary-50 xl:text-2xl flex items-center justify-center md:justify-start md:py-2 gap-x-2">
            <FaBook /> Let's Contact
          </h2>
          <ul className="flex flex-col gap-y-3 py-2">
            <li className="text-black dark:text-primary-300 border-b w-fit border-secondary-300 dark:border-primary-200 flex items-center gap-x-1.5">
              <FaLinkedin className="text-lg" /> LindeIn
            </li>
            <li className="text-black dark:text-primary-300 border-b w-fit border-secondary-300 dark:border-primary-200 flex items-center gap-x-1.5">
              <FaTelegram className="text-lg" /> Telegram
            </li>
            <li className="text-black dark:text-primary-300 border-b w-fit border-secondary-300 dark:border-primary-200 flex items-center gap-x-1.5">
              <FaGithub className="text-lg" /> GitHub
            </li>
            <li className="text-black dark:text-primary-300 border-b w-fit border-secondary-300 dark:border-primary-200 flex items-center gap-x-1.5">
              <FaVoicemail className="text-lg" /> Email
            </li>
            <li className="text-black dark:text-primary-300 border-b w-fit border-secondary-300 dark:border-primary-200 flex items-center gap-x-1.5">
              <FaPhone className="text-lg" /> Phone
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
