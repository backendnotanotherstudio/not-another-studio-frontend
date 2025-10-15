import React from 'react'
import CartView from './components/CartView'
import ContactInfo from './components/ContactInfo'

const Checkout = () => {
  return (
    <div className=' pt-[104px] flex ' >
      <ContactInfo/>
      <CartView/>
    </div>
  )
}

export default Checkout