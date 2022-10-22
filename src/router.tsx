/*
DOM дерево. 
В идеале надо строить его автоматически, как минимум на основе содержимого './routes/pages/'
*/

import React from "react"
import {createBrowserRouter} from "react-router-dom"

import ErrorPage from "./routes/error-page"
import Root from "./routes/root"

import Graph from "./routes/pages/graph"
import Redux from './routes/pages/redux'
import Main from './routes/pages/index'
//@ts-ignore
import redux_logo from './static/redux_logo_48.png'

export const MenuList = [
  {
    name: '🕸 Reaflow',
    path: "graph",
    element: <Graph />,
  },
  {
    name: 'Redux',
    path: "redux",
    element: <Redux />,
    icon: <img src={redux_logo} height={15} />,
  },  
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: MenuList.map((value) => ({ path : value.path, element: value.element })).concat({ path: "", element: <Main /> },)
  },
])