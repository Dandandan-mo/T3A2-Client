import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Album from './Album'
import { useState } from 'react'

const viewWidth = () => {

  const isTablet = useMediaQuery(
    { minWidth: 580, maxWidth: 1200}
  )

  const isDesktop = useMediaQuery(
    { minWidth: 1200},   
  )

  const textStyle = {
    textAlign:"center",
    margin: "20px",
    fontSize:"2rem",
    fontFamily: "'Patrick Hand', cursive"
  }

  const paragraphStyle ={
    margin: "0 2rem 2rem 2rem",
    fontSize: "1rem"
  }

  const changeFontSize =() => {
  if (isDesktop) {
    textStyle.fontSize = "3rem"
    paragraphStyle.fontSize = "1.5rem"
  } else if (isTablet) {
    paragraphStyle.fontSize = "1.5rem"
    textStyle.fontSize = "2.5rem"
  } 
}
  changeFontSize()
   
  return { textStyle, paragraphStyle }
}

const Home = ({products}) => {

  const [search, setSearch] = useState("")

  // display products matching search keywords
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search))

  return (
    <>
        <div>
            <div style={{backgroundImage: "url(https://i.postimg.cc/ryNFfW8Q/Banner-1.jpg)", height:"20vw", backgroundSize:"100vw"}}>
                <h3 style={{position:"relative", zIndex: "-1"}}>Smoonypaws Banner</h3>
            </div>
            <h5 style={viewWidth().textStyle}>About Us</h5>
            <p id="intro" style={viewWidth().paragraphStyle}>Smoonypaws is an original-brand sticker shop that sells cute handmade & Self-designed cat stickers. The designs are inspired by our 4 adorable cats😻: QiQi, PeterPan, Taro and Hana</p>
        </div>
        <div>
            <h2 id="products" style={viewWidth().textStyle}>Products</h2>
            <form role="search" style={{padding: "2rem"}} onSubmit={event => event.preventDefault()}>
                <input type="search" className="form-control" placeholder="Search..." value={search} onChange={(event) => setSearch(event.target.value.toLowerCase())} />
            </form>
            <div className="album py-5 bg-light" >
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {filteredProducts.map(product => <div className="product-snapshot" key={product._id}><Album id={product._id} name={product.name} price={product.price} imageLink={product.imageLinks[0]}/></div>)}
                        {filteredProducts.length < 1 ? "No matching products found." : ""}
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default Home