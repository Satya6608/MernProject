import React from 'react'
import { Link } from 'react-router-dom'
import LeftNav from './LeftNav'

export default function AdminHome() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-md-9 col-12">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="assets/img/product-6.jpg" height="500px" alt="" />
                            </div>
                            <div className="col-md-6">
                                <table className='table table-bordered'>
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>Nitin Chauhan</td>
                                        </tr>
                                        <tr>
                                            <th>User Name</th>
                                            <td>admin</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>9873848046</td>
                                        </tr>
                                        <tr>
                                            <th>Email Address</th>
                                            <td>vishankchauhan@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <Link to="/update-profile" className='btn bg-primary p-2 w-100 d-block text-light text-center'>Update Profile</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
