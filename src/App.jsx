import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import StoreContextProvider from './Context/Context'
import Products from './pages/Products/Products'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import NotFound from './pages/NotFound/NotFound'

function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [
        { index: true, element: <Products /> },
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
