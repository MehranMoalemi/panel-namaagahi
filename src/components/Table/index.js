import React, { useEffect, useState } from 'react'
import './table.scss'
import { fetcher } from '../../fetch';
import Td from './Td';
import Th from './Th';
import tableOptions from './tableOptions';

const Table = (props) => {
    const { headers, tabaleButtonsType, tableOptionsArray, url } = props;
    const [rowData, setRowData] = useState([])

    const isEditable = tabaleButtonsType === 'edit' ? true : false;
    const isViewable = !isEditable;


    useEffect(() => {
        fetcher(url, setRowData)
        console.log(rowData, 'data')
        console.log(tableOptions['add']())
    }, [])


    return (
        <div className='table-container'>
            {tableOptionsArray ? (
                <div className='tableOptions'>
                    {tableOptionsArray.map((option) => (
                        tableOptions[option.name](option.callback)
                    ))}
                </div>
            ) : null
            }
            <table className='table'>
                <thead>
                    <tr>
                        <Th data={headers} isEditable={isEditable} />
                    </tr>
                </thead>

                <tbody>
                    {rowData.map(data => (
                        <>
                            <tr key={data.id}>
                                <Td data={data} isEditable={isEditable} isViewable={isViewable} />
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table