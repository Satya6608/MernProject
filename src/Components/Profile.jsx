import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getCheckout } from '../Store/ActionCreators/CheckoutActionCreators';
import { getUser } from '../Store/ActionCreators/UserActionCreators';
import BuyerProfile from './BuyerProfile';

export default function Profile() {
  var [user, setUser] = useState({})
  var [orders, setOrders] = useState([])
  var dispatch = useDispatch()
  var users = useSelector((state) => state.UserStateData)
  var checkouts = useSelector((state) => state.UserStateData);
  function getAPIData() {
    dispatch(getUser())
    var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
    if (data)
      setUser(data)
  }
  useEffect(() => {
    getAPIData()
    console.log("main from called");
  }, [users.length, user])
  return (
    <>
      <div className="containr-fluid">
        <div className="row">
          <div className="col-md-6 image-box">
            {
              user.pic ?
                <img src={`/assets/productimages/${user.pic}`} width="100%" height="auto" alt="" /> :
                <img src={`/assets/img/noimage.jpg`} width="100%" height="auto" alt="" />
            }
          </div>
          <div className="col-md-6">
            <BuyerProfile user={user} />
          </div>
        </div>
      </div>
    </>
  )
}
