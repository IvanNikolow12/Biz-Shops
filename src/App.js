import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import HomeRoot from './pages/HomeRoot';
import ErrorPage from './pages/ErrorPage';
import DetailsPage from './pages/DetailsPage';
import LadiesPage from './pages/LadiesPage';
import MensPage from './pages/MensPage';
import ChildrensPage from './pages/ChildrensPage';
import DiscountPage from './pages/DiscountPage';
import AccessoriesPage from './pages/AccessoriesPage';


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
      },
      {
        path: ':id',
        element: <DetailsPage/>
      },
      {
        path: 'ladies',
        element: <LadiesPage/>
      },
      {
        path: 'mens',
        element: <MensPage/>
      },
      {
        path: 'children',
        element: <ChildrensPage/>
      },
      {
        path: 'discount',
        element: <DiscountPage/>
      },
      {
        path: 'accessories',
        element: <AccessoriesPage/>
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
