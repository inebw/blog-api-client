import App from "./App";
import SignUp from "./components/Sign-Up/SignUp";
import Blog from "./components/Blog/Blog";

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
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
