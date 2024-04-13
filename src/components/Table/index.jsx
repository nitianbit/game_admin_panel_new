import React from 'react'

const Table = () => {
    return (
        <div className="table">
            <h2>Table</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table