import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./ContextAndReducer/cartContext";
// import { FaShoppingBag, FaHome, FaTasks } from "react-icons/fa";
// import {useSelector} from "react-redux"
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  // const cartQuantity = useSelector(state=>state.cart.quantity)
  const {  amount, items } = useGlobalContext();
const navigate = useNavigate()
  return (
    <div>
      <header className="cartNav">
        <span className="h3"><b>Ecommerce</b></span>
    
       
        <main className="shoppingCartAmount" onClick={()=>navigate(`/cart`)}>
          <button className="shoppingCart"> 🛒</button>
          <span className={items.length>0?"amount":null}>
            {amount}
          </span>
          {/* <span className={cartQuantity>0?"amount":null}>
            {cartQuantity}
          </span> */}
        </main>
      </header>
    </div>
  );
}

export default Navbar ;