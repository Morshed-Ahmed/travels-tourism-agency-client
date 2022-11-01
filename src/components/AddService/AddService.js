import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://stark-hamlet-27159.herokuapp.com/services', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert('added successfully')

                    reset();
                }
            })
        /* .then(res => {
            if (res.data.insertedId) {
                alert('added successfully')
                reset();
            }
        }) */
    };
    return (
        <div>
            add service



            <div className=" ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> <br />
                    <input {...register("description",)} placeholder="Description" /> <br />
                    <input type="number" {...register("price",)} placeholder="Price" /> <br />
                    <input {...register("img",)} placeholder="Image Url" /> <br />
                    <input type="submit" />
                </form>
            </div>
        </div>

    );
};

export default AddService;