import React from 'react';
import './FormCard.css'
import { useForm } from "react-hook-form";

const FormCard = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="form-s container">
            <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="Where To..." />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="10/30/2021" />

                {/*  <button>Find Now</button> */}
                <input type="number" {...register("age")} placeholder="Travel Type" />
                <input type="Submit" />
            </form>
        </div>
    );
};

export default FormCard;