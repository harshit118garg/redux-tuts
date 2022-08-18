import React from 'react'

const Header = (props) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            REDUX CART
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <img
              src="images/shopping-cart.png"
              alt="cart"
              width={60}
              style={{ cursor: "pointer" }}
            />
            <span className="mx-3 display-5">{props.cartData.length}</span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header