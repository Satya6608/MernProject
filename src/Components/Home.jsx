import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getProduct } from "../Store/ActionCreators/ProductActionCreators"
export default function Home() {
    var product = useSelector((state) => state.ProductStateData)
    var dispatch = useDispatch()
    if(product.reverse){
        product.reverse()
        product = product.slice(0, 8)
    }
    useEffect(()=>{
        dispatch(getProduct())
    },[])
    return (
        <>
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: "410px" }}>
                        <img className="img-fluid" src="/assets/img/carousel-1.jpg" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: "410px" }}>
                        <img className="img-fluid" src="/assets/img/carousel-2.jpg" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                    <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
            {/* <!-- Featured Start --> */}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Featured End --> */}


            {/* <!-- Categories Start --> */}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div className="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
                            <Link to="/shop/Male" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/assets/img/cat-1.jpg" alt="" />
                            </Link>
                            <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div className="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
                            <Link to="/shop/Female" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/assets/img/cat-2.jpg" alt="" />
                            </Link>
                            <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div className="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
                            <Link to="/shop/Kids" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/assets/img/cat-3.jpg" alt="" />
                            </Link>
                            <h5 className="font-weight-semi-bold m-0">Kid's dresses</h5>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 pb-1">
                        <div className="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
                            <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/assets/img/cat-4.jpg" alt="" />
                            </a>
                            <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div className="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
                            <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/assets/img/cat-5.jpg" alt="" />
                            </a>
                            <h5 className="font-weight-semi-bold m-0">Bags</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div className="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
                            <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="/assets/img/cat-6.jpg" alt="" />
                            </a>
                            <h5 className="font-weight-semi-bold m-0">Shoes</h5>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <!-- Categories End --> */}


            {/* <!-- Offer Start --> */}
            <div className="container-fluid offer pt-1">
                <div className="row px-xl-5">
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                            <img src="/assets/img/offer-1.png" alt="" />
                            <div className="position-relative" style={{ zIndex: "1" }}>
                                <h5 className="text-uppercase text-primary mb-3">Upto 80% off the all order</h5>
                                <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
                                <Link to="/shop/All" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                            <img src="/assets/img/offer-2.png" alt="" />
                            <div className="position-relative" style={{ zIndex: "1" }}>
                                <h5 className="text-uppercase text-primary mb-3">Upto 80% off the all order</h5>
                                <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
                                <Link to="/shop/All" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Offer End --> */}


            {/* <!-- Products Start --> */}
            <div className="container-fluid pt-1">
                <div className="text-center mb-1">
                    <h2 className="section-title px-5"><span className="px-2">Latest Products</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    {
                        product.map((item, index) => {
                            return <div key={index} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="card product-item border-0 mb-4">
                                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <a target="_blank" href={`assets/productimages/${item.pic1}`}><img className=" w-100" src={`assets/productimages/${item.pic1}`} height="250px" alt="" /></a>
                                    </div>
                                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                        <h6 className="text-truncate mb-3">{item.name}</h6>
                                        <div className="d-flex justify-content-center">
                                            <h6>&#8377;{item.finalprice}</h6><h6 className="text-muted ml-2"><del>&#8377;{item.baseprice}</del></h6>
                                        </div>
                                        <h6>{item.discount}% Less</h6>
                                    </div>
                                        <Link to={`/single-product/${item.id}`}  className="p-2 text-decoration-none text-center btn-primary mybtn"><i className="fas fa-eye mr-1 mybtn"></i>View Detail</Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            {/* <!-- Products End --> */}


            {/* <!-- Subscribe Start --> */}
            <div className="container-fluid bg-secondary my-1">
                <div className="row justify-content-md-center py-5 px-xl-5">
                    <div className="col-md-6 col-12 py-5">
                        <div className="text-center mb-2 pb-2">
                            <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Stay Updated</span></h2>
                            <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
                        </div>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-4" placeholder="Email Goes Here" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary px-4">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Subscribe End --> */}


            


            {/* <!-- Vendor Start --> */}
            <div className="container-fluid py-1">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel">
                            <div className="vendor-item border p-4">
                                <img src="/assets/img/vendor-1.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/assets/img/vendor-2.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/assets/img/vendor-3.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/assets/img/vendor-4.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/assets/img/vendor-5.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/assets/img/vendor-6.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/assets/img/vendor-7.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="/assets/img/vendor-8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Vendor End --> */}

        </>
    )
}
