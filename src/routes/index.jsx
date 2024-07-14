import { Login, Signup, Dashboard, Users, PaymentRequest } from '../pages'

export const navigateTo = (navigate, path) => navigate(`/admin${path}`)

export const authRoutes = [
    {
        path: "/admin",
        element: <Login />,

    },
    {
        path: "/admin/signup",
        element: <Signup />,

    },
]

export const openRoutes = [];


export const protectedRoutes = [
    {
        path: "/admin/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/admin/users",
        element: <Users />
    },
    {
        path: "/admin/paymentRequest",
        element: <PaymentRequest />
    }
]
