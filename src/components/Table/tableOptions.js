import React from 'react'
import { MdAddCircle } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';
import { AiFillFileAdd } from 'react-icons/ai';
import { AiFillPrinter } from 'react-icons/ai';
import './tableOptions.scss'


const tableOptions = {
    add(callback) {
        return (
            <MdAddCircle className='btn add' onClick={callback} />
        )
    },
    addList(callback) {
        return (
            <FaListUl className='btn addlist' onClick={callback} />
        )
    }
    ,
    addContract(callback) {
        return (
            <AiFillFileAdd className='btn addcontract' onClick={callback} />
        )

    },
    print(callback) {
        return (
            <AiFillPrinter className='btn print' onClick={callback} />
        )

    }
}

export default tableOptions