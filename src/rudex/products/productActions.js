import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./productTypes";
import { db } from "../../config/firebase";
import toast from "react-hot-toast";

const productsCollectionRef = collection(db, "Products");

// get all products from data base
export function fetchProducts() {
  return (dispatch) => {
    // async get function
    const getAllProducts = async () => {
      // dispatch request
      dispatch({ type: FETCH_PRODUCTS_REQUEST });

      // get all products from firebase
      const data = await getDocs(productsCollectionRef);
      // merge products data with id
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // disptach success
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: filteredData });
      // dispatch error
      if (!data.docs.length) {
        // dispatch failure
        toast.error("Network Error");
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: "NetWork Error" });
      }
    };
    // call fetch function
    getAllProducts();
  };
}
