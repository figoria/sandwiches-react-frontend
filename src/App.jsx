import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import PlaceList from "./components/PlaceList.jsx";
import PlaceCreateForm from "./components/PlaceCreateForm.jsx";
import PlaceDetail from "./components/PlaceDetail.jsx";
import PlaceEdit from "./components/PlaceEdit.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/places/',
                element:<PlaceList/>
            },
             {
              path:'/places/create',
                element:<PlaceCreateForm/>
   },
           {
                path:'/places/:id',
                element:<PlaceDetail/>
            },
                  {
                path:'/places/edit/:id',
                element:<PlaceEdit/>
            },
        ]
    }
])
function App() {

    return <RouterProvider router={router}/>;
}

export default App
