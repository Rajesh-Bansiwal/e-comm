import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import Add from './components/Add';
import Update from './components/Update';
import Signup from './components/Signup';
import Private from './components/Private';
import Login from './components/Login';
import Productlist from './components/Productlist';
import User from './components/User';
import Userproducts from './components/Userproducts';
// import Users from './components/Users';
const router=createBrowserRouter([
  {path:'/',element:<App/>,children:[
    //  make compo protected
    {
      element:<Private/>,
      children:[
        {path:"/",element:<Productlist/>},{
          path:"/add",element:<Add/>},
          {path:"/update/:id",element:<Update/>},
          {path:'/users',element:<User/>},
          {path:'/usersproduct',element:<Userproducts/>}
      ]
    }
  ,
  
  {path:'/signup',element:<Signup/>},
  {path:'/login',element:<Login/>}
  ]}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // {/* </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
