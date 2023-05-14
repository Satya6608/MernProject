import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


import { addContact } from '../Store/ActionCreators/ContactActionCreators'
export default function Contact() {
    var [data, setData] = useState([])
    var [show, setShow] = useState(false)
    var dispatch = useDispatch()
    function getData(e) {
        var { name, value } = e.target;
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
        setShow(false)
    }
    function postData(e) {
        e.preventDefault();
        dispatch(addContact({...data}))
        var frm = document.getElementsByName('contact-form')[0];
        frm.reset();
        setShow(true)
    }
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Contact For Any Queries</span></h2>
                </div>
                <div className="row px-xl-5">
                    <div className="col-lg-7 mb-5">
                        <div className="contact-form">
                            {
                                show ?
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Hurrey!!</strong> You have submit your query successfully
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div> : ""
                            }
                            <form name="contact-form" onSubmit={postData}>
                                <div className="control-group">
                                    <input type="text" className="form-control mb-3" onChange={getData} name="name" placeholder="Your Name"
                                        required="required" />
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control mb-3" onChange={getData} name="email" placeholder="Your Email Id"
                                        required="required" />
                                </div>
                                <div className="control-group">
                                    <input type="phone" className="form-control mb-3" onChange={getData} name="phone" placeholder="Your Phone Number"
                                        required="required" />
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control mb-3" onChange={getData} name="subject" placeholder="Subject"
                                        required="required" />
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control mb-3" rows="6" onChange={getData} name="message" placeholder="Message"
                                        required="required"
                                    ></textarea>
                                </div>
                                <div>
                                    <button className="btn btn-primary py-2 px-4 w-100" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-5">
                        <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
                        <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                        <div className="d-flex flex-column mb-3">
                            <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>B-24, Sector-3 Noida UttarPradesh</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>satyaprkash6608@gmail.com</p>
                            <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+91-8076419914</p>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>B-24, Sector-3 Noida UttarPradesh</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>satyaprkash6608@gmail.com</p>
                            <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+91-8076419914</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
