import React, { useEffect, useState } from 'react'
import './table.scss'
import { fetcher } from '../../fetch';
import Td from './Td';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import Th from './Th';


const Table = (props) => {
    const { headers } = props;
    const [rowData, setRowData] = useState([])

  

    useEffect(() => {
        fetcher('api/v1/main', setRowData)
        console.log(rowData, 'data')
    }, [])
    return (
        <div className='table-container'>
            <table className='table'>
                <thead>
                    <tr>
                        <Th data={headers} isEditable={true}/>
                    </tr>
                </thead>

                <tbody>
                    {rowData.map(data => (
                        <>
                            <tr key={data.id}>
                                <Td data={data} isEditable={true}/>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table