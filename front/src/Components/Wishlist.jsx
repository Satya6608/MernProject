import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { getWishlist, deleteWishlist } from '../Store/ActionCreators/WishlistActionCreators'
import { useDispatch, useSelector } from 'react-redux';
export default function Wishlist() {
    var [wishlist, setWishlist] = useState([]);
    var dispatch = useDispatch()
    var wishlists = useSelector(state => state.WishlistStateData)
    function deleteRecord(id) {
        dispatch(deleteWishlist({ id: id }))
        getApiData()
    }
    function getApiData() {
        dispatch(getWishlist())
        var data = wishlists.filter((item) => item.userid === localStorage.getItem("userid"));
        setWishlist(data)
    }
    useEffect(() => {
        getApiData()
    }, [wishlists.length])
    return (
        <>
            <div className="container-fluid pt-5">
                {
                    wishlist.length > 0 ?
                        <div className="row px-xl-5">
                            <div className="col-lg-12 table-responsive mb-5">
                                <table className="table table-bordered text-center mb-0">
                                    <thead className="bg-secondary text-dark">
                                        <tr>
                                            <th>Products</th>
                                            <th>Color</th>
                                            <th>Size</th>
                                            <th>Price</th>
                                            <th>Buy Now</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody className="align-middle">
                                        {
                                            wishlist.map((item, index) => {
                                                return <tr key={index}>
                                                    <td className="align-middle text-left"><Link to={`/single-product/${item.productid}`}><img src={`/assets/productimages/${item.pic}`} alt="" style={{ width: "50px", marginRight: "20px" }} />{item.name}</Link></td>
                                                    <td className="align-middle">{item.color}</td>
                                                    <td className="align-middle">{item.size}</td>
                                                    <td className="align-middle">&#8377;{item.price}</td>
                                                    <td className="align-middle"><Link to={`/single-product/${item.productid}`} className="btn btn-sm btn-primary">Buy</Link></td>
                                                    <td className="align-middle"><button onClick={() => deleteRecord(item.id)} className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        <div className='nothing'>
                            <h5 className="text-center">YOUR WISHLIST IS EMPTY</h5>
                            <Link to="/shop/All" className="text-center nav-link">Back to shopping</Link>
                        </div>
                }
            </div>
        </>
    )
}
