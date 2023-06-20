import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik } from 'formik';

function AddTask({ open, setOpen, addNewTask, values, validationSchema }) {
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <h2 className="text-xl font-bold mb-2">Add New Task</h2>
                    <div className='border-b-2 border-solid border-gray-500'></div>

                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Formik
                            initialValues={values}
                            onSubmit={addNewTask}
                            validationSchema={validationSchema}
                        >
                            {({ values, errors, handleChange }) =>

                            (

                                <Form>

                                    <div className='flex justify-between  mt-5 '>
                                        <div className='w-full '>
                                            <label htmlFor="">Title</label>
                                            <input type="text" name="title" value={values.title} onChange={handleChange} className="appearance-none bg-white border border-gray-300 rounded py-2 px-4 w-full" />
                                            {errors && <p className='text-red' style={{ color: "red" }}>{errors.title}</p>}
                                        </div>
                                        <div className='w-full ml-5'>
                                            <label htmlFor="">Date</label>
                                            <input type="date" name='date' value={values.date} onChange={handleChange} className="appearance-none bg-white border border-gray-300 rounded py-2 px-4 w-full" />
                                            {errors && <p className='text-red' style={{ color: "red" }}>{errors.date}</p>}
                                        </div>

                                    </div>
                                    <div className='w-full mt-5'>
                                        <label htmlFor="">Discription</label>
                                        <textarea type="text" name='discription' value={values.discription} onChange={handleChange} className="appearance-none bg-white border border-gray-300 rounded py-2 px-4 w-full" />
                                        {errors && <p className='text-red' style={{ color: "red" }}>{errors.discription}</p>}
                                    </div>
                                    <div className='mt-5'>
                                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded shadow">
                                            Add Task
                                        </button>
                                    </div>
                                </Form>)}
                        </Formik>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddTask
