import './imageButton.css'



export default function ImageButton({btnImage, active, ...props}){
    return <button className='imgbtn' id={active ? "active" : null} {...props}>
        <img src={btnImage}  />
    </button>
}