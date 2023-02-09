import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useMediaQuery } from 'react-responsive'

const viewWidth = () => {

  const isTablet = useMediaQuery(
    { minWidth: 580, maxWidth: 1200}
  )

  const isDesktop = useMediaQuery(
    { minWidth: 1200},   
  )


  const textStyle = {
    fontSize:"1.25rem",
    fontWeight: "bold",
    fontFamily: "'Patrick Hand', cursive"
  }

  const changeFontSize =() => {
  if (isDesktop) {
    textStyle.fontSize = "1.75rem"
  } else if (isTablet) {
    textStyle.fontSize = "1.5rem"
  } 
}
  changeFontSize()
   
  return { textStyle }
}

const Navbar = ({cart_count}) => {

  return (
    <div className="container-fluid">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 mx-2 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src="https://i.postimg.cc/bJH33xxT/logo.png" className="bi me-2" width="45" height="45" style={{borderRadius: "50%"}}></img>

      </a>

      <ul className="nav nav-pills" style={viewWidth().textStyle}>
        <li className="nav-item"><Link to="/" className="nav-link text-secondary" aria-current="page" >Home</Link></li>
        <li className="nav-item" ><HashLink to="/#products" className="nav-link text-secondary" id="to-products" >Products</HashLink></li>
        <li className="nav-item"><Link to="/order-history" className="nav-link text-secondary" >Order History</Link></li>
        { cart_count > 0 ? <li className="nav-item"><Link to="/cart" className="nav-link text-secondary" id="to-cart"> Cart<div className="badge badge-pill bg-warning" id="cart-notification">{cart_count}</div></Link></li> : <li className="nav-item"><Link to="/cart" className="nav-link text-secondary" id="to-cart"> Cart</Link></li> }
      </ul>
    </header>
  </div>
  )
}

export default Navbar