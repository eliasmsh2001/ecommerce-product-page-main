import classes from './navbar.module.css'
import logo from '../assets/images/logo.svg'

import { NavLink } from 'react-router-dom'
import cartIcon from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import { icons } from './store/icons'
import Cart from './UI/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from './store/cartSlicer'
import menuIcon from '../assets/images/icon-menu.svg'
import { navMenuActions } from './store/menuSlicer'

export default function Navbar(){
    const cartIsVisible = useSelector(state => state.cart.show)
    const quantity = useSelector(state => state.cart.quantity)
    const isVisible = useSelector(state => state.cart.iconShow)
    const dispatch = useDispatch()
    const menuIsOpen = useSelector(state => state.menu.isOpen)
    let content;

    if(quantity > 0 && isVisible){
         content = <span>{quantity}</span>
    }

    function handleToggleCart() {
        dispatch(cartActions.toggleCart())
        
    }

    function handleToggleNavMenu(){
        dispatch(navMenuActions.onToggleNavMenu())
    }

    return <nav className= {classes.nav}>
        <button className={classes.navMenuButton} onClick={handleToggleNavMenu}>
            <img src={menuIcon} alt="" />
        </button>
        <img src= {logo} alt="logo" className={classes.logo}/>
        <div className={classes.linksContainer} id={menuIsOpen ? classes.showMenu : null}>
            <button onClick={handleToggleNavMenu} className={classes.closeMenuBtn}> {icons.close}</button>
            <a className={classes.link}>Collection</a>            
            <a className={classes.link}>Men</a>            
            <a className={classes.link}>Women</a>            
            <a className={classes.link}>About</a>            
            <a className={classes.link}>Contact</a>            
        </div>
        <div className={classes.navActions}>
            <button className={classes.cartButton} onClick={handleToggleCart}>
                {content}
                {icons.cart}
            </button>
            {cartIsVisible && <Cart />}
            <button className= {classes.profileButton}>
                <img src={avatar} alt="Profile" />
            </button>
        </div>
    </nav>
}