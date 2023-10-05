import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import HomeRoot from './pages/HomeRoot';
import ErrorPage from './pages/ErrorPage';
import DetailsPage, { loader as ProductDetailsLader} from './pages/DetailsPage';
import LadiesPage, { loader as LadiesPageLoader } from './pages/LadiesPage';
import MensPage, { loader as MensPageLoader} from './pages/MensPage';
import ChildrensPage, { loader as ChildrensPageLoader} from './pages/ChildrensPage';
import DiscountPage from './pages/DiscountPage';
import AccessoriesPage, { loader as AccessoiresPageLoader} from './pages/AccessoriesPage';
import NewProductPage from './pages/NewProductPage';
import EditProductPage from './pages/EditProductPage';
import { action as AddOrEditProduct } from './components/ProductForm'
import ClothesPage from './pages/ClothesPage';
import LoginPage, { action as AuthAction } from './pages/LoginPage';


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
        id: 'product-details',
        element: <DetailsPage/>,
      },
      {
        path: 'catalog',
        children: [
          {
            path: 'ladies',
            element: <LadiesPage/>,
            loader: LadiesPageLoader,
          },
          {
            path: 'mens',
            element: <MensPage/>,
            loader: MensPageLoader
          },
          {
            path: 'childrens',
            element: <ChildrensPage/>,
            loader: ChildrensPageLoader
          },
          {
            path: 'discount',
            element: <DiscountPage/>
          },
          {
            path: 'accessories',
            element: <AccessoriesPage/>,
            loader: AccessoiresPageLoader
          }
        ]
      },
      {
        path: 'new-product',
        element: <NewProductPage/>,
        action: AddOrEditProduct
      },
      {
        path: 'edit-product',
        element: <EditProductPage/>,
        action: AddOrEditProduct
      },
      {
        path: 'auth',
        element: <LoginPage/>,
        action: AuthAction
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