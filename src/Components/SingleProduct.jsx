import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


import { getProduct } from '../Store/ActionCreators/ProductActionCreators';
import { getCart, addCart } from "../Store/ActionCreators/CartActionCreators";
import { getWishlist, addWishlist } from "../Store/ActionCreators/WishlistActionCreators"

import { ImportExportOutlined } from '@mui/icons-material';
export default function SingleProduct() {
    var [p, setP] = useState({})
    var [qty, setqty] = useState(1)
    var product = useSelector((state) => state.ProductStateData)
    var cart = useSelector((state) => state.CartStateData)
    var wishlist = useSelector((state) => state.WishlistStateData)
    var dispatch = useDispatch()
    var { id } = useParams()
    var navigate = useNavigate()
    function addToCart(){
        var data = cart.find((item)=>item.productid===Number(id) && item.userid===localStorage.getItem("userid"));
        if(data){
            navigate("/cart")
        }
        else{
            var item = {
                userid :localStorage.getItem('userid'),
                productid : p.id,
                name : p.name,
                color : p.color,
                size : p.size,
                price : p.price,
                qty : p.qty,
                total : p.finalprice*qty,
                pic : p.pic1,
            }
            dispatch(addCart(item))
            navigate("/cart")
        }
    }
    function addToWishlist(){
        var data = wishlist.find((item)=>item.productid===Number(id) && item.userid===localStorage.getItem("userid"));
        if(data){
            navigate("/profile")
        }
        else{
            var item = {
                userid :localStorage.getItem('userid'),
                productid : p.id,
                name : p.name,
                color : p.color,
                size : p.size,
                price : p.price,
                pic : p.pic1,
            }
            dispatch(addWishlist(item))
            navigate("/profile")
        }
        
    }
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    useEffect(() => {
        dispatch(getProduct())
        dispatch(getCart())
        dispatch(getWishlist())
        var data = product.find((item) => item.id === Number(id))
        if (data) {
            setP(data)
        }
    }, [product.length])
    return (
        <>
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner border">
                                <LightGallery
                                    onInit={onInit}
                                    speed={500}
                                    plugins={[lgThumbnail, lgZoom]}
                                >
                                    <div className="carousel-item active">
                                        {p.pic1 ? <a data-src={`/assets/productimages/${p.pic1}`} > <img className="w-100" src={`/assets/productimages/${p.pic1}`} height="500px" alt="Image" /> </a>: ""}
                                    </div>
                                    <div className="carousel-item">
                                        {p.pic2 ? <a data-src={`/assets/productimages/${p.pic2}`} > <img className="w-100" src={`/assets/productimages/${p.pic2}`} data-src={`/assets/productimages/${p.pic2}`} height="500px" alt="Image" /></a> : ""}
                                    </div>
                                    <div className="carousel-item">
                                        {p.pic3 ? <a data-src={`/assets/productimages/${p.pic3}`} > <img className="w-100" src={`/assets/productimages/${p.pic3}`} data-src={`/assets/productimages/${p.pic3}`} height="500px" alt="Image" /></a> : ""}
                                    </div>
                                    <div className="carousel-item">
                                        {p.pic4 ? <a data-src={`/assets/productimages/${p.pic4}`} > <img className="w-100" src={`/assets/productimages/${p.pic4}`} data-src={`/assets/productimages/${p.pic4}`} height="500px" alt="Image" /></a> : ""}
                                    </div>
                                </LightGallery>
                            </div>

                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <th colSpan={2} className="text-center">{p.name}</th>
                                </tr>
                                <tr>
                                    <th>Categorory</th>
                                    <td>{p.maincategory}/{p.subcategory}</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td>{p.brand}</td>
                                </tr>
                                <tr>
                                    <th>COlor</th>
                                    <td>{p.color}</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>{p.size}</td>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <td><del>&#8377;{p.baseprice}</del><sup>&#8377;{p.finalprice}</sup></td>
                                </tr>
                                <tr>
                                    <th>Discount</th>
                                    <td>{p.discount}% Off</td>
                                </tr>
                                <tr>
                                    <th>Stock</th>
                                    <td>{p.stock}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{p.description}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-minus" onClick={() => {
                                        if (qty > 1)
                                            setqty(qty - 1)
                                    }}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-secondary text-center" onChange={() => { }} value={qty} />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-plus" onClick={() => setqty(qty + 1)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-primary px-3" onClick={addToCart}><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                            <button className="btn btn-primary px-3 mx-1" onClick={addToWishlist}><i className="fa fa-heart mr-1"></i> Add To Wishlist</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
