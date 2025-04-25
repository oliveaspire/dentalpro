import React, { useState } from 'react'
import './Signup.css'
import Lottie from 'lottie-react'
import back from "../images/back.json"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import SummaryApi from '../common';


function Signup() {


	const [data, setData] = useState({
		firstname: "",
		lastname: "",
		phoneNumber: "",
		email: "",
		password: "",
		confirmPassword: "",
		role: ""

	})
	const navigate = useNavigate()

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

		if (data.password === data.confirmPassword) {

			const dataResponse = await fetch(SummaryApi.signUP.url, {
				method: SummaryApi.signUP.method,
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify(data)
			})

			const dataApi = await dataResponse.json()
			console.log(dataApi);
			if (dataApi.success === true) {
				toast.success(dataApi.message)
				navigate("/login")
			}

			else {
				toast.error(dataApi.message)
			}

		} else {
			toast.error("Please check password and confirm password")
		}

	}
	return (
		<div>
			<div class="h-full bg-blue-teal-gradient  dark:bg-gray-900">

				<div class="mx-auto">
					<div class="flex justify-center px-6 py-12">

						<div class="w-full xl:w-3/4 lg:w-11/12 flex">

							<div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg
                  background-image">
								<div className='absolute'><Link class="font-bold text-2xl" to="/">
									<Lottie className='h-20' title='go Home' animationData={back} />
								</Link></div>
							</div>

							<div class="w-full lg:w-7/12 bg-gray-200 dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
								<h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
								<form onSubmit={handleSubmit} class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
									<div class="mb-4 md:flex md:justify-between">
										<div class="mb-4 md:mr-2 md:mb-0">
											<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
												First Name
											</label>
											<input
												class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
												id="firstname"
												name='firstname'
												type="text"
												value={data.firstname}
												onChange={handleOnChange}
												placeholder="First Name"
											/>
										</div>
										<div class="md:ml-2">
											<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
												Last Name
											</label>
											<input
												class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
												id="lastname"
												name='lastname'
												type="text"
												value={data.lastname}
												onChange={handleOnChange}

												placeholder="Last Name"
											/>
										</div>
									</div>
									<div class="mb-4">
										<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
											Email
										</label>
										<input
											class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="email"
											type="email"
											name='email'
											value={data.email}
											placeholder="Email"
											onChange={handleOnChange}

										/>
									</div>
									<div class="mb-4">
										<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="phoneNumber">
											Phone Number
										</label>
										<input
											class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="phoneNumber"
											type="number"
											name='phoneNumber'
											value={data.phoneNumber}
											placeholder="Phone Number"
											onChange={handleOnChange}

										/>
									</div>
									<div class="mb-4">
										<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="role">
											Select Role
										</label>
										<select
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white bg-white dark:bg-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="role"
											name="role"
											value={data.role}
											onChange={handleOnChange}
											required
										>
											<option disabled value="">--- Select Role ---</option>
											<option value={0}>User</option>
											<option value={1}>Doctor</option>
										</select>
									</div>
									<div class="mb-4 md:flex md:justify-between">
										<div class="mb-4 md:mr-2 md:mb-0">
											<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
												Password
											</label>
											<input
												class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
												id="password"
												type="password"
												name='password'
												value={data.password}
												onChange={handleOnChange}

												placeholder="******************"
											/>

										</div>
										<div class="md:ml-2">
											<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
												Confirm Password
											</label>
											<input
												class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
												id="confirmPassword"
												name='confirmPassword'
												type="password"
												value={data.confirmPassword}
												onChange={handleOnChange}

												placeholder="******************"
											/>
										</div>
									</div>
									<div class="mb-6 text-center">
										<button
											class="w-full px-4 py-2 font-bold text-white bg-blue-teal-gradient rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
											type="submit"
										>
											Register Account
										</button>
									</div>
									<hr class="mb-6 border-t" />

									<div class="text-center">
										<Link class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
											to="/login">
											Already have an account? Login!
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

export default Signup
