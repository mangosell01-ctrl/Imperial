import React from 'react'
import { ShoppingCart } from "lucide-react";

const Cart = ({ count = 0 }) => {
  return (
    <div className="relative cursor-pointer">

      {/* Cart Icon */}
      <ShoppingCart
        size={28}
        className="text-gray-700 hover:text-green-600 transition"
      />

      {/* Badge (Always visible) */}
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-5 h-5 px-1 flex items-center justify-center rounded-full">
        {count}
      </span>

    </div>
  )
}

export default Cart;