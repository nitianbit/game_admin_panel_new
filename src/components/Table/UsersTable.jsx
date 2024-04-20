import React, { useEffect, useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

// const tableData = [
//     { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
//     { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
//     { id: 3, firstName: 'Larry', lastName: 'Bird', handle: '@larry' },
//     { id: 4, firstName: 'Magic', lastName: 'Johnson', handle: '@magic' },
//     { id: 5, firstName: 'Michael', lastName: 'Jordan', handle: '@mj' },
//     { id: 6, firstName: 'LeBron', lastName: 'James', handle: '@kingjames' }
// ];

const UsersTable = ({ tableData }) => {

  const [data, setData] = useState(tableData?.rows);


  useEffect(() => {
    setData(tableData?.rows)
  }, [tableData])

  return (
    <div className="container shadow-sm bg-white p-2">
      <div className="table-wrapper">
        <table className="table">
          <thead style={{ fontWeight: 600 }}>
            <tr>
              <th className='font-weight-600' scope="col">#</th>
              <th className='font-weight-600' scope="col">Name</th>
              <th className='font-weight-600' scope="col">Phone</th>
              <th className='font-weight-600' scope="col">Balance</th>
              <th className='font-weight-600' scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className='text-grey'>
            {data?.map((row, index) => (
              <tr key={row?.id}>
                <th scope="row">{index + 1}</th>
                <td>{row.name}</td>
                <td>{row.phone}</td>
                <td>{row.balance}</td>
                <td>
                  <MdEdit className='cursor-pointer' color='#8296EE' />
                  <MdDelete className='cursor-pointer' color='red' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-between align-items-center">
          <div className="hint-text me-2 text-grey">Showing <b>{data?.length ?? 0}</b> out of <b>{tableData?.total ?? 0}</b> entries</div>
          <ul className="pagination mb-0">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
