import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import HomeRoot from './pages/HomeRoot';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <HomeRoot/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      }
    ]
  }
])

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
