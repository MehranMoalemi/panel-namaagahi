import React from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';



const Td = (props) => {
    const { data, isEditable } = props;

    return (
        <>
                    {/* <div>
                        <span>
                            <AiFillEdit />
                        </span>
                        <span>
                            <BsFillTrashFill />
                        </span>
                    </div> */}
                        <td>
                            <AiFillEdit />
                        </td>
                        <td>
                            <BsFillTrashFill />
                        </td>
            {Object.keys(data).map(key => (
                <>
                    <td >{[data[key]]}</td>
                </>
            ))}
        </>
    )
}

export default Td