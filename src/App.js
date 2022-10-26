import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import FQA from './components/FQA';
import Blog from './components/Blog';
import Start from './components/Start';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:async() => {
            return fetch('https://learn-with-mubarak-server.vercel.app/courses');
        },
        element: <Home></Home>
        },
        {
          path: '/fqa',
          loader:async() => {
            return fetch('https://learn-with-mubarak-server.vercel.app/courses');
        },
          element: <FQA></FQA>
        },
        {
          path: '/blog',
          loader:async() => {
            return fetch('https://learn-with-mubarak-server.vercel.app/courses');
        },
          element: <Blog></Blog>
        },
        {
          path: '/login',
          loader:async() => {
            return fetch('https://learn-with-mubarak-server.vercel.app/courses');
        },
          element: <Login></Login>
        },
        {
          path: '/register',
          loader:async() => {
            return fetch('https://learn-with-mubarak-server.vercel.app/courses');
        },
          element: <Register></Register>
        },

        {path: '/start/:courseId', 
          loader: async ({params}) => {
           const ID = params.courseId;
          return fetch(`https://learn-with-mubarak-server.vercel.app/courses/${ID}`);
          
    },
    element: <PrivateRoute><Start></Start></PrivateRoute>},
        
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
