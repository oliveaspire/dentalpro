const backendDomin = "http://localhost:8080"

const SummaryApi = {
    signUP: {
        url: `${backendDomin}/api/signup`,
        method: "post"
    },
    signIn: {
        url: `${backendDomin}/api/signin`,
        method: "post"
    },
    current_user: {
        url: `${backendDomin}/api/user-details`,
        method: "get"
    },
    logout_user: {
        url: `${backendDomin}/api/userLogout`,
        method: 'get'
    },

    updateUser: {
        url: `${backendDomin}/api/update-user`,
        method: "post"
    }
    ,
    savebooking: {
        url: `${backendDomin}/api/appoinmentController`,
        method: "post"
    }
    ,
    createContactUs: {
        url: `${backendDomin}/contactUs/createContactUs`,
        method: "post"
    },
    allAppointmentForUser: {
        url: `${backendDomin}/api/allAppointmentForUser`,
        method: "get"
    }


    ,
    countForDash: {
        url: `${backendDomin}/api/countForDash`,
        method: "get"
    },
    allUsers: {
        url: `${backendDomin}/api/allUsers`,
        method: 'get'
    },
    getAllContactUs: {
        url: `${backendDomin}/api/getAllContactUs`,
        method: 'get'
    },
    allAppointment: {
        url: `${backendDomin}/api/allAppointment`,
        method: 'get'
    },
    singleUserForAdmin: {
        url: `${backendDomin}/api/singleUserForAdmin/`,
        method: 'get'
    },
    singleGetContactUs: {
        url: `${backendDomin}/api/singleGetContactUs/`,
        method: 'get'
    },
    singleAppointmentForAdmin: {
        url: `${backendDomin}/api/singleAppointmentForAdmin/`,
        method: 'get'
    },
    deleteUserForAdmin: {
        url: `${backendDomin}/api/deleteUserForAdmin/`,
        method: 'delete'
    },
    deleteAppointmentForAdmin: {
        url: `${backendDomin}/api/deleteAppointmentForAdmin/`,
        method: 'delete'
    },
    deleteSingleContactUs: {
        url: `${backendDomin}/api/deleteSingleContactUs/`,
        method: 'delete'
    },

}


export default SummaryApi;