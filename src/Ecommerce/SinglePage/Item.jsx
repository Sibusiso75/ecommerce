import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGlobalContext } from "../ContextAndReducer/cartContext"
import  "../cart.css"
import Navbar from "../Navbar"

function Item(){
    const {id} = useParams()
    let navigate = useNavigate()
    const {items, addToCart} = useGlobalContext()
   
      
    return <div>
      <button onClick={()=>navigate("/")}
      style={{ margin:"10px",background:"green", color:"white", padding:"5px"}}
      >
        Back Home
      </button>
        <div >
        {
            items.filter((item)=>{
             return item.id === parseInt(id)
            }).map((item)=>{
                return <div className="cartContainer" key={item.id}
               
                >
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "90px", height: "90px" }}
        />

        <div className="itemsAndButtons">
          <p> {item.title},           {item.details}
</p>
          <p>R{item.price}</p>
        </div>
    
        
          <br />
        <button disabled={item.itemAdded}  onClick={()=>addToCart(item.id)} style={{marginLeft:"2%",color:"white",padding:"10px", borderRadius:"10px",width:"fit-content",background:"black"}}>
          Add to cart
        </button>
      <br />

                </div>
            })
        }
        
        </div>
       

    </div>
}
export default Item