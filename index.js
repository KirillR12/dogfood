/* eslint-disable react/jsx-boolean-value */
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import App from './App'
import { store } from './redux/store'
import { Basket } from './components/Basket/Basket'
import { Home } from './components/Pages/Home'
import { Modal } from './components/Modal/Modal'
import { Profile } from './components/Pages/Profile'
import 'react-toastify/dist/ReactToastify.css'
import { CreateProduct } from './components/CreateProduct/CreateProduct'
import { DetaliProduct } from './components/DetaliProduct/DetaliProduct'
import { Main } from './components/Main/Main'
import { Favorite } from './components/Favourite/Favorite'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    // eslint-disable-next-line react/jsx-filename-extension
    element: <App />,
    children: [
      {
        path: 'home/',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'basket',
        element: <Basket />,
      },
      {
        path: 'modal',
        element: <Modal />,
      },
      {
        path: 'favorite',
        element: <Favorite />,
      },
      {
        path: 'addproduct',
        element: <CreateProduct />,
      },
      {
        path: 'catalog/:id',
        element: <DetaliProduct />,
      },
      {
        path: 'catalog',
        element: <Main />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={200} hideProgressBar={true} theme="colored" />
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
