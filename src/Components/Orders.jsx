import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


import { getCheckout, deleteCheckout } from '../Store/ActionCreators/CheckoutActionCreators'
import { useDispatch, useSelector } from 'react-redux';
export default function Orders() {
    var [checkout, setCheckout] = useState([]);
    var dispatch = useDispatch()
    var checkouts = useSelector(state => state.CheckoutStateData)
    function getApiData() {
        dispatch(getCheckout())
        var data = checkouts.filter((item) => item.userid === localStorage.getItem("userid"));
        setCheckout(data)
    }
    useEffect(() => {
        getApiData()
    }, [checkouts.length])
    return (
        <>
            <div className="container-fluid pt-5">
                {
                    checkout.length > 0 ?
                        checkout.map((item, i) => {
                            return <div key={i} className='row'>
                                <div className="col-lg-3">
                                    <div className="table-responsive">
                                        <table className='table table-bordered'>
                                            <tbody>
                                                <tr>
                                                    <th>Order Id</th>
                                                    <td>{item.id}</td>
                                                </tr>
                                                <tr>
                                                    <th>Order Status</th>
                                                    <td>{item.orderStatus}</td>
                                                </tr>
                                                <tr>
                                                    <th>Payment Mode</th>
                                                    <td>{item.paymentmode}</td>
                                                </tr>
                                                <tr>
                                                    <th>Payment Status</th>
                                                    <td>{item.paymentStatus}</td>
                                                </tr>
                                                <tr>
                                                    <th>Total Amount</th>
                                                    <td>&#8377;{item.totalAmount}</td>
                                                </tr>
                                                <tr>
                                                    <th>Shipping Amount</th>
                                                    <td>&#8377;{item.shippingAmount}</td>
                                                </tr>
                                                <tr>
                                                    <th>Final Amount</th>
                                                    <td>&#8377;{item.finalAmount}</td>
                                                </tr>
                                                <tr>
                                                    <th>Date :</th>
                                                    <td>{`${new Date(item.date).getDate()}/${new Date(item.date).getMonth() + 1}/${new Date(item.date).getFullYear()}`}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row px-xl-5">
                                        <div className="col-lg-12 table-responsive mb-5">
                                            <table className="table table-bordered text-center mb-0">
                                                <thead className="bg-secondary text-dark">
                                                    <tr>
                                                        <th>Products</th>
                                                        <th>Color</th>
                                                        <th>Size</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Final</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="align-middle">
                                                    {
                                                        item.product.map((item, index) => {
                                                            return <tr key={index}>
                                                                <td className="align-middle text-left"><Link to={`/single-product/${item.productid}`}><img src={`/assets/productimages/${item.pic}`} alt="" style={{ width: "50px", marginRight: "20px" }} />{item.name}</Link></td>
                                                                <td className="align-middle">{item.color}</td>
                                                                <td className="align-middle">{item.size}</td>
                                                                <td className="align-middle">&#8377;{item.price}</td>
                                                                <td className="align-middle">{item.qty}</td>
                                                                <td className="align-middle">&#8377;{item.total}</td>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ border: "2px solid lightgrey", width: "100%" }} />
                            </div>
                        })
                        :
                        <div className="nothing">
                            <h5 className="text-center">Nothing   you have purchased yet</h5>
                            <Link to="/shop/All" className="text-center nav-link">Back to shopping</Link>
                        </div>
                }
            </div>
        </>
    )
}
