import slide1 from './../assets/summerSale.webp';
import mDslide1 from './../assets/MDsummerSale.webp';
import slide2 from './../assets/stayHome.webp';
import mDslide2 from './../assets/MDstayHome.webp';
import slide3 from './../assets/allStyleY.webp';
import mDslide3 from './../assets/MDallStyleYe.webp';
import { useState,useEffect } from 'react';

const Slides = () => {
    let x : any = window.matchMedia("(min-width: 768px)");
    const [slideIndex, setslideIndex] = useState<number>(1);
    
    const toNextSlide = () : void =>{
        if (slideIndex === 3) {
            setslideIndex(1);
        }else{
            setslideIndex(slideIndex + 1);
        }
    }
    useEffect(() => {
        const slideinterval = setInterval(()=>{
            toNextSlide();
        },3000);
        return ()=> clearInterval(slideinterval);
    },[slideIndex])

    return ( 
        <div className='w-full z-10 mt-[7px] h-auto overflow-hidden mx-auto flex items-center justify-start shadow-md md:rounded'>
            <img src={x.matches ? mDslide1 : slide1} className={`${slideIndex == 1 ? "block" : "hidden"} transition`}/>
            <img src={x.matches ? mDslide2 : slide2} className={`${slideIndex == 2 ? "block" : "hidden"} transition`}/>
            <img src={x.matches ? mDslide3 : slide3} className={`${slideIndex == 3 ? "block" : "hidden"} transition`}/>
        </div>
     );
}
 
export default Slides;