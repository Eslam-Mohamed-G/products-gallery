import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'

function App() {

  const routes = createBrowserRouter([
    {path: "/", element: <Layout/>}
  ])

  return (
    <main className='dark:bg-black bg-red-500'>
      <RouterProvider router = {routes}/>
    </main>
  )
}

export default App
