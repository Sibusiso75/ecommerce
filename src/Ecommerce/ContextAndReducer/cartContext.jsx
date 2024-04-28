import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import cartItems from "./Product"
import { toast } from "react-toastify"
import reducer from "./reducer"

const initialState = {
  items:cartItems,
  total: 0,
  amount: 0,
};
const AppContext = createContext();
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");
  function remove(id) {
    dispatch({ type: "REMOVE", payload: id });
  }
  
  function addToCart(id) {
    dispatch({ type: "ADD_TO_CART", payload: id })
    toast.success("Item has been added to the cart")
  }
 


  function increase(id) {
    dispatch({ type: "INCREASE", payload: id });

  }
  function decrease(id) {
    dispatch({ type: "DECREASE", payload: id });

  }





  useEffect(() => {
    dispatch({ type: "TOTALS" })
  }, [state.items])


  // async function fetchData() {
  //   try {
  //     dispatch({ type: "LOADING" });
  //     const response = await fetch(url);
  //     const items = await response.json();
  //     dispatch({ type: "DISPAY_ITEMS", payload: items });
  //     console.log(items);

  //   } catch (error) {
  //     console.log(error)

  //   }

  // }
  // useEffect(() => {

  //   fetchData();
  // }, []);


  



  return (
    <AppContext.Provider
      value={{
        ...state,


        remove,
        increase,
        decrease,
        addToCart,

        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };