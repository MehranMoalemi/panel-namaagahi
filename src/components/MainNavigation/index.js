import React from 'react'
import { FaDatabase } from 'react-icons/fa';
import { ImTree } from 'react-icons/im';
import { FaClipboardCheck } from 'react-icons/fa';
import { AiFillFormatPainter } from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';
import './mainNavigation.scss' ;
import logo from '../../images/Rubik.png';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <div className='nav-container'>
            <Link className='item' to="/"><img src={logo}/></Link>
            <Link className='item' to="maindb"><FaDatabase /></Link>
            <Link className='item' to="plan"><ImTree /></Link>
            <Link className='item' to="contracts"><FaClipboardCheck /></Link>
            <Link className='item' to="print"><AiFillFormatPainter /></Link>
            <Link className='item' to="customers"><ImUsers /></Link>
            
        </div>
    )
}

export default MainNavigation