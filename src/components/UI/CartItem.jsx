import './cartItem.css'
import deleteIcon from '../../assets/images/icon-delete.svg'

import { images } from '../store/imagesData'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cartSlicer'

export default function CartItem({title, price, quantity, image}) {
    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.cart.item)
    const totalQuantity = useSelector(state => state.cart.quantity)
    const totalPrice =  cartItem.price * totalQuantity

    function onDelete(){
        dispatch(cartActions.onDelete())
    }

    function onCheckout(){
        dispatch(cartActions.onCheckout())
    }

    return <li className='item'>
        <div className='itemContainer'>
            <img src={image} alt="" />
            <div>
                <h4>{title} </h4>
                <p>
                    ${price}  X  {quantity} 
                    <span>${totalPrice}</span>
                </p>
            </div>
            <button onClick={onDelete}>
                <img src={deleteIcon} alt="" />
            </button>
        </div>
        <button id='checkoutBtn' onClick={onCheckout}>Checkout</button>
    </li>
}