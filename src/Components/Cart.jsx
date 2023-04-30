import React, { useState, useEffect } from 'react'

import { getCart, updateCart, deleteCart } from '../Store/ActionCreators/CartActionCreators'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Cart() {
    var [cart, setCart] = useState([]);
    var [total, setTotal] = useState(0);
    var [shipping, setShipping] = useState(0);
    var [final, setFinal] = useState(0);
    var dispatch = useDispatch()
    var carts = useSelector(state => state.CartStateData)
    function updateRecord(id, op) {
        var item = cart.find(item => item.id===id)
        if(op==="dec" && item.qty===1)
        return
        else if(op=="dec"){
            item.qty= item.qty-1
            item.total= item.total-item.price
        }
        else{
            item.qty = item.qty+1
            item.total=item.total+item.price
        }
        dispatch(updateCart(item))
        getApiData()
    }
    function deleteRecord(id) {
        dispatch(deleteCart({id:id}))
        getApiData()
    }
    function getApiData() {
        dispatch(getCart())
        var data = carts.filter((item) => item.userid === localStorage.getItem("userid"));
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
    }
    useEffect(() => {
        getApiData()
    }, [carts.length])
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-bordered text-center mb-0">
                            <thead className="bg-secondary text-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {
                                    cart.map((item, index) => {
                                        return <tr key={index}>
                                            <td className="align-middle"><img src={`/assets/productimages/${item.pic}`} alt="" style={{ width: "50px" }} />{item.name}</td>
                                            <td className="align-middle">{item.color}</td>
                                            <td className="align-middle">{item.size}</td>
                                            <td className="align-middle">&#8377;{item.price}</td>
                                            <td className="align-middle">
                                                <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-primary btn-minus" onClick={()=>updateRecord(item.id,"dec")}>
                                                            <i className="fa fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    {/* <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.qty} /> */}
                                                    <span style={{width:"30px"}}>{item.qty}</span>
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-primary btn-plus" onClick={()=>updateRecord(item.id,"inc")}>
                                                            <i className="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle">&#8377;{item.total}</td>
                                            <td className="align-middle"><button onClick={()=>deleteRecord(item.id)} className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        {/* <form className="mb-5" action="">
                            <div className="input-group">
                                <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form> */}
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                            </div>
                            <div className="card-body">
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
                                <Link to="/checkout" className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
