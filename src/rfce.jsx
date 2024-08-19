import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SignUp from './pages/LoginAndReg/SignUp'
import Login from './pages/LoginAndReg/Login'
import ForgotPassword from './pages/ForgotAndReset/ForgotPassword'
import ResetPassword from './pages/ForgotAndReset/ResetPassword'

const Home = lazy(()=>import('./Ecommerce/HomePage/Home')) 
const Item = lazy(()=>import('./Ecommerce/SinglePage/Item')) 
const CartContainer =  lazy(()=>import('./Ecommerce/CartPage/CartContainer')) 
const Navbar = lazy(()=>import('./Ecommerce/Navbar')) 

const App = () => {
	return (
		<BrowserRouter>
		<Suspense fallback={<h2 style={{margin:"40px"}}>Loading ...</h2>}>
			<Routes>
			

				<Route path="/" element={<Home/>} />
				<Route path="/forgotPassword" element={<ForgotPassword/>} />
				<Route path="/resetPassword" element={<ResetPassword/>} />
				<Route path="/register" element={<SignUp/>} />
				<Route path="/login" element={<Login/>} />
				<Route path="/item/:id" element={<Item/>} />
				<Route path="/cart" element={<CartContainer/>} />
				<Route path="*" element={<h1>404 - Page not found</h1>} />

			</Routes>
		</Suspense>
			</BrowserRouter>
	)
}
export default App