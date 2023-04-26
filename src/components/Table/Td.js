import React from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';



const Td = (props) => {
    const { data, isEditable, isViewable } = props;
    function buttons() {
        if (isEditable) {
            return (
                <>
                    <td className='editable edit'>
                        <AiFillEdit />
                    </td>
                    <td className='editable delete'>
                        <BsFillTrashFill />
                    </td>
                </>
            )
        }
        if (isViewable) {
            return (
                <td className='viewable'>
                    <AiFillEye />
                </td>
            )
        }
    }

    return (
        <>
            {buttons()}
            {Object.keys(data).map(key => (
                <>
                    <td >{[data[key]]}</td>
                </>
            ))}
        </>
    )
}


Td.defaultProps = {
    isEditable: false,
    isViewable: false
}

export default Td