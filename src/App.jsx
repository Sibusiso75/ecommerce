import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

const Home = lazy(()=>import('./Ecommerce/HomePage/Home')) 
const Item = lazy(()=>import('./Ecommerce/SinglePage/Item')) 
const CartContainer =  lazy(()=>import('./Ecommerce/CartPage/CartContainer')) 
const Navbar = lazy(()=>import('./Ecommerce/Navbar')) 
//npm install react-router-dom react-toastify
const App = () => {
	return (
		<BrowserRouter>
		<Suspense fallback={<h2 style={{margin:"40px"}}>Loading ...</h2>}>
		<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/item/:id" element={<Item/>} />
				<Route path="/cart" element={<CartContainer/>} />
			</Routes>
		</Suspense>
			</BrowserRouter>
	)
}
export default App