
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import HomePage from "~/pages/home";
import LearningPage from "~/pages/learning";
import LessonPage from "~/pages/lesson";
import PracticePage from "~/pages/practice";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: '',
    children: [
      {
        path: "/home",
        element: <HomePage />,
        loader: '',
      },
    ],
  },
  {
    path: "/lesson",
    loader: '',
    children: [
      {
        path: "",
        element: <LessonPage />,
        loader: '',
      },
      {
        path: "level/:slug",
        element: <HomePage />,
        loader: '',
      },
      {
        path: "topic/:slug",
        element: <LearningPage />,
        loader: '',
      },
    ],

  },
  {
    path: "/practice",
    element: <PracticePage />,
    loader: '',
    
  },
  {
    path: "/practice",
    element: <PracticePage />,
    loader: '',
    
  },
]);
const RouterProviderConfig =()=>{
    return <RouterProvider router={router}/>
}
export default RouterProviderConfig