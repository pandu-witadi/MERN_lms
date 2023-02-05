//
//
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import {
    AppstoreOutlined,
    LoginOutlined,
    UserAddOutlined,
    LogoutOutlined,
    CoffeeOutlined
} from '@ant-design/icons'

import { reset, logout } from '../store/feature/authSlice'
const { Item, SubMenu } = Menu


const TopNav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)
    const onLogout = () => {
        dispatch( logout() )
        dispatch( reset() )
        navigate('/')
    }

    return (
        <Menu mode="horizontal">
            <Item icon={<AppstoreOutlined />}>
                <Link to='/'>Home</Link>
            </Item>
            { user ? (
                <SubMenu icon={<CoffeeOutlined /> } className="float-right" title={ user && user.username }>
                <Item onClick={onLogout} icon={<LogoutOutlined />} className="float-right">
                    Logout
                </Item>
                </SubMenu>
            ) :
                (<>
                <Item icon={<LoginOutlined />}>
                    <Link to='/login'>Login</Link>
                </Item>
                <Item icon={<UserAddOutlined />}>
                    <Link to='/register'>Register</Link>
                </Item>
                </>)
        }

        </Menu>
    )
}

export default TopNav
