import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.forEach(element => {
        totalAmount += element.price * element.quantity
      })
      const totalItems = cartList.length

      return (
        <div className="cart-summary-bg-container">
          <div className="cart-summary-order-details">
            <h1 className="cart-summary-heading">
              Order Total:{' '}
              <span className="cart-summary-total-amount">
                Rs {totalAmount}/-{' '}
              </span>
            </h1>
            <p className="cart-summary-total-items">
              {totalItems} Items in cart
            </p>
          </div>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
