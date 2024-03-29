import { useEffect, useReducer, useState } from "react";
import ShopHeroSection from "../../components/HeroSections/ShopHeroSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import { supportedProductFilters } from "../../constants";
import SingleWatchCard from "../../components/SingleWatchCard/SingleWatchCard";
import LoaderSpinner from "../../components/Loaders/LoaderSpinner";
import { MdOutlinePayment } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

function ShopPage() {
  //  products state
  const { loading, productsData } = useSelector((state) => state.products);
  // cart state
  // const { loading, cartData } = useSelector((state) => state.products);
  // redux dispatcher
  const dispatch = useDispatch();
  // filter state
  const [selectedCategory, setSelectedCategory] = useState("All");
  // filtered products state
  const [filteredProducts, filterDispatcher] = useReducer(
    filterPorductsReducer,
    []
  );

  //   fetch all products
  useEffect(() => {
    // fetch all products
    dispatch(fetchProducts());
  }, []);

  // intilize filtered products
  useEffect(() => {
    filterDispatcher({ category: "All" });
  }, [productsData]);

  // change filter handler
  const changeCategoryHandler = (category) => {
    // change category on ui
    setSelectedCategory(category);
    // change filtered products
    filterDispatcher({ category });
  };

  // filter category reducer
  function filterPorductsReducer(state, action) {
    if (action.category === "All") return productsData;
    else {
      return productsData.filter(
        (product) => product.category === action.category
      );
    }
  }

  return (
    <>
      {/* hero section */}
      <ShopHeroSection />
      {/* products filter section */}
      <FilterProductsSection
        selectedCategory={selectedCategory}
        onChangeCategory={changeCategoryHandler}
      />
      {/* products card section */}
      <ProductsSection loading={loading} productsData={filteredProducts} />
      {/* our services */}
      <Services />
    </>
  );
}

export default ShopPage;

function FilterProductsSection({ selectedCategory, onChangeCategory }) {
  return (
    <div className="container mx-auto 2xl:max-w-screen-2xl">
      <div
        id="wrapper"
        className="w-full h-full px-3 py-2 md:py-3 overflow-auto flex items-center gap-x-2 md:justify-center"
      >
        {/* all categories button */}
        <button
          onClick={() => onChangeCategory("All")}
          className={`${
            selectedCategory === "All"
              ? "text-EerieBlack-600 ring-2 ring-Buff-300"
              : "text-Buff-300 bg-none border-2 border-Buff-300"
          }  px-3 py-1.5 text-sm md:text-base rounded-xl relative`}
        >
          <span
            className={`${
              selectedCategory === "All"
                ? "bg-Buff-300 w-full h-full"
                : "bg-none w-0 h-0 invisible"
            } absolute left-0 bottom-0 rounded-xl -z-10 duration-1000 `}
          ></span>
          All
        </button>
        {/* categories button */}
        {supportedProductFilters.categories.map((c, index) => (
          <button
            onClick={() => onChangeCategory(c)}
            key={index}
            className={`${
              selectedCategory === c
                ? "text-EerieBlack-600 ring-2 ring-Buff-300"
                : "text-Buff-300 bg-none border-2 border-Buff-300"
            } text-Buff-300 px-3 py-1.5 text-sm md:text-base rounded-xl whitespace-nowrap relative`}
          >
            <span
              className={`${
                selectedCategory === c
                  ? "bg-Buff-300 w-full h-full"
                  : "bg-none w-0 h-0 invisible"
              } absolute left-0 bottom-0 rounded-xl -z-10 duration-1000`}
            ></span>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductsSection({ loading, productsData }) {
  if (!productsData.length && !loading)
    return (
      <p className="h-screen flex items-center justify-center text-center text-lg font-bold text-Buff-300">
        There are no products with this specification ...
      </p>
    );

  if (loading) return <LoaderSpinner />;

  if (!loading)
    return (
      <div className="container mx-auto 2xl:max-w-screen-2xl min-h-screen flex flex-row flex-wrap gap-x-1 justify-center sm:justify-evenly items-start gap-y-4 py-4">
        {productsData.map((product) => (
          <SingleWatchCard key={product.id} {...product} />
        ))}
      </div>
    );
}

function Services() {
  return (
    <div className="container mx-auto 2xl:max-w-screen-2xl h-[250px] my-4">
      <div id="wrapper" className="flex flex-col items-center">
        <span className="text-Buff-400 font-thin text-sm">Services</span>
        <h2 className="text-4xl text-center text-Buff-100">
          When You Buy <br /> Online
        </h2>
        <hr className="text-Buff-500 w-1/4 my-3" />

        <div className="flex justify-center items-center flex-wrap gap-x-10 w-full px-2 py-1">
          <span className="text-Buff-300 text-4xl flex flex-col items-center justify-center">
            <MdOutlinePayment />
            <span className="text-sm line-clamp-1">Secure payment</span>
          </span>
          <span className="text-Buff-300 text-4xl flex flex-col items-center justify-center">
            <FaShippingFast />
            <span className="text-sm line-clamp-1">Free shipping</span>
          </span>
          <span className="text-Buff-300 text-4xl flex flex-col items-center justify-center">
            <GiReturnArrow />
            <span className="text-sm line-clamp-1">Returns</span>
          </span>
        </div>
      </div>
    </div>
  );
}
