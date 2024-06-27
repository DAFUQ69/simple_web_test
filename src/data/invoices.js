const invoicesData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    date: `2024-06-${(index + 1).toString().padStart(2, '0')}`,
    amount: parseFloat((Math.random() * 1000).toFixed(2)),
    status: index % 2 === 0 ? 'Paid' : 'Pending'
}));

export default invoicesData;