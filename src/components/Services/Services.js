import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Services.css'



const Services = () => {
    const { user } = useFirebase();
    const [services, setServices] = useState([])



    console.log(services)
    useEffect(() => {
        fetch('https://stark-hamlet-27159.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    /* console.log(services) */

    /* const handleAddToOrder = (index) => {
        console.log(services[index])
        const data = services[index];
        data.email = user.email;
        fetch("http://localhost:5000/addOrder", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
    } */
    return (

        <div className=" service-style ">
            <div className="container">
                <p className="pt-5">Choose Your Package</p>
                <h3 className="mb-3">Select Your Best Package <br /> For Your Travel</h3>
                <div className="row">

                    {
                        services.map((service) => <div className="col-4" key={service._id}>
                            <img className="img-fluid" src={service.img} alt="" />
                            <div className="cart-style">
                                <h5>${service.price}/Per Person</h5>
                                <p>5 Days/6 night</p>
                                <h4>{service.name}</h4>
                                <p>{service.description} </p>
                                <Link to={`/booknow/${service._id}`}>
                                    <button /* onClick={() => handleAddToOrder(index)}  */ className="cart-btn" >Read More </button>
                                </Link>
                            </div>

                        </div>)
                    }


                </div>
            </div>
        </div>

    );
};

export default Services;