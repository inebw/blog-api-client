import { useNavigate, useOutletContext } from "react-router";
import { useState } from "react";
import Logo from "../../assets/Logo";

export default function Header({ user, setUser }) {
  const navigate = useNavigate();
  const [navClass, setNavClass] = useState("hidden");

  const handleLogout = async () => {
    await fetch("https://blog-api-xgmn.onrender.com/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  };

  const handleUserspace = () => {
    setNavClass(navClass === "hidden" ? "un-hidden" : "hidden");
  };

  return (
    <header>
      <div className="logo" onClick={() => navigate("/")}>
        <h1 className="logo">
          Peekster Blog
        </h1>
        <Logo />
      </div>

      <div className="userspace" onClick={handleUserspace}>
        {user !== null ? `${user.first_name} ${user.last_name}` : "User"}
      </div>
      <div className={navClass}>
          {user === null ? (
            <>
              <button onClick={() => navigate("/sign-up")}>Sign Up</button>
              <button onClick={() => navigate("/login")}>Login</button>
            </>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
    </header>
  );
}
