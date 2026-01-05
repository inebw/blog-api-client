import { useNavigate, useOutletContext } from "react-router";
import "./Header.css";
import { useState } from "react";

export default function Header({user, setUser}) {
  const navigate = useNavigate();
  const [navClass, setNavClass] = useState('hidden')


  const handleLogout = async () => {
    await fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null)
  };

  const handleUserspace = () => {
    setNavClass(navClass==="hidden"? "un-hidden" : "hidden")
  }

  return (
    <header>
      <h1 className="logo" onClick={() => navigate("/")}>
        Peekster Blog
      </h1>
      <div className="userspace" onClick={handleUserspace}>
        {user !== null ? `${user.first_name} ${user.last_name}` : "User"}
        <nav className={navClass}>
        {user === null ? (
          <>
            <button onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </nav>
      </div>
      
    </header>
  );
}
