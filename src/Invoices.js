import React from 'react';
import invoicesData from './data/invoices';
import './styles.css';

const Invoices = () => {
    return (
        <div className="invoices-container">
            <header>
                <h1>Invoices</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/invoices">Invoices</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="data-display">
                    <h2>Invoices List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoicesData.map((invoice) => (
                                <tr key={invoice.id}>
                                    <td>{invoice.id}</td>
                                    <td>{invoice.date}</td>
                                    <td>{invoice.amount}</td>
                                    <td>{invoice.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default Invoices;
