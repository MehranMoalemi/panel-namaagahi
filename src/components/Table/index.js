import React, { useEffect, useState } from 'react'
import './table.scss'
import { fetcher } from '../../fetch';
import Td from './Td';
import Th from './Th';
import tableOptions from './tableOptions';

const Table = (props) => {
    const { headers, tabaleButtonsType } = props;
    const [rowData, setRowData] = useState([])

    const isEditable = tabaleButtonsType === 'edit' ? true : false;
    const isViewable = !isEditable;


    useEffect(() => {
        fetcher('api/v1/main', setRowData)
        console.log(rowData, 'data')
    }, [])


    return (
        <div className='table-container'>
            <div className='tableOptions'>
                {tableOptions.add()}
                {tableOptions.addList()}
                {tableOptions.addContract()}
                {tableOptions.print()}
            </div>
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