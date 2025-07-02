import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await fetch("https://todobackend-pbac.onrender.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(" Signup successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } else {
      setMessage(data.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-3">Signup</h2>

        {message && (
          <div className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`} role="alert">
            {message}
          </div>
        )}

        <div className="form-group mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="btn btn-success w-100" onClick={handleSignup}>
          Signup
        </button>

        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/" className="text-decoration-none">Login here</Link>
        </p>
      </div>
    </div>
  );
}
