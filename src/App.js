import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import FQA from './components/FQA';
import Blog from './components/Blog';
import Start from './components/Start';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:async() => {
            return fetch('http://localhost:5000/courses');
        },
        element: <Home></Home>
        },
        {
          path: '/fqa',
          element: <FQA></FQA>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },

        {path: '/start/:courseId', 
          loader: async ({params}) => {
     
           const ID = params.courseId;

  
          return fetch(`http://localhost:5000/courses/${ID}`);
          
    },
    element: <Start></Start>},
        
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
