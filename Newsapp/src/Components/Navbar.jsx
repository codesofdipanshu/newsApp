import React, { useState, useEffect } from "react";
import axios from "axios";

const Navbar = ({ setCategory }) => {
  const [user, setUser] = useState(null);

  // Fetch logged-in user profile
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data.name); // ✅ Use "name" instead of message
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-dark text-light fs-4">The News Minute</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
              </li>
            </ul>

            {/* Search form */}
            <form className="d-flex ms-auto me-3" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search news..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            {/* User login/logout */}
            <div className="d-flex align-items-center">
              {!user ? (
                <>
                  <a href="/login" className="btn btn-primary me-2">Login</a>
                  <a href="/register" className="btn btn-secondary">Register</a>
                </>
              ) : (
                <>
                  <span className="text-white me-3">Welcome, {user}</span> {/* ✅ Display username */}
                  <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
