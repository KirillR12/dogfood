import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './redux/store'
import { Basket } from './components/Basket/Basket'
import { Catalog } from './components/Pages/Catalog'
import { Home } from './components/Pages/Home'
import { Modal } from './components/Modal/Modal'
import { Profile } from './components/Pages/Profile'

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
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'basket',
        element: <Basket />,
      },
      {
        path: 'modal',
        element: <Modal />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
