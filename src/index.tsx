import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import App from "./App";
import RequireAuth from "./hoc/RequireAuth";
import Auth from "./pages/Auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <Main />
          </RequireAuth>
        ),
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
