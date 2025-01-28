import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import PlaceList from "./components/PlaceList.jsx";
import PlaceCreateForm from "./components/PlaceCreateForm.jsx";
import PlaceDetail from "./components/PlaceDetail.jsx";
// import SpotCreateForm from "./SpotCreateForm.jsx";
// import SpotDetail from "./SpotDetail.jsx";
// import EditSpot from "./EditSpot.jsx";

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
                path:'/spots/:id',
                element:<PlaceDetail/>
            },
            {/*       {
                path:'/spots/edit/:id',
                element:<EditSpot/>
            },*/}
        ]
    }
])
function App() {

    return <RouterProvider router={router}/>;
}

export default App
