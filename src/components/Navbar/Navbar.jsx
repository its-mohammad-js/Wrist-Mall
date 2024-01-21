import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { routesInfo, scrollUp } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { SignOutUser } from "../../rudex/auth/authActions";
import { PiSunFill } from "react-icons/pi";
import { BsFillMoonStarsFill, BsWatch } from "react-icons/bs";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // get auth data to display signIn methods button or Profile button on navbar
  const { isAuthenticated } = useSelector((state) => state.authData);
  // get cart data to dispaly length on cart icon in navbar
  const { cartData } = useSelector((state) => state.cartData);
  // redux dispatcher
  const dispatch = useDispatch();
  // rute navigate
  const navigate = useNavigate();
  // root element (for app theme)
  const rootEl = document.documentElement;

  const changeTheme = () => {
    // change theme
    setTimeout(() => {
      if (rootEl.className === "dark") {
        localStorage.setItem("theme", "light");
        rootEl.className = "light";
      } else {
        localStorage.setItem("theme", "dark");
        rootEl.className = "dark";
      }
    }, 200);
  };

  const signOutHandle = () => {
    // navigate to home page
    scrollUp();
    navigate("/WristMall/");
    // call sign out action
    dispatch(SignOutUser());
  };

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <div
        id="wrapper"
        className="w-full flex items-center justify-between px-4 py-3 sm:py-4 sm:px-6 bg-accent-100 dark:bg-accent-300 dark:bg-opacity-10"
      >
        {/* logo  */}
        <div className="dark:text-primary-50 flex items-center font-semibold group">
          <span className="text-3xl sm:text-4xl sm: mx-0.5 group-hover:scale-110 group-hover:rotate-12 transition-all">
            <BsWatch className="" />
          </span>
          <p className="text-xl sm:text-2xl border-b-[1px] border-accent-900 dark:border-accent-700/100 cursor-pointer">
            Wrist
            <span className="text-accent-600 dark:text-accent-500">
              &nbsp;Mall
            </span>
          </p>
        </div>

        {/* main links */}
        <div className="items-center gap-x-8 hidden sm:flex w-full justify-center">
          {routesInfo.map((route, index) => (
            <NavLink to={route.path} key={index}>
              <h2 className="text-xl text-secondary-400 font-semibold dark:text-primary-50 relative group py-1">
                <p>
                  {route.title}
                  {route.title === "Cart" && (
                    <span className="text-sm px-1">(0)</span>
                  )}
                </p>
                <span className="w-1 h-1 bottom-0 left-0 absolute bg-gradient-to-r from-accent-400 to-primary-400 group-hover:w-full transition-all invisible group-hover:visible duration-500"></span>
              </h2>
            </NavLink>
          ))}
        </div>

        {/* sign in/up links and change theme */}
        <div className="hidden sm:flex items-center gap-x-4">
          <button
            onClick={changeTheme}
            className="mx-5 text-3xl text-accent-600 dark:text-primary-50 active:animate-spin"
          >
            <PiSunFill className="dark:hidden" />

            <BsFillMoonStarsFill className="hidden dark:block" />
          </button>

          <Link className="bg-gradient-to-bl from-primary-50 to-accent-400 dark:from-accent-500 dark:to-primary-500 hover:bg-gradient-to-br px-4 py-2 rounded-full border border-primary-50 dark:border-secondary-400 text-xl font-semibold">
            SignUp
          </Link>
        </div>

        {/* menu btn */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={changeTheme}
            className="mx-5 text-xl text-accent-600 dark:text-primary-50 active:animate-spin"
          >
            <PiSunFill className="dark:hidden" />

            <BsFillMoonStarsFill className="hidden dark:block" />
          </button>

          <GiHamburgerMenu className="text-3xl text-accent-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
