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
import Effector from './routes/pages/effector'
import Api from './routes/pages/api'
import Main from './routes/pages/index'

export const MenuList = [
  {
    name: 'Reaflow',
    path: 'graph',
    element: <Graph />,
  },
  {
    name: 'Api',
    path: "api",
    element: <Api />,
  }, 
  {
    name: 'ne Redux',
    path: "redux",
    element: <Redux />,
  },  
  {
    name: 'Effector',
    path: "effector",
    element: <Effector />,
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