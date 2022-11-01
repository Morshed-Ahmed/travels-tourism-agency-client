import React, { useEffect, useState } from 'react';
import './BookNow.css'
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';


const BookNow = () => {
    const { bookNowDtls } = useParams();
    const { user } = useFirebase()

    console.log(bookNowDtls)


    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://stark-hamlet-27159.herokuapp.com/services/${bookNowDtls}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch("https://stark-hamlet-27159.herokuapp.com/allOrder", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
    };
    console.log(watch("example"));

    data.email = user.email;
    const handleMyOrder = () => {

        console.log(data)
        fetch("https://stark-hamlet-27159.herokuapp.com/addOrder", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
    }



    return (
        <div className="container">


            <div className="row">
                <div className="col-8 border">

                    <img className="img-fluid" src={data.img} alt="" />
                    <h3>{data.name}</h3>
                    <p>{data.description} </p>
                    <small>${data.price}/Per Person </small>
                    <button onClick={handleMyOrder}>Order</button>
                </div>
                <div className="col-4 border">
                    <form className="mt-5 form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue="" {...register(" name")} placeholder="Your Name" /> <br />
                        <input  {...register("email")} placeholder="Your Email" /> <br />
                        <input {...register("address")} placeholder="Your Address" /> <br />


                        <input {...register("number", { required: true })} placeholder="Your Phone Number" /> <br />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />


                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNow;