import {createBrowserRouter,Navigate} from 'react-router-dom'

import Login from '../Login'
import Logout from '../Logout'

const router=createBrowserRouter([
    {
        path:'/',
        element: <Login></Login>
    },
    {
        path:'/logout',
        element: <Logout></Logout>,
        
    },
])

export default router