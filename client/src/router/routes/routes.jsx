import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MainLayout from "../../layout/MainLayout";



const router = createBrowserRouter([
  
    {
        path: "/", 
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
        ] 
        
    }
   
])

export default router;