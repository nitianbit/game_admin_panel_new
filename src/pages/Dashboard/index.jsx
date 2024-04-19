import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap';
import { Table } from '../../components';
import { ENDPOINTS } from './DashboardConstant';
import './style.css'
import { doGET } from '../../utils/HttpUtil';
function Dashboard() {

    // const [currentContest, setCurrentContest] = useState()
    
    // const getCurrentContest = async (e) => {
    //     try {
    //         const response = await doGET(ENDPOINTS.currentContest);
    //         setCurrentContest(response?.data)
    //     } catch (error) { }
    // };

    // useEffect(()=>{
    //     getCurrentContest()
    // },[])
    return (
        <div className='d-flex w-100'>

            <Card>
                <CardHeader>
                    Current Contest
                </CardHeader>

                <CardBody>
                    <div>
                        Bets
                    </div>

                    <div className='d-flex'>
                        <div className='dot'>1</div>
                        <div className='dot'>2</div>
                        <div className='dot'>3</div>
                        <div className='dot'>4</div>
                        <div className='dot'>5</div>
                        <div className='dot'>6</div>
                        <div className='dot'>7</div>
                        <div className='dot'>8</div>
                        <div className='dot'>9</div>
                        <div className='dot'>10</div>
                    </div>
                </CardBody>
            </Card>
           {/* <Table/> */}
        </div>
    )
}

export default Dashboard