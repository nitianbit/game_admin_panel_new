import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap';
import './style.css'
import { doGET } from '../../utils/HttpUtil';
import CurrentContest from './CurrentContest';
function Dashboard() {


    return (
        <div className='d-flex w-100'>

            {/* <Table/> */}
            <div className='w-50'>

                <CurrentContest />
            </div>
        </div>
    )
}

export default Dashboard