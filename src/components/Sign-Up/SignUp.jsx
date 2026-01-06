import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      confirm_password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <label htmlFor="first_name">
        <p>First Name</p>
        <input
          type="text"
          name="first_name"
          id="first_name"
          onChange={handleChange}
          value={formData.first_name}
          required
        />
      </label>
      <label htmlFor="last_name">
        <p>Last Name</p>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={handleChange}
          value={formData.last_name}
          required
        />
      </label>
      <label htmlFor="username">
        <p>Username</p>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          required
        />
      </label>
      <label htmlFor="password">
        <p>Password</p>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
      </label>
      <label htmlFor="confirm_password">
        <p>Confirm Password</p>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          onChange={handleChange}
          value={formData.confirm_password}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
