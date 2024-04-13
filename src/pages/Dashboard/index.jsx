import React, { useState } from 'react'
import { Table } from '../../components';
function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className='d-flex w-100'>
           <Table/>
        </div>
    )
}

export default Dashboard