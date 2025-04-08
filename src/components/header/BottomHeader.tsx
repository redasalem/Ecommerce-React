import React, { useEffect, useState } from 'react'
import'./Header.css'
import { IoIosMenu } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

interface Item{
  [key: string]:string;
}
const NavLinks:Item[]= [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];



function BottomHeader() {
  
  interface Product {
    id: number;
    name: string;
    [key: string]: any;
  }
  const[data,setdata]=useState<Product[]>([]);
  const location = useLocation();
  const[Category,setCategory]=useState(false);

  useEffect(()=>{
  async  function getFetchData(){
    const apiLink = await fetch(`https://dummyjson.com/products/categories`);
    const data =await apiLink.json();
    setdata(data);
   }
   getFetchData();
  },[])
  return (
    <div className='btn-header'>
      <div className="container">
        <nav className="nav">
          <div className="category-nav">
            <div className="category-btn" onClick={()=>setCategory(!Category)}>
            <IoIosMenu />
            <p>Browse Category</p>
            <FaCaretDown />
            </div>
            <div className={`category_nav_list ${Category?"active":""}`}>
              {data.map((data)=>(
                <Link to={data.slug} key={data.name}>{data.name}</Link>
                
              ))}
            </div>


          </div>
          <div className="nav-links">
            
           {NavLinks.map((i)=>{
          return  <li className={location.pathname === i.link?"active" : ""}  key={i.title}><Link to={i.link}> {i.title} </Link></li>
           })}
          </div>


        </nav>
        <div className="header-rges-icon">
          <Link to='/'><PiSignInBold /></Link>
          <Link to='/'><FaUserPlus /></Link>
        </div>
      </div>

    </div>
  )
}

export default BottomHeader