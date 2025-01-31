import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import PlaceList from "./components/PlaceList.jsx";
import PlaceCreateForm from "./components/PlaceCreateForm.jsx";
import PlaceDetail from "./components/PlaceDetail.jsx";
import PlaceEdit from "./components/PlaceEdit.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import IdError from "./components/IdError.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home/>,
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
                element:<PlaceDetail/>,
            },
                  {
                path:'/places/edit/:id',
                element:<PlaceEdit/>,
                      errorElement:<IdError/>

},
            {
                path:'/IdError',
                element:<IdError/>
            },
        ]
    }
])
function App() {

    return <RouterProvider router={router}/>;
}

export default App
