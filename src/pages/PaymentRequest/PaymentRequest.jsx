import React from 'react'
import { PaymentRequestTable } from '../../components'
import { ENDPOINTS } from './UsersConstant';
import { doGET } from '../../utils/HttpUtil';

const PaymentRequest = () => {

    const [paymentRequest, setPaymentRequest] = useState([])

    // const getAllUsers = async (e) => {
    //     try {
    //         const response = await doGET(ENDPOINTS.allUsers);
    //         setUsers(response?.data)
    //     } catch (error) { }
    // };

    // useEffect(() => {
    //     getAllUsers()
    // }, [])
    return (
        <div className='d-flex w-100'>

            <PaymentRequestTable tableData={users} />
        </div>
    )
}


export default PaymentRequest