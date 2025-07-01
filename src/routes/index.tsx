import App from "@/App";
import Task from "@/page/Task";
import User from "@/page/User";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/>,
    Component : App,
    children:[
      {
        index: true,
        Component: Task
      },
      {
        path: "task",
        Component: Task
      },
      {
        path: "user",
        Component: User
      }
    ]
  },
]);
export default router;
