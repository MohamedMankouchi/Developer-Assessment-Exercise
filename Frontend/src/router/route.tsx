import { createBrowserRouter } from "react-router-dom";
import { Movies } from "../Movies/Movies";
import { Login } from "../Auth/Login";

export const router = createBrowserRouter([
  {
    element: <Movies />,
    path: "/movies",
  },

  {
    element: <Login />,
    path: "/",
  },
]);
