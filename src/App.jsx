import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import StoreContextProvider from './components/Context/Context'
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
import NotFound from './components/NotFound/NotFound'

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
