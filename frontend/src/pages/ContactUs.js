import React, { useState, useEffect } from 'react';
import SummaryApi from '../common';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function ContactUs() {
    const [scrollPos, setScrollPos] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPos(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [data, setData] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await axios.post(SummaryApi.createContactUs.url, data, {
                headers: {
                    "content-type": "application/json"
                },
            }).then((res) => {
                if (res.data.status == 200) {
                    setData(res.data.body)
                    navigate("/")
                    toast.success(`Message sent successfully to admin`)
                } else {
                    toast.error(res.data.message)

                }

            })
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        style={{ filter: "grayscale(1) contrast(1.2)", opacity: 0.4 }}
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                House No 1, Sector 17
                                Chandigarh
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-red-500 leading-relaxed">dentalpro@email.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">+91 8627867193</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Feedback
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="subject" className="leading-7 text-sm text-gray-600">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-teal-gradient border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default ContactUs
