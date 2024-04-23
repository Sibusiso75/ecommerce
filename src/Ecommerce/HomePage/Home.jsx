import React from "react";
import { useGlobalContext } from "../ContextAndReducer/cartContext";
import "../cart.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const {  items, searchTerm, setSearchTerm, addToCart} =
    useGlobalContext();
 let navigate = useNavigate()
  
  function submit(e) {
    e.preventDefault();
  }

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
     
        
      <div className="cartContainer">
        {items.filter((item)=>{
       return item.title.toLowerCase().includes(searchTerm.toLowerCase())
       || item.category.toLowerCase().includes(searchTerm.toLowerCase())
        }).map((item) => {
            return <div key={item.id}>
               <div 
                className="itemsContainer"
               onClick={()=>navigate(`/item/${item.id}`)}
>

        <img
        
          src={item.image}
          alt={item.title}
          style={{ width: "90px", height: "90px" }}
        />
               

        <div className="itemsAndButtons">
          <main> {item.title}</main>
          <main>Price - R{item.price}</main>
      
        </div>
      </div>
      <br />
        <div className="btns" onClick={()=>addToCart(item.id)}  >
        

        <button disabled={item.itemAdded}   style={{ color: "white" }}>
          Add to cart
        </button>
      </div>
     

      
     
            </div>
            
          })}
      </div>

         
    </div>
  );
}

export default Home;