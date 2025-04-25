
import './Login.css'
import React, {
    useContext, useState
} from 'react'
import { Link, useNavigate } from 'react-router-dom';


import SummaryApi from '../common';
import Context from '../context';

import { toast } from 'react-toastify';
import Lottie from 'lottie-react'
import back from "../images/back.json"

function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context)


    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url, {
            method: SummaryApi.signIn.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()
        console.log("data login data ", dataApi);
        if (dataApi.success) {
            toast.success(dataApi.message)
            sessionStorage.setItem("info", JSON.stringify(dataApi.body))
            navigate('/')
            fetchUserDetails()

        }

        if (dataApi.error) {
            toast.error(dataApi.message)
        }

    }
    return (
        <div className='h-full bg-blue-teal-gradient'>
            <div class="h-full bg-blue-teal-gradient dark:bg-gray-900">

                <div class="mx-auto">
                    <div class="flex justify-center px-6 py-12">

                        <div class="w-full xl:w-3/4 lg:w-11/12 flex">

                            <div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg
                  background-image">
                                <div className='absolute'><Link class="font-bold text-2xl" to="/">
                                    <Lottie className='h-20' title='go Home' animationData={back} />
                                </Link></div>
                            </div>

                            <div class="w-full lg:w-7/12  bg-gray-200 dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Login!</h3>
                                <form onSubmit={handleSubmit} class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">

                                    <div class="mb-4">
                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                            Email
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"

                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="name@example.com"
                                            value={data.email}
                                            onChange={handleOnChange}
                                            required
                                        />
                                    </div>
                                    <div class="mb-4 md:flex md:justify-between">
                                        <div class="w-full mb-4 md:mr-2 md:mb-0">
                                            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                                Password
                                            </label>
                                            <input
                                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                name="password"
                                                type="password"
                                                id="password"
                                                placeholder="Password"
                                                value={data.password}
                                                onChange={handleOnChange}
                                                required
                                            />

                                        </div>

                                    </div>
                                    <div class="mb-6 text-center">
                                        <button
                                            class="w-full px-4 py-2 font-bold text-white bg-blue-teal-gradient rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <hr class="mb-6 border-t" />

                                    <div class="text-center">
                                        <Link class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                            to={"/signup"}>
                                            Don't have an account? Signup!
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
