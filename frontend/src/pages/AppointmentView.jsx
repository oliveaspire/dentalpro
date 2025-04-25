import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SummaryApi from '../common';
import axios from 'axios';

function AppointmentView() {

    const infoo = sessionStorage.getItem("info")
    const dataaaa = infoo ? JSON.parse(infoo) : null
    console.log(dataaaa, "dataaaa")
    const [data, setData] = useState("")
    const navigate = useNavigate()
    const idd = useParams().id

    const getDataa = async () => {
        try {
            const result = await axios.get(`${SummaryApi.singleAppointmentForAdmin.url}${idd}`, {
                headers: {
                    Authorization: `Bearer ${dataaaa?.token}`
                }
            })
            console.log(result, "result")
            setData(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getDataa()
    }, [])

    const backkk = () => {
        navigate(-1)
    }

    return (
        <div className="sm:flex sm:flex-col md:flex-row items-center p-5">

            <div className="w-full md:w-1/2 p-5 text-center">
                <img
                    className="mx-auto w-55 h-50 object-cover "
                    src="https://img.freepik.com/free-vector/flat-dia-dentista-illustration_23-2149666754.jpg?t=st=1717415748~exp=1717419348~hmac=c568ac5ce52499c7839912722b636362e50a686d788bda409560013c2731453d&w=740"
                    alt="User Avatar"
                />
            </div>


            <div className="w-full md:w-1/2 p-5">
                <Link className="inline-block mb-5 text-right w-full">
                    <button onClick={backkk} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Back
                    </button>
                </Link>
                <div className="text">
                    <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                        Appointment <span className="text-indigo-600">Detail</span>
                    </h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your full name"
                                disabled
                                value={data?.fullname}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your phone number"
                                disabled
                                value={data?.phone}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium">Treatment</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your phone number"
                                disabled
                                value={data?.treatment}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium">Appointment</label>
                            <input
                                type="text"
                                id="role"
                                name="status"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your phone number"
                                disabled
                                value={data?.status === 0 ? "Pending" : data?.status === 1 ? "Accepted" : "Rejected"}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium">Message</label>
                            <textarea
                                className="mt-1 block w-full h-32 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                rows="6"
                                cols="50"
                                disabled
                                value={data?.message}
                            />

                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default AppointmentView;
