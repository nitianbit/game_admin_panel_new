import React, { useState } from 'react'
function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className='d-flex '>
            \dashboard
        </div>
    )
}

export default Dashboard