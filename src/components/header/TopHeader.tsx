import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'
import'./Header.css';
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";

function Topheader() {
  return (
    <div className='top-header'>
        <div className="container">
            <Link className='logo' to="/"><img src={Logo}/></Link>
            <form action="" className="search-box">
                <input type="text" name='search' id='search' placeholder='search For products'/>
                <button type='submit'><FaSearch /></button>

            </form>
            <div className="header-icons">
                <div className="icon">
                <CiHeart />
                <span className="count">0</span>
                </div>

                <div className="icon">
                <BsCart4 />
                <span className="count">0</span>
                </div>

            </div>
        </div>

    </div>

  )
}

export default Topheader