import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NewsLayout from "../layouts/NewsLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
  },
  {
    path: "/auth",
    element: <h1>Login</h1>,
  },
  {
    path: "*",
    element: <h1>ERROR......!!</h1>,
  },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;
