import App from "./App";
import SignUp from "./components/Sign-Up/SignUp";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Post from "./components/Post/Post";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Blog />,
      },
      {
        path:"post/:id",
        element: <Post/>
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

export default routes;
