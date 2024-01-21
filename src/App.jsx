import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import { Provider } from "react-redux";
import store from "./rudex/store";
import toast, { Toaster } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ShopPage from "./pages/ShopPage/ShopPage";
import CartPage from "./pages/CartPage/CartPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  // aos library init
  useEffect(() => {
    Aos.init();
  }, []);

  // check user system theme
  useEffect(() => {
    // user system theme
    const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // root element (html)
    const rootEl = document.documentElement;
    // last used theme
    const localTheme = localStorage.getItem("theme");
    // change theme on mount
    if (localTheme) {
      rootEl.className = localTheme;
    } else {
      // change app theme to user system theme
      userTheme ? (rootEl.className = "dark") : (rootEl.className = "light");
    }
  }, []);

  return (
    <Provider store={store}>
      <AppLayout>
        <Toaster />
        <Routes>
          <Route path="/Wrist-Mall/" element={<HomePage />} />
          {/* <Route path="/Wrist-Mall/Shop" element={<ShopPage />} /> */}
          {/* <Route path="/Wrist-Mall/SignUp" element={<SignUpPage />} /> */}
          {/* <Route path="/Wrist-Mall/SignIn" element={<SignInPage />} /> */}
          {/* <Route
            path="/Wrist-Mall/SingleWatch/:id"
            element={<SingleProductPage />}
          /> */}
          {/* <Route path="/Wrist-Mall/Cart" element={<CartPage />} /> */}
          {/* <Route path="/Wrist-Mall/AboutMe" element={<AboutMePage />} /> */}
        </Routes>
      </AppLayout>
    </Provider>
  );
}

export default App;
