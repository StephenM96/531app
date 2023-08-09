import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({
      usernameOrEmail: '',
      password: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    // const handleLogin = () => {
    //   // Call authentication API here using formData
    //   // Redirect to dashboard on successful login
    // };
    //placeholder until I can connect to login auth backend

    return (
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>Username or Email:</label>
          <input
            type="text"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleInputChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    );
};

export default LoginPage;