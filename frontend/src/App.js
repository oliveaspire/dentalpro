import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { loginRedux } from './store/userSlice';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const dispatch = useDispatch()


  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: 'include'
    })

    const dataApi = await dataResponse.json()
    console.log(dataApi);
    if (dataApi.success) {
      dispatch(loginRedux(dataApi.data))
    }
  }

  useEffect(() => {

    fetchUserDetails()


  }, [])


  return (
    <>
      <Context.Provider value={{
        fetchUserDetails,

      }}>

        <Header />
        <ScrollToTop />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ width: 'auto', maxWidth: '500px' }}
        />
        <main className='min-h-[calc(100vh-120px)] mt-36 '>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
