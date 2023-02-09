import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'

const viewWidth = () => {
  let style 

  const isTablet = useMediaQuery(
    { minWidth: 580, maxWidth: 1200}
  )

  const isDesktop = useMediaQuery(
    { minWidth: 1200},   
  )


  const textStyle = {
    fontSize: "1.5rem",
    fontFamily: "'Patrick Hand', cursive"
  }

const changeFontSize =() => {
  if (isDesktop) {
    textStyle.fontSize = "2rem"
  } else if (isTablet) {
    textStyle.fontSize = "1.75rem"
  } 
}
  changeFontSize()
   
  return textStyle
}

const Album = ({imageLink, name, price, id }) => {

  const nav = useNavigate()

  function showDetail(event) {
    event.preventDefault()
    nav(`/product-detail/${id}`)

  }              

  return ( 
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={imageLink} alt="Product Image"/>
                <div className="card-body" >
 
                  <h4 className="product-name" style={viewWidth()}>{name}</h4>
                  <h6 className="product-price" style={viewWidth()}>Price: ${price}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={showDetail}>View Details</button>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Album