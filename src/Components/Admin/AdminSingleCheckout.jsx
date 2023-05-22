import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";



import LeftNav from './LeftNav';
import { getCheckout, updateCheckout } from '../../Store/ActionCreators/CheckoutActionCreators';
import { getUser } from '../../Store/ActionCreators/UserActionCreators';
export default function AdminSingleCheckout() {
    var [checkout, setCheckout] = useState({})
    var [user, setUser] = useState({})
    var [paymentStatus, setPaymentStatus] = useState("")
    var [orderstatus, setOrderStatus] = useState("")
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var { id } = useParams()
    var checkouts = useSelector((state) => state.CheckoutStateData)
    var users = useSelector((state) => state.UserStateData)

    function getData(e) {
        var [name, value] = e.target
        if (name === "peymentStatus") {
            setPaymentStatus(value)
        } else if (name === "orderStatus") {
            setOrderStatus(value)
        }
    }
    function updateRecord() {
        dispatch(updateCheckout({ ...checkout, paymentStatus: paymentStatus, orderStatus: orderstatus }));
        getAPIData()
    }
    function getAPIData() {
        dispatch(getUser())
        dispatch(getCheckout())
        var item = checkouts.find((item) => item.id === Number(id))
        if (item) {
            setCheckout(item)
            setOrderStatus(item.orderStatus)
            setPaymentStatus(item.paymnetStatus)
            setUser(users.find((u) => u.id === Number(item.userid)))
        }
    }
    useEffect(() => {
        getAPIData()
    }, [checkouts.length, checkout.status])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2 text-light'>Checkout Detail</h5>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{checkout.id}</td>
                                </tr>
                                <tr>
                                    <th>User</th>
                                    <td>
                                        <table>
                                            <tr>
                                                <th>Name</th>
                                                <td>{user.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Phone</th>
                                                <td>{user.phone}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{user.email}</td>
                                            </tr>
                                            <tr>
                                                <th>Address</th>
                                                <td>
                                                    <p><i>{user.addressline1}</i></p>
                                                    <p><i>{user.addressline2}</i></p>
                                                    <p><i>{user.addressline3}</i></p>
                                                    <p><i>{user.pin}</i></p>
                                                    <p><i>{user.city}</i></p>
                                                    <p><i>{user.state}</i></p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Payment Mode</th>
                                    <td>{checkout.paymentmode}</td>
                                </tr>
                                <tr>
                                    <th>Payment Status</th>
                                    <td>{checkout.paymentStatus}
                                        <br />
                                        {
                                            checkout.paymentStatus !== "Done" ?
                                                <select name='paymentStatus' value={paymentStatus} onChange={getData} className='form-control'>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Done">Done</option>
                                                </select> : ""
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>Order Status</th>
                                    <td>
                                        {checkout.orderStatus}
                                        <br />
                                        {
                                            checkout.paymentStatus !== "Delivered" ?
                                                <select name='orderStatus' onChange={getData} className='form-control'>
                                                    <option value="Order Placed">Order Placed</option>
                                                    <option value="Order Packed">Order Packed</option>
                                                    <option value="Ready To Ship">Ready To Ship</option>
                                                    <option value="Shipped">Shipped</option>
                                                    <option value="Out For Delivery">Out For Delivery</option>
                                                    <option value="Delivered">Delivered</option>
                                                </select> : ""
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>Total Amount</th>
                                    <td>{checkout.totalAmount}</td>
                                </tr>
                                <tr>
                                    <th>Shipping Amount</th>
                                    <td>{checkout.shippingAmount}</td>
                                </tr>
                                <tr>
                                    <th>Final Amount</th>
                                    <td>{checkout.finalAmount}</td>
                                </tr>
                                <tr>
                                    <th>Date</th>
                                    <td>{checkout.date}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        {
                                            checkout.paymnetStatus !== "Done" || checkout.orderStatus !== "Delivered" ? <button className='btn btn-primary w-100' onClick={updateRecord
                                            }>Change Status</button> : ""
                                        }

                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
                                        checkout.product.map((item, index) => {
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
            </div>
        </>
    )
}
