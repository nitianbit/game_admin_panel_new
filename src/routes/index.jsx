import { Login, Signup, Dashboard, Users} from '../pages'

export const authRoutes = [
    {
        path: "/",
        element: <Login />,

    },
    {
        path: "/signup",
        element: <Signup />,

    },
]

export const openRoutes = [];


export const protectedRoutes = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/users",
        element: <Users />
    }
]
