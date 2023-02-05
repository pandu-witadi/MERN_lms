//
//
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate, Link } from 'react-router-dom'

import { reset, register } from '../store/feature/authSlice'
import Spinner from '../component/Spinner'


const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        'email': '',
        'username': '',
        'password': '',
        'confirmPassword': ''
    })

    const { email, username, password, confirmPassword } = formData
    const { isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError)
            toast.error(message)
        if (isSuccess) {
            toast.error('register success')
            navigate('/login')
        }
        dispatch( reset() )
    }, [isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword)
            toast.error('password not match')
        else {
            const userData = {
                email,
                password,
                username
            }
            dispatch( register(userData) )
        }
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
                        type='text'
                        className='form-control mb-4 p-4'
                        id='username'
                        name='username'
                        value={username}
                        placeholder='Enter your username'
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

                    <input
                        type='password'
                        className='form-control mb-4 p-4'
                        id='confirmPassword'
                        name='confirmPassword'
                        value={confirmPassword}
                        placeholder='Re-Enter your password'
                        onChange={onChange}
                    />
                    <button type='submit' className='btn btn-block btn-primary p-2'>Submit</button>
                </form>
                <Link to='/login'>Already have an account? Login</Link>
            </div>
        </>
    )
}

export default Register
