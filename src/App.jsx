import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import StoreContextProvider from './Context/Context'
import Products from './pages/Products/Products'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'

function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'products', element: <Products /> },
        { path: 'category', element: <Category /> },
        { path: '/:ProductDetails/:id', element: <ProductDetails /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])

  return (
    <StoreContextProvider>
      <RouterProvider router={routes} />
    </StoreContextProvider>
  )
}

export default App
