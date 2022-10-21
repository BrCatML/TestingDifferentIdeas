/*
DOM дерево. 
В идеале надо троить его автоматически, как минимум на основе содержимого './routes/templates/'
*/

import React from "react"
import {createBrowserRouter} from "react-router-dom"

import ErrorPage from "./routes/error-page"
import Root from "./routes/root"

import Graph from "./routes/templates/graph"

export const MenuList = [
  {
    name: 'Graph',
    path: "graph",
    element: <Graph />,
  },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: MenuList.map((value) => ({ path : value.path, element: value.element }))
  },
])