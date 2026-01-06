import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useOutletContext()

  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials:"include"
    });
    const data = await response.json()
    setUser(data)
    navigate("/")
  };
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <label htmlFor="username">
        <p>Username</p>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password">
        <p>Password</p>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
