import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import './MyOrder.css'

const MyOrder = () => {

    const { user } = useFirebase();
    console.log(user.email)
    const [orders, setOrders] = useState([])

    const run = (email) => {

    }

    /* const email = user.email; */
    /* useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []); */

    /* const email = user.email; */

    useEffect(() => {
        fetch(`https://stark-hamlet-27159.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])



    // console.log(orders)

    const handleDelete = id => {
        const url = `https://stark-hamlet-27159.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted')
                }
            })
    }

    //delete order
    /* const handleDelete = id => {
       const url = `http://localhost:5000//${id}`
       fetch(url, {
           method: 'DELETE'
      })
           .then()
   } */

    /* const remaining = orders.filter(order => order._id !== id)
                   setOrders(remaining) */

    return (
        <div>
            my order :{orders.length}
            {
                orders.map(order => <div key={order._id} className="row container order-cart ">
                    <div className="col-12 cart w-50 mx-auto p-4 ">
                        {<img src={order.img} alt="" />}
                        <h4>{order.name} </h4>
                        <p>{order.price} </p>
                        <p>{order.description} </p>
                        <button onClick={() => handleDelete(order._id)}>Delete</button>


                    </div>
                </div>)
            }


        </div>
    );
};

export default MyOrder;