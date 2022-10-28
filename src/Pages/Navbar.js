import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {

  return(
    <>
      <Link to="/" >Home</Link>
      <Link to="/profile" >Profile</Link>
      <Link to="/contact" >contact</Link>
    </>
  )
}
export default Navbar;