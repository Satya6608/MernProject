import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import Shop from './Shop'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import Checkout from './Checkout'
import Contact from './Contact'
import Login from './Login'
import SignUP from './SignUP'

import AdminHome from './Admin/AdminHome'
import AdminMaincategory from './Admin/AdminMaincategory'
import AdminAddMaincategory from './Admin/AdminAddMaincategory'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategory'

import AdminSubcategory from './Admin/AdminSubcategory'
import AdminAddSubcategory from './Admin/AdminAddSubcategory'
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategory'

import AdminBrand from './Admin/AdminBrand'
import AdminAddBrand from './Admin/AdminAddBrand'
import AdminUpdateBrand from './Admin/AdminUpdateBrand'

import AdminProduct from './Admin/AdminProduct'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/shop/:maincat' element={<Shop/>}/>
                <Route path='/single-product/:id' element={<SingleProduct/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUP/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/update-profile/:id' element={<UpdateProfile/>}/>


                <Route path='/admin-home' element={<AdminHome/>}/>
                <Route path='/admin-maincategory' element={<AdminMaincategory/>}/>
                <Route path='/admin-add-maincategory' element={<AdminAddMaincategory/>}/>
                <Route path='/admin-update-maincategory/:id' element={<AdminUpdateMaincategory/>}/>
                <Route path='/admin-subcategory' element={<AdminSubcategory/>}/>
                <Route path='/admin-add-subcategory' element={<AdminAddSubcategory/>}/>
                <Route path='/admin-update-subcategory/:id' element={<AdminUpdateSubcategory/>}/>
                <Route path='/admin-brand' element={<AdminBrand/>}/>
                <Route path='/admin-add-brand' element={<AdminAddBrand/>}/>
                <Route path='/admin-update-brand/:id' element={<AdminUpdateBrand/>}/>
                <Route path='/admin-product' element={<AdminProduct/>}/>
                <Route path='/admin-add-product' element={<AdminAddProduct/>}/>
                <Route path='/admin-update-product/:id' element={<AdminUpdateProduct/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
