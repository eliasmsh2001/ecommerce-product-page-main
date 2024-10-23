import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import classes from './cart.module.css'



export default function Cart(){
    const cartItem = useSelector(state => state.cart.item)
    const quantity = useSelector(state => state.cart.quantity)

    return <div className={classes.cart}>
        <div className={classes.title}>
            <h1>Cart</h1>
        </div>
        <ul>
        {cartItem ? 
        <CartItem image={cartItem.image} title={cartItem.title} price={cartItem.price} quantity={quantity}/> : <p className={classes.text}>Your cart is empty.</p>}
        </ul>
</div>
}