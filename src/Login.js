import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login validation here
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
