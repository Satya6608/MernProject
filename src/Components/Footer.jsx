import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { addNewslatter, getNewslatter } from '../Store/ActionCreators/NewslatterActionCreators'
export default function Footer() {
    var [email, setEmail] = useState("");
    var [show, setShow] = useState(false)
    var [msg, setMsg] = useState("")
    var newslatters = useSelector(state => state.NewslatterStateData);
    var dispatch = useDispatch()
    function getData(e) {
        setEmail(e.target.value)
        setShow(false)
    }
    function postData(e) {
        e.preventDefault()
        var data = newslatters.find((item) => item.email === email);
        if (data) {
            setShow(true)
            setMsg("Your Email Id is Already Subscribed")
        }
        else {
            dispatch(addNewslatter({ email: email }))
            setShow(true)
            setMsg("Thanks!!! Your Email Id is Subscribed Successfully")
            var frm = document.getElementsByName('newslatter-form')[0];
            frm.reset();
        }
    }
    function getApiData() {
        dispatch(getNewslatter())
    }
    useEffect(() => {
        getApiData()
    }, [newslatters.length])

    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-secondary text-dark mt-1 pt-1">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <a href="" className="text-decoration-none">
                            <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">My</span>Shop</h1>
                        </a>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>A-43, Sector 16, Noida,201301 India</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>vishankchauhan@gmail.com</p>
                        <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>9873848046</p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-dark mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>Home</a>
                                    <a className="text-dark mb-2" href="shop.html"><i className="fa fa-angle-right mr-2"></i>About</a>
                                    <a className="text-dark mb-2" href="detail.html"><i className="fa fa-angle-right mr-2"></i>Shop</a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-dark mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>Contact</a>
                                    <a className="text-dark mb-2" href="shop.html"><i className="fa fa-angle-right mr-2"></i>Cart</a>
                                    <a className="text-dark mb-2" href="detail.html"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                {
                                    show ?
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            {msg}
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div> : ""
                                }
                                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                                <form onSubmit={postData} name='newslatter-form'>
                                    <div className="form-group">
                                        <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                                            required="required" name='email' onChange={getData} />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
