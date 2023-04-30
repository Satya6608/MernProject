import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'


import { getUser } from '../Store/ActionCreators/UserActionCreators';
import { getCart, deleteCart } from '../Store/ActionCreators/CartActionCreators';
import { addCheckout } from '../Store/ActionCreators/CheckoutActionCreators';
import BuyerProfile from './BuyerProfile';
import { Payment } from '@mui/icons-material';

export default function Checkout() {
    var [mode, setMode] = useState("COD")
    var [user, setUser] = useState({})
    var [cart, setCart] = useState([]);
    var [total, setTotal] = useState(0);
    var [shipping, setShipping] = useState(0);
    var [final, setFinal] = useState(0);
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var carts = useSelector(state => state.CartStateData)
    var users = useSelector((state) => state.UserStateData)
    function getAPIData() {
        dispatch(getUser())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setUser(data)
    }
    function postData(){
        var item ={
            userid:localStorage.getItem("userid"),
            paymentmode:mode,
            paymentStatus: "Pending",
            orderStatus:"Order Placed",
            totalAmount:total,
            shippingAmount:shipping,
            finalAmount:final,
            date:new Date(),
            product:cart
        }
        dispatch(addCheckout(item));
        for(var item of cart){
        dispatch(deleteCart({id:item.id}));
        }
        navigate("/confirmation")
    }
    useEffect(() => {
        getAPIData()
        dispatch(getCart())
        let data = carts.filter((item) => item.userid === localStorage.getItem("userid"));
        setCart(data)
        var total = 0;
        var shipping = 0;
        for (let item of data) {
            total = total + item.total
        }
        if (total > 0 && total <= 1000) {
            shipping = 150;
            setTotal(total)
            setShipping(shipping)
            setFinal(shipping + total)
        }
        else{
            shipping = 0;
            setTotal(total)
            setShipping(shipping)
            setFinal(shipping + total)
        }
    }, [users.length,carts.length])
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <div className='card-header bg-secondary border-0'>
                                <h4 className="font-weight-semi-bold mb-0 text-center">Billing Address</h4>
                            </div>
                            <BuyerProfile user={user} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="font-weight-medium mb-3">Products</h5>
                                {
                                    cart.map((item,i)=>{
                                        return <div key={i} className="d-flex justify-content-between">
                                        <p>{item.name} (&#8377;{item.price}*{item.qty})</p>
                                        <p>&#8377;{item.total}</p>
                                    </div>
                                    })
                                }
                                <hr className="mt-0" />
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">Subtotal</h6>
                                    <h6 className="font-weight-medium">&#8377;{total}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">&#8377;{shipping}</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">Total</h5>
                                    <h5 className="font-weight-bold">&#8377;{final}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Payment</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" checked onChange={()=>setMode("COD")} name="mode" id="cod" />
                                        <label className="custom-control-label" htmlFor="cod">COD</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" onChange={()=>setMode("NETBANKING")} name="mode" id="netbanking" />
                                        <label className="custom-control-label" htmlFor="netbanking">Net Banking</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <button className="btn btn-lg btn-block btn-primary font-weight-bold" onClick={postData}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
