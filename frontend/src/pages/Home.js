import React from 'react'
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import animateDrone from "../images/doctor.json";
import cover from "../images/cover-bg.jpg"
import saveg from "../images/teeth-whitening.svg"
import onep from "../images/oral-surgery.svg"
import twop from "../images/painless-dentistry.svg"
import threep from "../images/periodontics.svg"
import whyUs from "../images/happy.jpg";
import sarah from "../images/sarah.jpg"
import mike from "../images/mike.jpg"
import Header from '../components/Header';
function Home() {
    return (
        <div>
            <main class="w-full">
                <Header />
                <div className="bg-gray-100">
                    <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center min-h-screen rounded-br-3xl">
                        <div className="h-full absolute left  p-20 z-0">
                            <img src={cover} alt="" className="w-full h-full object-cover opacity-20" />
                        </div>

                        <div className="flex justify-around items-center relative z-10 h-100 lg:mt-16">
                            <div className="flex flex-col lg:flex-row items-center w-full">
                                <div className="text-center lg:text-left lg:flex-1">
                                    <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                                        A better life starts with a beautiful smile.
                                    </h1>
                                    <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
                                        Welcome to the Dentist Office of Dr. Thomas Dooley, where trust and comfort are priorities.
                                    </p>
                                    <Link to="/book-appoinment" className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">
                                        Book Appointment
                                    </Link>
                                </div>
                                <div className="lg:flex-1 mt-8 lg:mt-0 lg:ml-8">
                                    <Lottie className="w-full max-w-sm" animationData={animateDrone} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



                <section class="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32">
                    <div class="flex flex-col lg:flex-row lg:-mx-8">
                        <div class="w-full lg:w-1/2 lg:px-8">
                            <h2 class="text-3xl leading-tight font-bold mt-4">Welcome to the Dentist Office of Dr. Thomas Dooley</h2>
                            <p class="text-lg mt-4 font-semibold">Excellence in Dentistry in the Heart of NY</p>
                            <p class="mt-2 leading-relaxed">Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non
                                tincidunt ac, imperdiet in enim.
                                Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus mi.</p>
                        </div>

                        <div class="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
                            <div class="md:flex">
                                <div>
                                    <div class="w-16 h-16 bg-blue-600 rounded-full"></div>
                                </div>
                                <div class="md:ml-8 mt-4 md:mt-0">
                                    <h4 class="text-xl font-bold leading-tight">Everything You Need Under One Roof</h4>
                                    <p class="mt-2 leading-relaxed">Our comprehensive services allow you to receive all needed dental care
                                        right here in our state-of-art
                                        office – from dental cleanings and fillings to dental implants and extractions.</p>
                                </div>
                            </div>

                            <div class="md:flex mt-8">
                                <div>
                                    <div class="w-16 h-16 bg-blue-600 rounded-full"></div>
                                </div>
                                <div class="md:ml-8 mt-4 md:mt-0">
                                    <h4 class="text-xl font-bold leading-tight">Our Patient-Focused Approach</h4>
                                    <p class="mt-2 leading-relaxed">Your treatment plan will perfectly match your needs, lifestyle, and goals.
                                        Even if it’s been years
                                        since you last visited the dentist, we can help. Our comfortable office, compassionate team, and
                                        minimally-invasive treatments will help you feel completely at ease.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
                        <div class="md:w-1/2 md:px-4 lg:w-1/4">
                            <div class="bg-white rounded-lg border border-gray-300 p-8">
                                <img src={saveg} alt="aaaa" class="h-20 mx-auto" />

                                <h4 class="text-xl font-bold mt-4">Teeth Whitening</h4>
                                <p class="mt-1">Let us show you how our experience.</p>
                                <a href="#" class="block mt-4">Read More</a>
                            </div>
                        </div>

                        <div class="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
                            <div class="bg-white rounded-lg border border-gray-300 p-8">
                                <img src={onep} alt="" class="h-20 mx-auto" />

                                <h4 class="text-xl font-bold mt-4">Oral Surgery</h4>
                                <p class="mt-1">Let us show you how our experience.</p>
                                <a href="#" class="block mt-4">Read More</a>
                            </div>
                        </div>

                        <div class="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                            <div class="bg-white rounded-lg border border-gray-300 p-8">
                                <img src={twop} alt="" class="h-20 mx-auto" />

                                <h4 class="text-xl font-bold mt-4">Painless Dentistry</h4>
                                <p class="mt-1">Let us show you how our experience.</p>
                                <a href="#" class="block mt-4">Read More</a>
                            </div>
                        </div>

                        <div class="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                            <div class="bg-white rounded-lg border border-gray-300 p-8">
                                <img src={threep} alt="" class="h-20 mx-auto" />

                                <h4 class="text-xl font-bold mt-4">Periodontics</h4>
                                <p class="mt-1">Let us show you how our experience.</p>
                                <a href="#" class="block mt-4">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>




                <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
                    <div class="flex flex-col lg:flex-row lg:-mx-8">
                        <div class="w-full lg:w-1/2 lg:px-8">
                            <h2 class="text-3xl leading-tight font-bold mt-4">Why Choose DentalPro?</h2>
                            <p class="mt-2 leading-relaxed">At DentalPro, we are dedicated to providing top-tier dental care that prioritizes your comfort and well-being. Our state-of-the-art facilities and experienced staff ensure that every visit is a positive experience. We understand the importance of a healthy, beautiful smile and are committed to helping you achieve just that. With personalized treatment plans, advanced technology, and a compassionate approach, DentalPro stands out as your trusted partner in dental health. Join the many satisfied patients who have discovered the difference of our exceptional care.</p>
                        </div>

                        <div class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
                            <div class=" w-full h-72 ">
                                <img src={whyUs} className='rounded-lg' alt='photo' />
                            </div>

                            <p class="italic text-sm mt-2 text-center">We are thrilled to bring you a happy, healthy smile that you can be proud of. At DentalPro, your satisfaction and comfort are our top priorities, ensuring every visit leaves you smiling brighter.</p>
                        </div>
                    </div>
                </section>
                <section class="text-gray-700 body-font mt-60">
                    <div class="flex justify-center mt-10 text-4xl font-bold">
                        Why Us?
                    </div>
                    <div class="container px-36 py-12 mx-auto">
                        <div class="flex flex-wrap text-center justify-center">
                            <div class="p-4 md:w-1/4 sm:w-1/2">
                                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div class="flex justify-center">
                                        <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" class="w-32 mb-3" />
                                    </div>
                                    <h2 class="title-font font-regular text-2xl text-gray-900">Latest Machinery</h2>
                                </div>
                            </div>

                            <div class="p-4 md:w-1/4 sm:w-1/2">
                                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div class="flex justify-center">
                                        <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" class="w-32 mb-3" />
                                    </div>
                                    <h2 class="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
                                </div>
                            </div>

                            <div class="p-4 md:w-1/4 sm:w-1/2">
                                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div class="flex justify-center">
                                        <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" class="w-32 mb-3" />
                                    </div>
                                    <h2 class="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
                                </div>
                            </div>

                            <div class="p-4 md:w-1/4 sm:w-1/2">
                                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div class="flex justify-center">
                                        <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" class="w-32 mb-3" />
                                    </div>
                                    <h2 class="title-font font-regular text-2xl text-gray-900">Best Experts</h2>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="sm:flex items-center px-40 ">
                        <div class="sm:w-1/2 p-10">
                            <div class="image object-center text-center">
                                <img src="https://img.freepik.com/free-vector/flat-dia-dentista-illustration_23-2149666754.jpg?t=st=1717415748~exp=1717419348~hmac=c568ac5ce52499c7839912722b636362e50a686d788bda409560013c2731453d&w=740" />
                            </div>
                        </div>
                        <div class="sm:w-1/2 p-5">
                            <div class="text">
                                <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                                <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Hospital</span>
                                </h2>
                                <p class="text-gray-700">
                                    Welcome to Our Dental Practice! We are dedicated to providing you with the highest quality dental care in a friendly and comfortable environment. Our team of experienced professionals is committed to ensuring your oral health and enhancing your smile.
                                    <hr></hr>
                                    Our state-of-the-art facility is equipped with the latest dental technology, allowing us to offer a wide range of services, from routine cleanings and preventive care to advanced cosmetic and restorative treatments. We take pride in our patient-centered approach, tailoring our services to meet the unique needs of each individual.
                                    <hr></hr>
                                    At Our Dental Practice, we believe in building lasting relationships with our patients. Your comfort, satisfaction, and overall well-being are our top priorities. Come and experience the difference of personalized dental care. We look forward to welcoming you to our dental family!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="mt-44 ">
                    <h1 class="text-center font-bold text-4xl">Treatments</h1>
                    <div className='flex justify-center'>
                        <div class="py-11 px-14 ">
                            <a class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                                href="#">
                                <img src="https://img.freepik.com/premium-photo/cheerful-young-lady-is-lying-dental-chair-choosing-veeners-colour-with-doctor-help_317809-5350.jpg?w=900" class="shadow rounded-lg overflow-hidden border" />
                                <div class="mt-8">
                                    <h4 class="font-bold text-xl">Veneers</h4>
                                    <p class="mt-2 text-gray-600">Thin shells of porcelain or composite resin bonded to the front of teeth to improve appearance
                                    </p>

                                </div>
                            </a>

                        </div>
                        <div class="py-11 px-14 ">
                            <a class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                                href="#">
                                <img src="https://img.freepik.com/free-photo/caucasian-preteen-girl-with-braces-her-teeth-looking-mirror_169016-38672.jpg?t=st=1717414097~exp=1717417697~hmac=9f59ff004d1b029b55b76198aa148bee8f6d2be881a10fdd1fcd608ce8badedf&w=900" class="shadow rounded-lg overflow-hidden border" />
                                <div class="mt-8">
                                    <h4 class="font-bold text-xl">Braces and Orthodontics</h4>
                                    <p class="mt-2 text-gray-600">Devices used to correct misaligned teeth and jaws, improving bite and aesthetics.
                                    </p>

                                </div>
                            </a>

                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div class="py-11 px-14 ">
                            <a class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                                href="#">
                                <img src="https://img.freepik.com/free-photo/female-patient-having-procedure-done-dentist_23-2148985815.jpg?t=st=1717414144~exp=1717417744~hmac=bc63dcf26eeb379feb655bdb6ee07ca311de1ec7dbcf21ff6885c7fa09a6fadd&w=900" class="shadow rounded-lg overflow-hidden border" />
                                <div class="mt-8">
                                    <h4 class="font-bold text-xl">Teeth Cleaning</h4>
                                    <p class="mt-2 text-gray-600">Routine cleaning to remove plaque and tartar buildup to prevent cavities, gingivitis, and periodontal disease.
                                    </p>

                                </div>
                            </a>

                        </div>
                        <div class="py-11 px-14 ">
                            <a class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                                href="#">
                                <img src="https://img.freepik.com/free-photo/unrecognizable-asian-dentist-nurse-examining-male-patient-s-teeth_1098-20337.jpg?t=st=1717414189~exp=1717417789~hmac=6a3e739a50ce25ce50128e46918bb3d15963de71fb1faf6b4eb5afc163c19884&w=900" class="shadow rounded-lg overflow-hidden border" />
                                <div class="mt-8">
                                    <h4 class="font-bold text-xl">Root Canal Treatment</h4>
                                    <p class="mt-2 text-gray-600">Procedure to remove infected or damaged pulp from inside a tooth, followed by cleaning, disinfecting, and filling the space.
                                    </p>

                                </div>
                            </a>

                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div class="py-11 px-14 ">
                            <a class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                                href="#">
                                <img src="https://img.freepik.com/free-photo/dentists-treat-patients-teeth_1150-19647.jpg?t=st=1717414222~exp=1717417822~hmac=14daa25ba6bde76673d155658e32e77ce4e72756c58aeeb75afc20e87b7bd810&w=996" class="shadow rounded-lg overflow-hidden border" />
                                <div class="mt-8">
                                    <h4 class="font-bold text-xl">Fillings</h4>
                                    <p class="mt-2 text-gray-600">Used to treat cavities by removing decayed tooth material and filling the area with materials like composite resin, amalgam, or gold.
                                    </p>

                                </div>
                            </a>

                        </div>
                        <div class="py-11 px-14 ">
                            <a class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                                href="#">
                                <img src="https://img.freepik.com/premium-photo/dentist-examining-teeth-young-woman-patient-dental-clinic-dentistry-concept_333900-21810.jpg?w=900" class="shadow rounded-lg overflow-hidden border" />
                                <div class="mt-8">
                                    <h4 class="font-bold text-xl">Dental Crowns</h4>
                                    <p class="mt-2 text-gray-600">Caps placed over a damaged or decayed tooth to restore its shape, size, strength, and appearance.
                                    </p>

                                </div>
                            </a>

                        </div>
                    </div>
                    <h1 class="text-center font-bold text-4xl mb-10">And much more...</h1>
                </div>




                <section class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
                    <div class="">
                        <h2 class="text-3xl leading-tight font-bold">Honest feedbacks</h2>
                        <p class="text-gray-600 mt-2 md:max-w-lg">At DentalPro, we pride ourselves on providing exceptional dental care with a personal touch. Here’s what some of our valued patients have to say about their experiences with us.</p>

                        <a href="#" title="" class="inline-block text-teal-500 font-semibold mt-6 mt:md-0">View All Posts</a>
                    </div>

                    <div class="md:flex mt-12 md:-mx-4">
                        <div class=" md:px-4 md:w-1/2 xl:w-1/4">
                            <div class="bg-white rounded border border-gray-300">
                                <div class="w-full  overflow-hidden bg-gray-300">
                                    <img src={sarah} />
                                </div>
                                <div class="p-4">
                                    <div class="flex items-center text-sm">
                                        <span class="text-teal-500 font-semibold">Business</span>
                                        <span class="ml-4 text-gray-600">29 Nov, 2023</span>
                                    </div>
                                    <p class="text-lg font-semibold leading-tight mt-4">Marketing Executive</p>
                                    <p class="text-gray-600 mt-1">The team at DentalPro is always professional and friendly, making my visits comfortable and stress-free.
                                    </p>
                                    <div class="flex items-center mt-4">
                                        <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                                        <div class="ml-4">
                                            <p class="text-gray-600">By <span class="text-gray-900 font-semibold">Sarah Johnson</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="md:px-4 md:w-1/2 xl:w-1/4 mt-4 md:mt-0">
                            <div class="bg-white rounded border border-gray-300 ">
                                <div class="w-full h-48 overflow-hidden bg-gray-300">
                                    <img src={mike} />
                                </div>
                                <div class="p-4">
                                    <div class="flex items-center text-sm">
                                        <span class="text-teal-500 font-semibold">Business</span>
                                        <span class="ml-4 text-gray-600">29 May, 2024</span>
                                    </div>
                                    <p class="text-lg font-semibold leading-tight mt-4">Software Engineer</p>
                                    <p class="text-gray-600 mt-1">Dr. Dooley and his staff are fantastic. They take the time to explain procedures and ensure you're comfortable.
                                    </p>
                                    <div class="flex items-center mt-4">
                                        <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                                        <div class="ml-4">
                                            <p class="text-gray-600">By <span class="text-gray-900 font-semibold">Michael Brown</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class=" md:px-4 md:w-1/2 xl:w-1/4">
                            <div class="bg-white rounded border border-gray-300">
                                <div class="w-full  overflow-hidden bg-gray-300">
                                    <img src={sarah} />
                                </div>
                                <div class="p-4">
                                    <div class="flex items-center text-sm">
                                        <span class="text-teal-500 font-semibold">Business</span>
                                        <span class="ml-4 text-gray-600">29 Nov, 2023</span>
                                    </div>
                                    <p class="text-lg font-semibold leading-tight mt-4">Marketing Executive</p>
                                    <p class="text-gray-600 mt-1">The team at DentalPro is always professional and friendly, making my visits comfortable and stress-free.
                                    </p>
                                    <div class="flex items-center mt-4">
                                        <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                                        <div class="ml-4">
                                            <p class="text-gray-600">By <span class="text-gray-900 font-semibold">Sarah Johnson</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="md:px-4 md:w-1/2 xl:w-1/4 mt-4 md:mt-0">
                            <div class="bg-white rounded border border-gray-300 ">
                                <div class="w-full h-48 overflow-hidden bg-gray-300">
                                    <img src={mike} />
                                </div>
                                <div class="p-4">
                                    <div class="flex items-center text-sm">
                                        <span class="text-teal-500 font-semibold">Business</span>
                                        <span class="ml-4 text-gray-600">29 May, 2024</span>
                                    </div>
                                    <p class="text-lg font-semibold leading-tight mt-4">Software Engineer</p>
                                    <p class="text-gray-600 mt-1">Dr. Dooley and his staff are fantastic. They take the time to explain procedures and ensure you're comfortable.
                                    </p>
                                    <div class="flex items-center mt-4">
                                        <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                                        <div class="ml-4">
                                            <p class="text-gray-600">By <span class="text-gray-900 font-semibold">Michael Brown</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </section>



                <section
                    class="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
                    <div class="md:flex md:items-center md:justify-center">
                        <h2 class="text-xl font-bold text-white">Get in touch with us today! <br class="block md:hidden" />Call us on: +1
                            562-789-1935</h2>
                        <Link to="/book-appoinment"
                            class="px-8 py-4 bg-white text-blue-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0">Book
                            Appointment</Link>
                    </div>
                </section>


            </main>
        </div>
    )
}

export default Home
