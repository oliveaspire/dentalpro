import React, { useEffect, useState } from 'react';
import axios from "axios"
import SummaryApi from '../common';
import { Link } from 'react-router-dom';

function Dashboard() {
    const infoo = sessionStorage.getItem("info")
    const dataaaa = infoo ? JSON.parse(infoo) : null
    console.log(dataaaa, "dataaaa")
    const [data, setData] = useState("")

    const getCountss = async () => {
        try {
            const result = await axios.get(SummaryApi.countForDash.url, {
                headers: {
                    Authorization: `Bearer ${dataaaa?.token}`
                }
            })
            console.log(result, "result")
            setData(result.data.body)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCountss()
    }, [])


    return (
        <div className="min-h-screen bg-gray-100 flex">

            <main className="flex-1 p-8">
                <header className="mb-8 flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-gray-700">Welcome, <span style={{ color: "rgb(49, 130, 206)" }}>{dataaaa?.firstname}!</span></h1>

                </header>


                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to={"/UserTable"}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-medium text-gray-700">Total Users</h2>
                            <p className="text-3xl font-bold text-blue-500">{data?.userCount}</p>
                        </div>
                    </Link>
                    <Link to={"/DoctorTable"}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-medium text-gray-700">Total Doctors</h2>
                            <p className="text-3xl font-bold text-blue-500">{data?.doctorCount}</p>
                        </div>
                    </Link>
                    <Link to={"/ContactUsTable"}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-medium text-gray-700">Contact Us</h2>
                            <p className="text-3xl font-bold text-green-500">{data?.contactUs}</p>
                        </div>
                    </Link>
                    <Link to={"/AppointmentTable"}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-medium text-gray-700">Appointments</h2>
                            <p className="text-3xl font-bold text-purple-500">{data?.appointments}</p>
                        </div>
                    </Link>

                </section>


                <section className="mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
                            <img
                                src="https://png.pngtree.com/background/20230617/original/pngtree-business-growth-graph-in-3d-rendering-picture-image_3668005.jpg"
                                alt="Sales Chart"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Dashboard;
