import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
    .then((res) => {
      setOrders(res.data.reverse());
    }).catch((error) => {
      console.log(error);
      setOrders([]);
    })
  }, []);


  return (
    <div className="orders">
      {orders.length == 0 ? (
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
      ) : (
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Mode</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order, index)=>{
              return (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.price}</td>
                  <td>{order.qty}</td>
                  <td>{order.mode}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      )}
    </div>
  );
};

export default Orders;
