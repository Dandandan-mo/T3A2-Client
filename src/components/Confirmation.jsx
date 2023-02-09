import React, { useEffect } from 'react'

const paragraphStyling = {
  fontSize: "1rem",
  padding:'0 1.5rem'
}

const headingStyling = {
  padding:'1rem',
  fontWeight:'bold',
  fontFamily: "'Patrick Hand', cursive"
}

const heading2Styling = {
  padding:'1rem',
  fontWeight:'bold',
  fontFamily: "'Patrick Hand', cursive",
  fontSize: "2rem"
}

const Confirmation = ({setCart}) => {

  // clear the local cart and remove cart id stored in local storage
    useEffect(() => {
      setCart([])
      sessionStorage.removeItem('cartId')
    }, [])

  return (
    <>
        <h2 style={heading2Styling}>Your order was received!</h2>
        <h4 style={headingStyling}>Current Processing Time</h4>
        <p style={paragraphStyling}>Products will be shipped within 2-3 business days upon receiving your order. </p>
        <h4 style={headingStyling}>Shipping Information</h4>
        <p style={paragraphStyling}>If you only purchase stickers, domestic orders are shipped as standard UNTRACKED letter mail to maintain low shipping costs for customers. 
          <ul>
            <li>If you purchase things other than stickers, domestic orders are shipped as TRACKED parcels with higher shipping fee.</li>
            <li>International orders are shipped with tracking number. </li>
            <li>Options for standard tracked letter & express post are available.</li>
          </ul>
        </p>
        <h2 style={heading2Styling}>Thank you so much for visiting our shop !</h2>

    </>
  )
}

export default Confirmation