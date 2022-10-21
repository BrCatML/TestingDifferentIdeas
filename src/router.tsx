import {createBrowserRouter} from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Camera from "./routes/camera";
import React from "react";
import Graph from "./routes/graph";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "camera",
          element: <Camera />,
        },
        {
            path: "graph",
            element: <Graph />,
        },
      ]
    },
]);