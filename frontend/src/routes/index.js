import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import BookAp from '../pages/BookAp'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Treatments from '../pages/Treatments'
import ContactUs from '../pages/ContactUs'
import Dashboard from '../pages/Dashboard'
import UserTable from '../pages/UserTable'
import ContactUsTable from '../pages/ContactUsTable'
import AppointmentTable from '../pages/AppointmentTable'
import UserInfo from '../pages/UserInfo'
import ContactUsView from '../pages/ContactUsView'
import AppointmentView from '../pages/AppointmentView'
import DoctorTable from '../pages/DoctorTable'
import ViewAppointment from '../pages/ViewAppointment'



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about-us",
                element: <AboutUs />
            },
            {
                path: "book-appoinment",
                element: <BookAp />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "login",
                element: <Login />
            },

            {
                path: "treatments",
                element: <Treatments />
            },
            {
                path: "contact-us",
                element: <ContactUs />
            },
            {
                path: "ViewAppointment",
                element: <ViewAppointment />
            },

            {
                path: "Dashboard",
                element: <Dashboard />
            },
            {
                path: "UserTable",
                element: <UserTable />
            },

            {
                path: "DoctorTable",
                element: <DoctorTable />
            },
            {
                path: "ContactUsTable",
                element: <ContactUsTable />
            },
            {
                path: "AppointmentTable",
                element: <AppointmentTable />
            },
            {
                path: "UserInfo/:id",
                element: <UserInfo />
            },
            {
                path: "ContactUsView/:id",
                element: <ContactUsView />
            },
            {
                path: "AppointmentView/:id",
                element: <AppointmentView />
            },

        ]
    }
])


export default router