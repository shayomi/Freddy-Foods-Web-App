import React ,{ useContext,useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCardButton = props => {
  const [btnIsHihlighted,setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);

  const{items} = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  
 
  const btnClasses = `${classes.button} ${btnIsHihlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    },300)

    return () => {
      clearTimeout(timer);
    }
  },[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span >
        <span>Your Cart</span>
        <span className={classes.badge}>
           {numberOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCardButton