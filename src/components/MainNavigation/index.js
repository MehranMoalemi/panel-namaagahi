import React from 'react'
import { FaDatabase } from 'react-icons/fa';
import { ImTree } from 'react-icons/im';
import { FaClipboardCheck } from 'react-icons/fa';
import { AiFillFormatPainter } from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';
import './mainNavigation.scss' ;
import logo from '../../images/Rubik.png';

const MainNavigation = () => {
    return (
        <div className='nav-container'>
            <div className='item'><img src={logo}/></div>
            <div className='item'><FaDatabase /></div>
            <div className='item'><ImTree /></div>
            <div className='item'><FaClipboardCheck /></div>
            <div className='item'><AiFillFormatPainter /></div>
            <div className='item'><ImUsers /></div>
            
        </div>
    )
}

export default MainNavigation