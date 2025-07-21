import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead />,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
