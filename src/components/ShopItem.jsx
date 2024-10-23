import ItemDetails from "./ItemDetails";
import ItemPhotos from "./ItemPhotos";
import classes from './shopItem.module.css'




export default function ShopItem(){
    return <section className= {classes.container}>
        <ItemPhotos />
        <ItemDetails />
    </section>
}