import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function AppointmentTable() {
    const infoo = sessionStorage.getItem("info")
    const dataaaa = infoo ? JSON.parse(infoo) : null
    console.log(dataaaa, "dataaaa")
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getDataa = async () => {
        try {
            const result = await axios.get(SummaryApi.allAppointment.url, {
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

    const handleView = (id) => {
        navigate(`/AppointmentView/${id}`)
    }

    const deleteHandler = (id) => {
        console.log(id, "iddd")
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${SummaryApi.deleteAppointmentForAdmin.url}${id}`, {
                    headers: {
                        Authorization: `Bearer ${dataaaa?.token}`
                    }
                })
                getDataa()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const handleUpdateStatus = async (id, newStatus) => {
        try {
            console.log(id, "iddd")
            console.log(newStatus, "new status")
            const response = await axios.put(`http://localhost:8080/api/appointmentAcceptRejectByDoctor/${id}`, { status: newStatus }, {
                headers: {
                    Authorization: `Bearer ${dataaaa?.token}`
                }
            });

            let statusText = '';
            if (newStatus === '1') statusText = 'Accepted';
            else if (newStatus === '2') statusText = 'Rejected';

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `User has been ${statusText}`,
                showConfirmButton: false,
                timer: 1500
            });

            getDataa();
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while updating status!',
            });
        }
    };

    const backkk = () => {
        navigate(-1)
    }
    return (
        <>
            (
            <div className="min-h-screen bg-gray-100 flex">

                <main className="flex-1 p-8">
                    <header className="mb-8 flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-gray-700">
                            Welcome, <span style={{ color: "rgb(49, 130, 206)" }}>{dataaaa?.firstname}</span>
                        </h1>
                        <Link className="inline-block mb-5 text-right w-full">
                            <button onClick={backkk} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Back
                            </button>
                        </Link>

                    </header>


                    <section className="mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-medium text-gray-700 mb-4">Users Information</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto border-collapse border border-gray-200">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 border border-gray-300">#</th>
                                            <th className="px-4 py-2 border border-gray-300">Name</th>
                                            <th className="px-4 py-2 border border-gray-300">Phone Number</th>
                                            <th className="px-4 py-2 border border-gray-300">Treatment</th>
                                            <th className="px-4 py-2 border border-gray-300">Message</th>
                                            <th className="px-4 py-2 border border-gray-300">Status</th>
                                            <th className="px-4 py-2 border border-gray-300">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((user, index) => (
                                            <tr key={user._id} className="hover:bg-gray-100">
                                                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                                                <td className="px-4 py-2 border border-gray-300">{user?.fullname}</td>
                                                <td className="px-4 py-2 border border-gray-300">{user?.phone}</td>
                                                <td className="px-4 py-2 border border-gray-300">{user?.treatment}</td>
                                                <td className="px-4 py-2 border border-gray-300">{user?.message}</td>
                                                {console.log(user, "user")}
                                                <td className="px-4 py-2 border border-gray-300">
                                                    <select
                                                        name="status"
                                                        defaultValue=""
                                                        value={user.status}
                                                        disabled={dataaaa.role !== 1}
                                                        onChange={(e) => handleUpdateStatus(user.userId._id, e.target.value)}
                                                        className="border rounded px-2 py-1"
                                                    >
                                                        <option value="" disabled>---Select---</option>
                                                        <option value="0">Pending</option>
                                                        <option value="1">Accepted</option>
                                                        <option value="2">Rejected</option>
                                                    </select>
                                                </td>
                                                <td className="px-4 py-2 border border-gray-300">
                                                    <button
                                                        onClick={() => handleView(user?._id)}
                                                        className="px-4 py-1 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                    >
                                                        View
                                                    </button>
                                                    <button
                                                        onClick={() => deleteHandler(user?._id)}
                                                        className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            );
        </>
    )
}

export default AppointmentTable