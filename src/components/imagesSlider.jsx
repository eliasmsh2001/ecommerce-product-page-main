import { useSelector, useDispatch } from "react-redux";
import Modal from "./UI/Modal";
import ImageButton from "./UI/imageButton";
import { images } from "./store/imagesData";
import classes from './imagesSlider.module.css'
import { imagesActions } from "./store/imagesSlicer";
import { icons } from "./store/icons";
import { sliderActions } from "./store/sliderSlicer";

export default function ImagesSlider(){

    const image = useSelector(state => state.images.image)
    const sliderIsVisible = useSelector(state => state.slider.isOpen)
    const dispatch = useDispatch()

    function onselect(img, idx){
        dispatch(imagesActions.onSelectImage(img))
        dispatch(imagesActions.onChangeIndex(idx))
    }

    
    function onClose() {
        dispatch(sliderActions.onHide())
    }

    function onNext(){
        dispatch(imagesActions.onNextIndex())
        }
        function onPrevious(){
        dispatch(imagesActions.onPreviousIndex())
        
    }

    return (
        <Modal open={sliderIsVisible} onClose={sliderIsVisible ? onClose : null} className={sliderIsVisible ? "modal" : "closedModal"}>
            <section className={classes.sliderContainer}>
                <section>
                <div className={classes.closeBtnContainer}>
                    <button onClick={onClose} className={classes.closeBtn}>{icons.close}</button>
                </div>
                <div className={classes.image}>
                    <button onClick={onPrevious} className={classes.previousButton}>{icons.previous}</button>
                    <img src={image} alt="" />
                    <button onClick={onNext} className={classes.nextButton}>{icons.next}</button>
                </div>
                <div className={classes.imageButtonsContainer}>


                <ImageButton 
            btnImage={images.productThumbnail1} 
            onClick = {() => onselect(images.productPhoto1, 0)}
            active = {image === images.productPhoto1 ? true : false}
            />

            <ImageButton 
            btnImage={images.productPhoto2} 
            onClick = {() => onselect(images.productPhoto2, 1)}
        
            active = {image === images.productPhoto2 ? true : false}
            />

            <ImageButton 
            btnImage={images.productPhoto3} 
            onClick = {() => onselect(images.productPhoto3, 2)}
            active = {image === images.productPhoto3 ? true : false}
            />

            <ImageButton 
            btnImage={images.productPhoto4} 
            onClick = {() => onselect(images.productPhoto4, 3)}
            active = {image === images.productPhoto4 ? true : false}
            />
                </div>
                </section>
            </section>
        </Modal>    
        )
}