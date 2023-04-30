import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'


import { getProduct } from "../Store/ActionCreators/ProductActionCreators"
import { getMaincategory } from "../Store/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../Store/ActionCreators/SubcategoryActionCreators"
import { getBrand } from "../Store/ActionCreators/BrandActionCreators"
export default function Shop() {
    var [mc, setmc] = useState("All")
    var [sc, setsc] = useState("All")
    var [br, setbr] = useState("All")
    var { maincat } = useParams()
    var [flag, setflag] = useState(0)
    var [shopproducts, setshopproducts] = useState([])
    var product = useSelector((state) => state.ProductStateData)
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var brand = useSelector((state) => state.BrandStateData)
    var dispatch = useDispatch()
    product.reverse()
    function check(mc, sc, br) {
        var p = []
        if (mc === "All" && sc === "All" && br === "All")
            p = product
        else if (mc !== "All" && sc === "All" && br === "All")
            p = product.filter((item) => item.maincategory === mc)
        else if (mc === "All" && sc !== "All" && br === "All")
            p = product.filter((item) => item.subcategory === sc)
        else if (mc === "All" && sc === "All" && br !== "All")
            p = product.filter((item) => item.brand === br)
        else if (mc !== "All" && sc !== "All" && br === "All")
            p = product.filter((item) => item.maincategory === mc && item.subcategory === sc)
        else if (mc !== "All" && sc === "All" && br !== "All")
            p = product.filter((item) => item.maincategory === mc && item.brand === br)
        else if (mc === "All" && sc !== "All" && br !== "All")
            p = product.filter((item) => item.subcategory === sc && item.brand === br)
        else
            p = product.filter((item) => item.maincategory === mc && item.subcategory === sc && item.brand === br)
        setshopproducts(p)
    }
    function getSelection(e) {
        var name = e.target.name
        var value = e.target.value
        if (name === "maincategory") {
            setmc(value)
            check(value, sc, br)
        }
        else if (name === "subcategory") {
            setsc(value)
            check(mc, value, br)
        }
        else {
            setbr(value)
            check(mc, sc, value)
        }

    }
    function getSort(e) {
        var value = e.target.value
        if (value === "latest")
            setshopproducts(product)
        else if (value === "ltoh") {
            var p = product
            p.sort((a, b) => b.finalprice - a.finalprice)
            setshopproducts(p)
        }
        else {
            p.sort((a, b) => a.finalprice - b.finalprice)
            setshopproducts(p)
        }
        if (flag === 0)
            setflag(1)
        else
            setflag(0)
    }
    function getPriceFilter(e) {
        var input = e.target.value
        if (input === "All")
            setshopproducts(product)
        else if (input === ">=5001")
            setshopproducts(product.filter((item) => item.finalprice >= 5001))
        else {
            var min = input.split("-")[0]
            var max = input.split("-")[1]
            setshopproducts(product.filter((item) => item.finalprice >= min && item.finalprice <= max))
        }
    }
    function getSizeFilter(e) {
        var input = e.target.value
        if (input === "All")
            setshopproducts(product)
        else {
            setshopproducts(product.filter((item) => item.size === input))
        }
    }
    useEffect(() => {
        dispatch(getProduct())
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        if (maincat === "All")
            setshopproducts(product)
        else
            setshopproducts(product.filter((item) => item.maincategory === maincat))
    }, [product.length])
    return (
        <>
            <div className="container-fluid pt-1">
                <div className="row px-xl-5">
                    {/* <!-- Shop Sidebar Start --> */}
                    <div className="col-lg-3 col-md-12">
                        {/* <!-- Price Start --> */}
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
                            <div className="mb-1">
                                <input type="radio" name='price' id="price" onChange={getPriceFilter} value="All" />
                                <label htmlFor="price">All</label>
                            </div>
                            <div className="mb-1">
                                <input type="radio" name='price' id="price" onChange={getPriceFilter} value="0-1000" />
                                <label htmlFor="price" >&#8377;0 - &#8377;1000</label>
                            </div>
                            <div className="mb-1">
                                <input type="radio" name='price' id="price" onChange={getPriceFilter} value="1001-2000" />
                                <label htmlFor="price" >&#8377;1001 - &#8377;2000</label>
                            </div>
                            <div className="mb-1">
                                <input type="radio" name='price' id="price" onChange={getPriceFilter} value="2001-3000" />
                                <label htmlFor="price">&#8377;2001 - &#8377;3000</label>
                            </div>
                            <div className="mb-1">
                                <input type="radio" name='price' id="price" onChange={getPriceFilter} value="3001-4000" />
                                <label htmlFor="price" >&#8377;3001 - &#8377;4000</label>
                            </div>
                            <div >
                                <input className="mb-1" type="radio" name='price' id="price" onChange={getPriceFilter} value="4001-5000" />
                                <label htmlFor="price" >&#8377;4001 - &#8377;5000</label>
                            </div>
                            <div >
                                <input className="mb-1" type="radio" name='price' id="price" onChange={getPriceFilter} value=">=5001" />
                                <label htmlFor="price">5001 or More</label>
                            </div>
                        </div>
                        {/* <!-- Price End --> */}

                        {/* <!-- Size Start --> */}
                        <div className="mb-5">
                            <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="All" />
                                <label htmlFor="size" >All</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="SM" />
                                <label htmlFor="size" >SM</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="MD" />
                                <label htmlFor="size" >MD</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="LG" />
                                <label htmlFor="size" >LG</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="XL" />
                                <label htmlFor="size" >XL</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="XXL" />
                                <label htmlFor="size" >XXL</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="26" />
                                <label htmlFor="size" >26</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="28" />
                                <label htmlFor="size" >28</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="30" />
                                <label htmlFor="size" >30</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="32" />
                                <label htmlFor="size" >32</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="34" />
                                <label htmlFor="size" >34</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="36" />
                                <label htmlFor="size" >36</label>
                            </div>
                            <div className=" mb-1">
                                <input type="radio" id="size" name='size' onChange={getSizeFilter} value="38" />
                                <label htmlFor="size" >38</label>
                            </div>
                        </div>
                        {/* <!-- Size End --> */}
                    </div>
                    {/* <!-- Shop Sidebar End --> */}


                    {/* <!-- Shop Product Start --> */}
                    <div className="col-lg-9 col-md-12">
                        <div className="row">
                            <div className="my-2 border col-lg-3 col-md-6 col-12">
                                <label>Maincategory</label>
                                <select name="maincategory" className='form-control' onChange={getSelection}>
                                    <option className="dropdown-item" value="All">All</option>
                                    {
                                        maincategory.map((item, index) => {
                                            return <option key={index} className="dropdown-item" value={item.name}>{item.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="my-2 border col-lg-3 col-md-6 col-12">
                                <label>Subcategory</label>
                                <select name="subcategory" className='form-control' onChange={getSelection}>
                                    <option className="dropdown-item" value="All">All</option>
                                    {
                                        subcategory.map((item, index) => {
                                            return <option key={index} className="dropdown-item" value={item.name}>{item.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="my-2 border col-lg-3 col-md-6 col-12">
                                <label>Brand</label>
                                <select name="br" className='form-control' onChange={getSelection}>
                                    <option className="dropdown-item" value="All">All</option>
                                    {
                                        brand.map((item, index) => {
                                            return <option key={index} className="dropdown-item" value={item.name}>{item.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="my-2 border col-lg-3 col-md-6 col-12">
                                <label>Sort By</label>
                                <select name="sortby" onChange={getSort} className="form-control">
                                    <option className="dropdown-item" value="latest">Latest</option>
                                    <option className="dropdown-item" value="ltoh">Price Low to High</option>
                                    <option className="dropdown-item" value="htol">Price High to Low</option>
                                </select>
                            </div>
                        </div>

                        <div className="row pb-3">
                            {
                                shopproducts.map((item, index) => {
                                    return <div key={index} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                        <div className="card product-item border-0 mb-4">
                                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                <Link to={`/single-product/${item.id}`}> <img className=" w-100" src={`/assets/productimages/${item.pic1}`} height="auto" alt="" /></Link>
                                            </div>
                                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                <Link to={`/single-product/${item.id}`}>
                                                    <h6 className="text-truncate mb-3">{item.name}</h6>
                                                    <div className="d-flex justify-content-center">
                                                        <h6>&#8377;{item.finalprice}</h6><h6 className="text-muted ml-2"><del>&#8377;{item.baseprice}</del></h6>
                                                    </div>
                                                    <h6>{item.discount}% Less</h6>
                                                </Link>
                                            </div>
                                            <Link to={`/single-product/${item.id}`} className="p-2 text-decoration-none text-center btn-primary mybtn"><i className="fas fa-eye mr-1 mybtn"></i>View Detail</Link>
                                        </div>
                                    </div>
                                })
                            }
                            <div className="col-12 pb-1">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center mb-3">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </Link>
                                        </li>
                                        <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Shop Product End --> */}
                </div>
            </div>
            {/* <!-- Shop End --> */}

        </>
    )
}
