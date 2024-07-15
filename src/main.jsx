import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from 'react-router-dom'
import { BrowserRouter } from './services/Router.jsx'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './services/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={BrowserRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
