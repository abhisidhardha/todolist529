import { createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import Home from "./Home"
import Register from "./Register"
import Login from "./Login"
import Technologies from "./Technologies"
import React from "./React"
import Angular from "./Angular"
import Vue from "./Vue"
function Root(){
    let router = createBrowserRouter([
        {
            path:'',
            element:<RootLayout/>,
            children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'login',
                element:<Login/>
            },
                {
                path:'technologies',
                element:<Technologies/>,
                children:[
                    {
                        path:'react',
                        element:<React/>
               
                    },
                    {
                        path:'angular',
                        element:<Angular/>
                    },
                    {
                        path:'vue',
                        element:<Vue/>
                    }
            
                    ]
                }
            ]
        }
        
    ])
    
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}
export default Root 