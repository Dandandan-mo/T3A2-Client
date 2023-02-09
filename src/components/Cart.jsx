import React, { useState, useEffect } from 'react'
import MediaQuery from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import AddedProduct from './AddedProduct'

const Cart = ({cart, setCart, cartId}) => {

  const nav = useNavigate()
  const [total, setTotal] = useState(0)

  // fetch cart data from db with the cartId saved in local storage
  useEffect(() => {
    async function fetchCart() {
      if (cartId) {
      const res = await fetch(`https://t3a2-server-production.up.railway.app/carts/${cartId}`)
      const data = await res.json()
      setCart(data.items)
      } else {
        setCart([])
      }
    }
    fetchCart()
  }, [])

  // When cart is updated, update the total payable
  useEffect(() => {
    const subtotals = []
    cart.forEach(item => {
      const subtotal = item.price * item.quantity
      subtotals.push(subtotal)
    })
    const payable = subtotals.reduce((partialSum, additional) => partialSum + additional, 0)

    // if total is NaN due to invalid quantity input from user, display "--" as placeholder for total payable
    if (total !== "--") {
    setTotal(payable)
    } else {
      setTotal("--")
    }
  }, [cart])

  // navigate to checkout if input is valid
  function toCheckout() {
    if (!isNaN(total)) {
      nav('/checkout')
    }
  }

  // navigate to home page if input is valid
  function toShopping() {
    if (!isNaN(total)) {
    nav('/')
    }
  }
  
  return (
    <>
    <MediaQuery maxWidth={1200}>
      <h2 style={{textAlign:"center", fontFamily: "'Patrick Hand', cursive"}}>Cart</h2>
      <div className="container py-5 bg-light">
        {cart.map(item => <div className="card rounded-3 mb-4" key={item.product}><AddedProduct item={item} setCart={setCart} setTotal={setTotal} cartId={cartId}/></div>)}
        <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
                {cart.length > 0 ? <><h4 style={{fontFamily: "'Patrick Hand', cursive", fontSize: "1.75rem"}} id="cart-total">Total Payable: ${isNaN(total)? "--" : total}</h4><button style={{fontFamily: "'Patrick Hand', cursive", fontSize: "1.5rem"}} onClick={toCheckout} className="btn btn-warning btn-block btn-lg">Checkout</button></> : <h4>Your cart is empty.</h4>}
                <button style={{fontFamily: "'Patrick Hand', cursive", fontSize: "1.5rem"}} onClick={toShopping} className="btn btn-info btn-block btn-lg mt-3">Continue Shopping</button>
            </div>           
        </div>
      </div>
    </MediaQuery>
    <MediaQuery minWidth={1200}>
      <h2 style={{textAlign:"center", fontFamily: "'Patrick Hand', cursive"}}>Cart</h2>
      <div className="container py-5 bg-light" style={{display:"flex", flexDirection:"row"}}>
        <div >
        {cart.map(item => <div className="card rounded-3 mb-4" key={item.product} ><AddedProduct item={item} setCart={setCart} setTotal={setTotal} cartId={cartId}/></div>)}
        </div>
        <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
                {cart.length > 0 ? <><h4 id="cart-total" style={{marginBottom:"30px", fontFamily: "'Patrick Hand', cursive", fontSize: "2rem"}}>Total Payable: ${isNaN(total)? "--" : total}</h4><button style={{fontFamily: "'Patrick Hand', cursive", fontSize: "1.5rem"}} onClick={toCheckout} className="btn btn-warning btn-block btn-lg">Checkout</button></> : <h4>Your cart is empty.</h4>}
                <button style={{fontFamily: "'Patrick Hand', cursive", fontSize: "1.5rem"}} onClick={toShopping} className="btn btn-info btn-block btn-lg mt-3">Continue Shopping</button>
            </div>           
        </div>
      </div>
    </MediaQuery>
    </>
  )
}

export default Cart