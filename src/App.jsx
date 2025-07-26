import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import StoreContextProvider from './components/Context/Context'

function App() {

  const routes = createBrowserRouter([
    {path: "/", element: <Layout/>}
  ])

  return (
    <StoreContextProvider>
      <RouterProvider router={routes} />
    </StoreContextProvider>
  )
}

export default App
