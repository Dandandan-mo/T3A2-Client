import React from 'react'
import MediaQuery from 'react-responsive'
import Carousel from './Carousel'


const Product = ({product, addProductToCart, cartId, setCartId}) => {

  // add product to cart in database, check existence of product in cart with the addProductToCart function. 
  async function addProduct(event) {
    event.preventDefault()
    const cartItem = {
      product: product.name,
      price: product.price,
      imageLink: product.imageLinks[0],
      quantity: 1
     }
    
    const savedItem = await fetch(`https://t3a2-server-production.up.railway.app/carts/${cartId}/${cartItem.product}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cartItem)
    })
    const data = await savedItem.json()
    const dbCartItems = data.items
    const newItem = dbCartItems.find(item => item.product === cartItem.product)

    // save cart id generated by db to sessionStorage to retain cart on refresh
    setCartId(data._id)
    sessionStorage.setItem('cartId', data._id)

    addProductToCart(newItem)
  }
  
  return (
    <>
    <MediaQuery maxDeviceWidth={1224}>
        <div style={{width: "50vw"}} className="container">
            <Carousel imageLinks={product.imageLinks}/>
        </div>
        <div style={{margin:"20px"}}>
          <h2 className="product-detail-name" style={{fontSize: "6vw"}}>{product.name}</h2>
          <h3 className="product-detail-price" style={{fontSize:"4.5vw"}}>Price: $ {product.price}</h3>
          <p className="detail-description" style={{fontSize:"3vw"}}>{product.description}</p>
          <button id="add-product"onClick={addProduct} type="button" className="btn btn-primary">Add to Cart</button>
        </div>
    </MediaQuery>
    <MediaQuery minDeviceWidth={1224}>
      <div style={{display: "flex", flexDirection:"row"}}>
        <div style={{width: "35vw"}} className="container">
            <Carousel imageLinks={product.imageLinks}/>
        </div>
        <div style={{width:'45vw', marginRight:'50px'}}>
          <h2 className="product-detail-name" style={{fontSize: "4vw"}}>{product.name}</h2>
          <h3 className="product-detail-price" style={{fontSize:"3vw"}}>Price: $ {product.price}</h3>
          <p className="detail-description" style={{fontSize:"2vw"}}>{product.description}</p>
          <button id="add-product"onClick={addProduct} type="button" className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </MediaQuery>
    </>
  )
}

export default Product