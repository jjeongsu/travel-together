import { createBrowserRouter } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedIn } from "./atom";
import Home from "./Routes/Home";
import Join from "./Routes/Join";
import Error from "./Routes/Error";


const Router = createBrowserRouter([
  {
    path:"/",
    element: <Join />,
    errorElement: <Error />
  }
])

export default Router;