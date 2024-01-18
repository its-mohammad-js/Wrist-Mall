import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { routesInfo, scrollUp } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { SignOutUser } from "../../rudex/auth/authActions";
import logo from "/public/logo/logo-no-background.svg";

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
        className="w-full flex items-center justify-between px-4 py-2"
      >
        {/* logo  */}
        <div className="w-16">
          <img src={logo} alt="site logo" />
        </div>

        {/* menu btn */}
        <div className="">
          <GiHamburgerMenu className="text-3xl text-accent-500" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
