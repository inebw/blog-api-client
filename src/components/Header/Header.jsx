import { useNavigate } from "react-router";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <h1 className="logo" onClick={() => navigate("/")}>
        Peekster Blog
      </h1>
      <nav>
        <button onClick={() => navigate("/sign-up")}>Sign Up</button>
      </nav>
    </header>
  );
}
