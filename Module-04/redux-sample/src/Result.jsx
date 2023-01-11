import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    const { list } = useSelector(state => state)
    console.log(list);
    return (
        <>
            <ul>
                {list.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Result