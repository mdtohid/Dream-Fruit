import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log(data.name);
        reset();
    };

    console.log()
    return (
        <div className=''>
            <h3 className='text-center text-info my-3'>Add New Item</h3>
            <form className='my-2 col-sm-12 col-lg-10 mx-auto ' onSubmit={handleSubmit(onSubmit)}>
                <div className='d-lg-flex align-items-center mb-2 col-6 mx-auto'>
                    <div className='col-3'>
                        <label>Name:</label>
                    </div>
                    <div className='col-9 w-50'>
                        <input type='text' className='w-100 p-2 form-control' {...register("name", { required: true })} required />
                    </div>
                </div>

                <div className='d-lg-flex align-items-center mb-3 col-6 mx-auto'>
                    <div className='col-3'>
                        <label>Price:</label>
                    </div>
                    <div className='col-9 w-50'>
                        <input type='number' className='w-100 p-2 form-control' {...register("price", { required: true })} required />
                    </div>
                </div>

                <div className='d-lg-flex align-items-center mb-3 col-6 mx-auto'>
                    <div className='col-3'>
                        <label>Quantity:</label>
                    </div>
                    <div className='col-9 w-50'>
                        <input type='number' className='w-100 p-2 form-control' {...register("quantity", { required: true })} required />
                    </div>
                </div>
                
                <div className='d-lg-flex align-items-center mb-3 col-6 mx-auto'>
                    <div className='col-3'>
                        <label>Supplier Name:</label>
                    </div>
                    <div className='col-9 w-50'>
                        <input type='text' className='w-100 p-2 form-control' {...register("supplierName", { required: true })} required />
                    </div>
                </div>

                <div className='d-lg-flex align-items-center mb-3 col-6 mx-auto'>
                    <div className='col-3'>
                        <label>Description:</label>
                    </div>
                    <div className='col-9 w-50'>
                        <textarea type='text' className='w-100 p-2 form-control' {...register("description", { required: true })} required />
                    </div>
                </div>

                <div className='d-lg-flex align-items-center mb-3 col-6 mx-auto'>
                    <div className='col-3'>
                        <label>Photo url:</label>
                    </div>
                    <div className='col-9 w-50'>
                        <input type='url' className='w-100 p-2 form-control' {...register("photoUrl", { required: true })} required />
                    </div>
                </div>

                <div className='col-4 mx-auto my-2'><input className='btn btn-info w-50' type="submit" /></div>
            </form>
        </div>
    );
};

export default AddItem;