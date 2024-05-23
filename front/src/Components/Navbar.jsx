import React, { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux';
export default function Navbar() {
    var [cartnum, setCartnum] = useState([]);
    var [wishlistnum, setWishlistnum] = useState([]);
    var navigate = useNavigate()
    var carts = useSelector(state => state.CartStateData);
    var wishlists = useSelector(state => state.WishlistStateData)
    function logout() {
        localStorage.clear()
        navigate("/login")
    }
    function getApiData() {
        var data = carts.filter((item) => item.userid === localStorage.getItem("userid"));
        var wishlistdata = wishlists.filter((item) => item.userid === localStorage.getItem("userid"));
        var num = data.length;
        var wishNum = wishlistdata.length
        setCartnum(num);
        setWishlistnum(wishNum)
    }
    useEffect(() => {
        getApiData()
    },)
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid">
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link to="/" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">My</span>Shop</h1>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <Link to="/wishlist" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge">{wishlistnum}</span>
                        </Link>
                        <Link to="/cart" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className="badge">{cartnum}</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <div className="container-fluid">
                {/* <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block"> */}
                {/* <Link className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" to="#navbar-vertical" style={{height: "65px", marginTop: "-1px", padding: "0 30px"}}>
                            <h6 className="m-0">Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </Link>
                        <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                            <div className="navbar-nav w-100 overflow-hidden" style={{height: "410px"}}>
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></Link>
                                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <Link to="" className="dropdown-item">Men's Dresses</Link>
                                        <Link to="" className="dropdown-item">Women's Dresses</Link>
                                        <Link to="" className="dropdown-item">Baby's Dresses</Link>
                                    </div>
                                </div>
                                <Link to="" className="nav-item nav-link">Shirts</Link>
                                <Link to="" className="nav-item nav-link">Jeans</Link>
                                <Link to="" className="nav-item nav-link">Swimwear</Link>
                                <Link to="" className="nav-item nav-link">Sleepwear</Link>
                                <Link to="" className="nav-item nav-link">Sportswear</Link>
                                <Link to="" className="nav-item nav-link">Jumpsuits</Link>
                                <Link to="" className="nav-item nav-link">Blazers</Link>
                                <Link to="" className="nav-item nav-link">Jackets</Link>
                                <Link to="" className="nav-item nav-link">Shoes</Link>
                            </div>
                        </nav> */}
            </div>
            {/* <div className="col-lg-9"> */}
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 sticky-top">
                <Link to="" className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">My</span>Shop</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/shop/All" className="nav-item nav-link">Shop</Link>

                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        <Link to="/admin-home" className="nav-item nav-link">Admin</Link>
                    </div>
                    <div className="navbar-nav ml-auto py-0">
                        <div className="nav-item dropdown">
                            {
                                localStorage.getItem("login") ? <>
                                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">{localStorage.getItem("name")}</Link>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <Link to="/profile" className="dropdown-item">Profile</Link>
                                        <Link to="/cart" className="dropdown-item">Cart</Link>
                                        <Link to="/orders" className="dropdown-item">Checkout</Link>
                                        <button onClick={logout} className="dropdown-item">Logout</button>
                                    </div>
                                </> :
                                    <Link to="/login" className="nav-item nav-link">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
