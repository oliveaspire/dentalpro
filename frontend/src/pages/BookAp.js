import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import happy from "../images/hapy.jpg"

import treatmentCategory from '../helpers/TreatmentCategory'
import Lottie from 'lottie-react'
import back from "../images/back.json"
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import axios from 'axios'
function BookAp() {
  const infoo = sessionStorage.getItem("info")
  const dataaaa = infoo ? JSON.parse(infoo) : null
  console.log(dataaaa, "dataaaa")
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    treatment: "",
    message: ""
  })

  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target

    console.log(name, "name")
    console.log(value, "value")

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    try {
      if (!dataaaa) {
        toast.error("Login in first")
      }
      e.preventDefault()


      const dataResponse = await axios.post(SummaryApi.savebooking.url, data, {
        headers: {
          Authorization: `Bearer ${dataaaa?.token}`
        }
      })
      console.log(dataResponse, "jkjk");

      if (dataResponse.data.success) {
        setData(dataResponse.data.data)
        toast.success(dataResponse.data.message)
        navigate("/")
      } else {
        toast.error(dataResponse.data.message)

      }


    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <main>
        <section class=" flex flex-col md:flex-row h-screen items-center">

          <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 h-screen px-6 lg:px-16 xl:px-24
        flex items-center justify-center">

            <div class="w-full h-100 pt-2">

              <Link class="font-bold text-2xl" to="/">
                <Lottie className='h-20' title='go Home' animationData={back} />
              </Link>

              <h1 class="text-xl md:text-3xl font-bold leading-tight mt-12">Book your appointment with DentalPro in 2
                minutes</h1>
              <p class="text-gray-700 mt-4">At DentalPro, we prioritize your time and convenience. Our streamlined booking process ensures you can schedule your appointment quickly and easily. Experience top-notch dental care without the hassle. Join us for a healthier, brighter smile today!</p>

              <form class="mt-6" onSubmit={handleSubmit}>
                <div>
                  <label class="block text-gray-700">Full Name</label>
                  <input type="text" name="fullname" id="fullname" value={data.fullname} onChange={handleOnChange} placeholder="Enter Full Name" class="w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus="" required="" />
                </div>

                <div class="flex flex-col md:flex-row items-start mt-4 md:-mx-4">
                  <div class="w-full md:mx-4">
                    <label class="block text-gray-700">Phone Number</label>
                    <input type="number" name="phone" id="phone" value={data.phone} onChange={handleOnChange} placeholder="Enter Phone Number" class="w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none" required="" />
                  </div>

                  <div class="w-full md:mx-4 mt-4 md:mt-0">
                    <label htmlFor='Treatment' class="block text-gray-700">Treatment</label>
                    <div class="relative mt-1">
                      <select name="treatment" id="treatment" value={data.treatment} onChange={handleOnChange} class="w-full px-4 py-3 rounded bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none appearance-none" required>
                        <option value={""} >Select Treatment</option>
                        {
                          treatmentCategory.map((el, index) => {
                            return (
                              <option value={el.value} key={el.value + index}> {el.label} </option>
                            )
                          })
                        }
                      </select>

                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full mt-4">
                  <label class="block text-gray-700">Message</label>
                  <textarea name="message" id="message" placeholder="Write message" value={data.message} onChange={handleOnChange} class="w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none resize-none" rows="3" required=""></textarea>
                </div>

                <button type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded
              px-4 py-3 mt-4">Book Appointment</button>
              </form>

              <p class="text-sm text-gray-500 mt-12">© 2019 DentalPro - All Rights Reserved.</p>
            </div>
          </div>

          <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 h-screen">
            <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=100" alt="" class="w-full h-screen object-cover" />
          </div>

        </section>

      </main>
    </div>
  )
}

export default BookAp
