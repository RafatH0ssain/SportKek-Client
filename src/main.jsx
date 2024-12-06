import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import AuthLayout from './pages/AuthLayout.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx';
import AddEquipment from './pages/AddEquipment.jsx';
import AllEquipment from './pages/AllEquipment.jsx';
import EquipmentDetails from './pages/EquipmentDetails.jsx';
import MyEquipmentList from './pages/MyEquipmentList.jsx';
import UpdateEquipment from './pages/UpdateEquipment.jsx';
import AuthProvider from './provider/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: async () => {
      const response = await fetch('http://localhost:5000/equipment');
      if (!response.ok) {
        throw new Error("Failed to fetch equipment data");
      }
      return response.json();
    }
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <Register />
      },
    ],
  },
  {
    path: "/addEquipment",
    element: <PrivateRoute>
      <AddEquipment />
    </PrivateRoute>,
  },
  {
    path: "/equipment",
    element: <AllEquipment></AllEquipment>,
  },
  {
    path: "/equipment/:id",
    element: <PrivateRoute>
      <EquipmentDetails />
    </PrivateRoute>,
    // loader: ({ params }) => fetch(`http://localhost:5000/equipment/${params._id}`),
  },
  {
    path: "/myList",
    element: <PrivateRoute>
      <MyEquipmentList />
    </PrivateRoute>,
  },
  {
    path: "/update/:id",
    element: <PrivateRoute>
      <UpdateEquipment />
    </PrivateRoute>,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)