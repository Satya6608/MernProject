import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'


import { getUser } from '../Store/ActionCreators/UserActionCreators';

export default function Profile() {
  var [user, setUser] = useState({})
  var dispatch = useDispatch()
  var users = useSelector((state) => state.UserStateData)
  function getAPIData() {
    dispatch(getUser())
    var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
    if (data)
      setUser(data)
  }
  useEffect(() => {
    getAPIData()
  }, [users.length])
  return (
    <>
      <div className="containr-fluid">
        <div className="row">
          <div className="col-md-6">
            {
              user.pic?
              <img src={`/assets/productimages/${user.pic}`} width="100%" height="550px"  alt="" />:
              <img src={`/assets/img/noimage.jpg`} width="100%" height="550px" alt="" />
            }
          </div>
          <div className="col-md-6">
            <table className='table table-bordered'>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <th>User Name</th>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <th>Address Line1</th>
                  <td>{user.addressline1}</td>
                </tr>
                <tr>
                  <th>Address Line2</th>
                  <td>{user.addressline2}</td>
                </tr>
                <tr>
                  <th>Address Line3</th>
                  <td>{user.addressline4}</td>
                </tr>
                <tr>
                  <th>Pin</th>
                  <td>{user.pin}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{user.city}</td>
                </tr>
                <tr>
                  <th>State</th>
                  <td>{user.state}</td>
                </tr>
                <tr>
                  <td colSpan={2}><Link to={`/update-profile/${user.id}`} className='btn btn-primary w-100'>Update Profile</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
