import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { getProduct } from "../Store/ActionCreators/ProductActionCreators"
export default function SingleProduct() {
    var [qty,setqty] = useState(1)
    var product = useSelector((state) => state.ProductStateData)
    var dispatch = useDispatch()
    var { id } = useParams()
    product = product.find((item)=>item.id==id)
    useEffect(() => {
        dispatch(getProduct({ id: id }))
    }, [])
    return (
        <>
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner border">
                                <div className="carousel-item active">
                                    {product.pic1 ? <a href={`/assets/productimages/${product.pic1}`} target="_blank"><img className="w-100" src={`/assets/productimages/${product.pic1}`} height="500px" alt="Image" /></a> : ""}
                                </div>
                                <div className="carousel-item">
                                    {product.pic2 ? <a href={`/assets/productimages/${product.pic2}`} target="_blank"><img className="w-100" src={`/assets/productimages/${product.pic2}`} height="500px" alt="Image" /></a> : ""}
                                </div>
                                <div className="carousel-item">
                                    {product.pic3 ? <a href={`/assets/productimages/${product.pic3}`} target="_blank"><img className="w-100" src={`/assets/productimages/${product.pic3}`} height="500px" alt="Image" /></a> : ""}
                                </div>
                                <div className="carousel-item">
                                    {product.pic4 ? <a href={`/assets/productimages/${product.pic4}`} target="_blank"><img className="w-100" src={`/assets/productimages/${product.pic4}`} height="500px" alt="Image" /></a> : ""}
                                </div>
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
                                    <th colSpan={2} className="text-center">{product.name}</th>
                                </tr>
                                <tr>
                                    <th>Categorory</th>
                                    <td>{product.maincategory}/{product.subcategory}</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td>{product.brand}</td>
                                </tr>
                                <tr>
                                    <th>COlor</th>
                                    <td>{product.color}</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>{product.size}</td>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <td><del>&#8377;{product.baseprice}</del><sup>&#8377;{product.finalprice}</sup></td>
                                </tr>
                                <tr>
                                    <th>Discount</th>
                                    <td>{product.discount}% Off</td>
                                </tr>                                
                                <tr>
                                    <th>Stock</th>
                                    <td>{product.stock}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{product.description}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-minus" onClick={()=>{
                                            if(qty>1)
                                            setqty(qty-1)
                                        }}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-secondary text-center" onChange={()=>{}} value={qty} />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-plus" onClick={()=>setqty(qty+1)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                            <button className="btn btn-primary px-3 mx-1"><i className="fa fa-heart mr-1"></i> Add To Wishlist</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
