import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getProducts } from './Ecommerce/redux/slices/productSlice'

function Users() {
const dispatch = useDispatch()
const products = useSelector(state=>state.products.products)
  
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const response = await fetch("http://localhost:5000/products")
      const data = await response.json()
      dispatch(getProducts(data))
      
      
    }
    fetchProducts()
  },[])
  
  return (
    <div>
      {
        products.map((prod)=>{
          const {id, title,details,price, image}= prod;
          return <div key={id}>
               <p>{title}</p>
               <p>{details}</p>
               <img src={image} alt="" style={{width:"150px", height:"150px"}}/>
               <p>{price}</p>

          </div>
        })
      }
    </div>
  )
}

export default Users