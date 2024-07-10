import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap';
import './style.css'
import { doGET } from '../../utils/HttpUtil';
import CurrentContest from './CurrentContest';
import DashboardBasicInfo from './DashboardBasicInfo'
function Dashboard() {
    const [currentContest, setCurrentContest] = useState(null)


    return (
        <div className='d-flex w-100'>
            <div className='w-50 me-3'>
                <CurrentContest setCurrentContest={setCurrentContest} currentContest={currentContest} />
            </div>
            <div>
                <DashboardBasicInfo setCurrentContest={setCurrentContest} currentContest={currentContest} />
            </div>
        </div>
    )
}

export default Dashboard