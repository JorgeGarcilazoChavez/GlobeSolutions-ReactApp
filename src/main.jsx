import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from './About.jsx'
import Products from './Products.jsx'
import Company from './Company.jsx'
import {SignIn, SignUp} from './Signin.jsx'
import { DashboardApp } from './Dashboard.jsx'
import { AuthProvider } from './auth/AuthContext.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {path:'/', element:<App />},
  {path:'/about', element:<About />},
  {path:'/company', element:<Company />},
  {path:'/products', element:<Products />},
  {path:'/signin', element:<SignIn />},
  {path:'/signup', element:<SignUp />},
  {path:'/dashboard', element:<ProtectedRoute><DashboardApp /></ProtectedRoute>}

],
 {
    basename: "/GlobeSolutions-ReactApp",
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
