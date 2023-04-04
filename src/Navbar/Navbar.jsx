import React from 'react'
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.logo}>
            <h1><span>I</span>ndian <span>N</span>ews</h1>
        </div>
        <div className={style.menu}>
           <li>LATEST NEWS</li>
           <li>CONTACT</li>
           <li>FAQs</li>
        </div>
    </div>
  )
}

export default Navbar