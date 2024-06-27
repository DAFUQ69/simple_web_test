import React, { useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { FaUserCircle } from 'react-icons/fa';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import invoicesData from './data/invoices';
import './styles.css';

// Register required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const lineChartData = {
    labels: invoicesData.map(invoice => invoice.date),
    datasets: [
        {
            label: 'Invoice Amount',
            data: invoicesData.map(invoice => invoice.amount),
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1
        }
    ]
};

const paidInvoices = invoicesData.filter(invoice => invoice.status === 'Paid').length;
const pendingInvoices = invoicesData.filter(invoice => invoice.status === 'Pending').length;

const pieChartData = {
    labels: ['Paid', 'Pending'],
    datasets: [
        {
            data: [paidInvoices, pendingInvoices],
            backgroundColor: ['#36A2EB', '#FF6384']
        }
    ]
};

const Dashboard = () => {
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        // Perform logout logic here
        console.log("User logged out");
    };

    return (
        <div className="dashboard-container">
            <header>
                <div className="avatar-container">
                    <FaUserCircle
                        size={30}
                        onClick={() => setShowLogout(!showLogout)}
                        className="avatar-icon"
                    />
                    {showLogout && (
                        <div className="logout-popout">
                             <button onClick={handleLogout}><a href='/'>Logout</a></button>
                        </div>
                    )}
                </div>
            </header>
            <aside className="sidebar">
                <h1>Dashboard</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/invoices">Invoices</a></li>
                    </ul>
                </nav>
            </aside>
            <main>
                <section className="chart-section">
                    <h2>Charts</h2>
                    <div className="chart-container">
                        <h3>Line Chart</h3>
                        <Line data={lineChartData} />
                    </div>
                    <div className="chart-container">
                        <h3>Pie Chart</h3>
                        <Pie data={pieChartData} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
