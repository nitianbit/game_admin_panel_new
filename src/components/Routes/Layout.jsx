
import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AppContext } from '../../services/context/AppContext'
import { Navbar, SideBar } from '..';

const Layout = () => {
    const { isLoggedIn } = useContext(AppContext);

    console.log(isLoggedIn)

    return !isLoggedIn ?
        <div className='d-flex '>
            <SideBar />
            <div className="flex-1">
                <Navbar />
                <Outlet />
            </div>
        </div>
        : <Navigate to="/" />

}

export default Layout
