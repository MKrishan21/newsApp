import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Business from "./components/Business";
import Technology from "./components/Technology";
import Entertainment from "./components/Entertainment";
import Sports from "./components/Sports";
import Body from "./components/Body";
import Politics from "./components/Politics"

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/business',
          element:<Business/>
        },
        {
          path:'/technology',
          element:<Technology/>
        },
        {
          path:'/entertainment',
          element:<Entertainment/>
        },
        {
          path:'/sports',
          element:<Sports/>
        },
        {
          path:'politics',
          element:<Politics/>
        }
      ]
    }
  ])
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
