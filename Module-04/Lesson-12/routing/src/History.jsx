import React from 'react'
import { Outlet } from 'react-router-dom'

const History = () => {
    return (
        <div>History
            <div>History</div>
            <div>History</div>
            <div>History</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Salam</th>
                        <th>Salam</th>
                        <th>Salam</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Salam</td>
                        <td>Salam</td>
                        <td>Salam</td>
                    </tr>
                    <tr>
                        <td>Salam</td>
                        <td>Salam</td>
                        <td>Salam</td>
                    </tr>
                </tbody>
            </table>
            <Outlet/>
        </div>
    )
}

export default History