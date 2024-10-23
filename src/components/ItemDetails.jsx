import classes from './ItemDetails.module.css'
import minusIcon from '../assets/images/icon-minus.svg'
import plusIcon from '../assets/images/icon-plus.svg'
import cartIcon from '../assets/images/icon-cart.svg'
import { icons } from './store/icons'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from './store/cartSlicer'
import { images } from './store/imagesData'

export default function ItemDetails(){
    const quantity = useSelector(state => state.cart.quantity)
    const dispatch = useDispatch()


    function onIncrease(){
        dispatch(cartActions.onIncrease())
    }
    function onDecrease(){
        dispatch(cartActions.onDecrease())
    }

    function onAddToCart(item){
        if(quantity >= 1){
            dispatch(cartActions.onAddItem(item))
            dispatch(cartActions.onShowIcon())

        } 
    }

    return <div className={classes.detailsContainer}>
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className={classes.priceContainer}>
            <h2>
                $125.00
            </h2>
            <span>50%</span>
            <h5>$250.00</h5>
        </div>
        <div className={classes.detailsActions}>
            <div className={classes.quantityContainer}>
                <button onClick={onDecrease}>
                    <img src={minusIcon} alt="decrease" />
                </button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>
                    <img src={plusIcon} alt="increase" />
                </button>
            </div>
            <button 
            className={classes.submitButton} 
            onClick={() => onAddToCart({title: "Fall Limited Edition Sneakers", image: images.productPhoto1, price: 125})}>
                {icons.cart}
                <h2>Add to cart</h2>
            </button>
        </div>
    </div>
}