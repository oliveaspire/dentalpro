import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function ViewAppointment() {
    const infoo = sessionStorage.getItem("info")
    const dataaaa = infoo ? JSON.parse(infoo) : null
    console.log(dataaaa, "dataaaa")
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getDataa = async () => {
        try {
            const result = await axios.get(SummaryApi.allAppointmentForUser.url, {
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


    return (
        <>
            (
            <div className="min-h-screen bg-gray-100 flex">
                <main className="flex-1 p-8">
                    <header className="mb-8 flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-gray-700">
                            Welcome, <span style={{ color: "rgb(49, 130, 206)" }}>{dataaaa?.firstname}</span>
                        </h1>


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
                                                <td className="px-4 py-2 border border-gray-300">{user?.status === 0 ? "Pending" : user?.status === 1 ? "Accepted" : "Rejected"}</td>

                                                <td className="px-4 py-2 border border-gray-300">
                                                    <button
                                                        onClick={() => handleView(user?._id)}
                                                        className="px-4 py-1 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                    >
                                                        View
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

export default ViewAppointment