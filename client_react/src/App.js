//
//
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import './css/style.css'

import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import TopNav from './component/TopNav'
import Login from './page/Login'
import Register from './page/Register'
import Home from './page/Home'



const App = () => {
    return (
        <>
            <Router>
                <TopNav />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </div>
            </Router>
            <ToastContainer />
        </>
    )
}

export default App
