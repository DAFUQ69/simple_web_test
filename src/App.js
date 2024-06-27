import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Invoices from './Invoices';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
