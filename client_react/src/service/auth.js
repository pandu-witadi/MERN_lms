//
//
import axios from 'axios'

import CF from '../config/default'


const register = async (userData) => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await axios.post(CF.baseURL + '/api/auth/register', userData, config)
    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const login = async (userData) => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await axios.post(CF.baseURL + '/api/auth/login', userData, config)
    return response.data
}

const authService = {
    register,
    logout,
    login
}

export default authService
