import {createBrowserRouter} from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import News from "../page/News/News";
import PrivateRoutes from "./PrivateRoutes";


const routes = createBrowserRouter ([
    {
        path:'/',
        element:<Roots></Roots>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch ('/news.json')
            },
            {
                path:'/news/:id',
                element:<PrivateRoutes><News></News></PrivateRoutes>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
export default routes;