import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Ecommerce/HomePage/Home'
import Item from './Ecommerce/SinglePage/Item'
import CartContainer from './Ecommerce/CartPage/CartContainer'
import Navbar from './Ecommerce/Navbar'
//npm install react-router-dom react-toastify
const App = () => {
	return (
		<BrowserRouter>
		<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/item/:id" element={<Item/>} />
				<Route path="/cart" element={<CartContainer/>} />
			</Routes>
			</BrowserRouter>
	)
}
export default App