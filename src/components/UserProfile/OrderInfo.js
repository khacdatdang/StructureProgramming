import React, { useEffect } from 'react';
import axios from 'axios';

function OrderInfo() {
    useEffect(() => {
       axios.get(`https://ltct-order.herokuapp.com/order-user/1`).then(res => {
           console.log(res);
       })
    }, [])
  return <div>
      Hi I'm order info
  </div>;
}

export default OrderInfo;
