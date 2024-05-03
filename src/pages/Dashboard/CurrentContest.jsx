import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { doGET } from '../../utils/HttpUtil';
import { ENDPOINTS } from './DashboardConstant';
import Timer from '../../components/Timer/Timer';

const CurrentContest = () => {
    const [currentContest, setCurrentContest] = useState(null)

    const getCurrentContest = async (e) => {
        try {
            const response = await doGET(ENDPOINTS.currentContest);
            setCurrentContest(response?.data)
        } catch (error) { }
    };

    useEffect(() => {
        getCurrentContest()
    }, [])
    return (

        <Card>
            <CardHeader>
                <div className='d-flex justify-content-between align-items-center'>
                    <div> Current Contest</div>
                    <div>
                        <Timer startTime={currentContest?.contest?.startTime} />
                    </div>
                </div>
            </CardHeader>

            <CardBody>
                <div>
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
                </div>

                <div>
                    <div>
                        No of Bets
                    </div>

                    <div className='d-flex w-100'>
                        {currentContest?.betSummary ?
                            Object.keys(currentContest?.betSummary)?.map((key) => (
                                <div key={key} className='dot'>{currentContest?.betSummary?.[key]?.totalCount}</div>
                            ))
                            : null
                        }
                    </div>
                </div>
                <div>
                    <div>
                        Amount
                    </div>

                    <div className='d-flex'>
                        <div className='d-flex'>
                            {currentContest?.betSummary ?
                                Object.keys(currentContest?.betSummary)?.map((key) => (
                                    <div key={key} className='dot'>{currentContest?.betSummary?.[key]?.totalAmount}</div>
                                ))
                                : null
                            }

                        </div>
                    </div>
                </div>


            </CardBody>
        </Card>
    )
}

export default CurrentContest