import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase.init";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import LoginBootstrap from "./components/LoginBootstrap";

const auth = getAuth(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <RegisterReactBootstrap />,
      },
      {
        path: "/register",
        element: <RegisterReactBootstrap />,
      },
      {
        path: "/login",
        element: <LoginBootstrap />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

/*
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };
  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };
*/
