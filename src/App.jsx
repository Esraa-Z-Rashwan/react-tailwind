import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import NotFound from './NotFound'

const routers = createBrowserRouter ([
    {path: '/', element: <Layout /> , children: [
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
        {path: 'contact', element: <Contact />},
        {path: 'portfolio', element: <Portfolio />},
        {path: '*', element: <NotFound />},
    ]},
])

export default function App() {
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}
