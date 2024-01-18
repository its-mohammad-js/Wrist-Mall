import { Link, useNavigate } from "react-router-dom";
import { routesInfo, scrollUp } from "../../constants";
import logo from "/public/logo/logo-no-background.svg";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto 2xl:max-w-screen-2xl">
      <div id="wrapper" className="w-full h-full bg-EerieBlack-400 px-4 py-2">
        {/* logo */}
        <div
          onClick={() => {
            scrollUp();
            navigate("/WristMall/");
          }}
          className="w-full flex justify-center items-center"
        >
          <img
            src={logo}
            alt="site-logo"
            className="w-24 h-24 cursor-pointer"
          />
        </div>

        {/* route links */}
        <div className="w-full flex flex-wrap items-center justify-center text-Buff-100 text-lg gap-x-4">
          {routesInfo.map((route, index) => (
            <Link onClick={scrollUp} to={route.path} key={index}>
              {route.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
