//
//
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { reset, login } from '../store/feature/authSlice'
import Spinner from '../component/Spinner'


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
    })

    const { email, password } = formData
    const { user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError)
            toast.error(message)
        if (isSuccess || user) {
            navigate('/')
        }
        dispatch( reset() )
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        dispatch( login(userData) )
    }

    if (isLoading)
        return <Spinner />

    return (
        <>
        <h1 className="jumbotron text-center bg-primary square">Register</h1>
        <div className="container col-md-4 offset-md-4 pb-5">
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    className='form-control mb-4 p-4'
                    id='email'
                    name='email'
                    value={email}
                    placeholder='Enter your email'
                    onChange={onChange}
                />
                <input
                    type='password'
                    className='form-control mb-4 p-4'
                    id='password'
                    name='password'
                    value={password}
                    placeholder='Enter your password'
                    onChange={onChange}
                />

                <button type='submit' className='btn btn-block btn-primary p-2'>Submit</button>
            </form>
            <Link to='/register'>Don't have an account? Register</Link>
        </div>
        </>
    )
}


export default Login
