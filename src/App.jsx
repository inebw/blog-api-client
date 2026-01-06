import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://blog-api-client-silk.vercel.app/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!response.ok) return
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser()
  }, []);
  return (
    <>
      <Header user={user} setUser={setUser}/>
      <Outlet context={[user, setUser]} />
    </>
  );
}

export default App;
