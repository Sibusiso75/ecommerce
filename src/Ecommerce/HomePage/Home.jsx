import React from "react";
import { useGlobalContext } from "../ContextAndReducer/cartContext";
import "../cart.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
// import { addToCart } from "../redux/slices/cartSlice";
// import {useDispatch,useSelector}from "react-redux"

function Home() {
  const {  items, searchTerm, setSearchTerm, addToCart} =
    useGlobalContext();
 let navigate = useNavigate()
//  const dispatch = useDispatch()
  
  function submit(e) {
    e.preventDefault();
  }
  // function handleAddToCart(){
  //   dispatch(addToCart())
  // }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search..."
          className="inputSearch"
        />
      </form>
     
        <div className="container">

        {items.filter((item)=>{
          return item.title.toLowerCase().includes(searchTerm.toLowerCase())
          || item.category.toLowerCase().includes(searchTerm.toLowerCase())
        }).map((item) => {
          return <div key={item.id} className="itemsContainer">
              
            <div onClick={()=>navigate(`/item/${item.id}`)}>

        <img
        
        src={item.image}
        alt={item.title}
        style={{ width: "90px", height: "90px" }}
        />
               

        <div className="itemsAndButtons">
          <main> {item.title}</main>
      
     
        </div>
      </div>
          <main style={{textAlign:"left"}}>Price - R{item.price}</main>
      <br />
        <button onClick={()=>addToCart(item.id)} disabled={item.itemAdded}  style={{color:"white",padding:"10px",borderRadius:"10px",width:"200px",background:"black"}}>
          Add to cart
        </button>

      
        

      
     
            </div>
            
          })}
          </div>
      </div>

         
  );
}

export default Home;