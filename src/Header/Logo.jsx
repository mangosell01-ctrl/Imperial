import React from 'react'
import LogoImage from "../assets/images/Logo.png";

const Logo = () => {
  return (
    <div>
      <img
        src={LogoImage}
        alt="Logo"
        className="w-12 h-12 object-contain"
      />
    </div>
  )
}

export default Logo;