import classes from "./itemPhotos.module.css";
import ImageButton from "./UI/imageButton";
import { images } from "./store/imagesData";
import { useDispatch, useSelector } from "react-redux";
import { imagesActions } from "./store/imagesSlicer";
import { imagesArray } from "./store/imagesData";
import { sliderActions } from "./store/sliderSlicer";
import { icons } from "./store/icons";

export default function ItemPhotos() {
    const image = useSelector((state) => state.images.image);
    const sliderIsVisible = useSelector((state) => state.slider.isOpen);
    const imgIndex = useSelector((state) => state.slider.index);
    const dispatch = useDispatch();

    function onselect(idx) {
        dispatch(imagesActions.onSelectImage(imagesArray[idx]));
        dispatch(imagesActions.onChangeIndex(idx));
    }

    function showSlider() {
        dispatch(sliderActions.onShow());
    }
    function onNext(){
        dispatch(imagesActions.onNextIndex())
        }
        function onPrevious(){
        dispatch(imagesActions.onPreviousIndex())
        
    }

    return (
        <div className={classes.photosContainer}>
            <div
                className={classes.itemThumbnail}
                onClick={sliderIsVisible ? null : showSlider}
            >
                <img src={image} alt="Thumbnail" />
            </div>
                <button onClick={onPrevious} className={classes.previousButton}>{icons.previous}</button>
                <button onClick={onNext} className={classes.nextButton}>{icons.next}</button>
            <div className={classes.photosActions}>
                <ImageButton
                    btnImage={images.productThumbnail1}
                    onClick={() => onselect(0)}
                    active={image === images.productPhoto1 ? true : false}
                />

                <ImageButton
                    btnImage={images.productPhoto2}
                    onClick={() => onselect(1)}
                    active={image === images.productPhoto2 ? true : false}
                />

                <ImageButton
                    btnImage={images.productPhoto3}
                    onClick={() => onselect(2)}
                    active={image === images.productPhoto3 ? true : false}
                />

                <ImageButton
                    btnImage={images.productPhoto4}
                    onClick={() => onselect(3)}
                    active={image === images.productPhoto4 ? true : false}
                />
            </div>
        </div>
    );
}
