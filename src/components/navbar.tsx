import {ShoppingCart,SearchNormal1,DiscountShape,HambergerMenu,CloseCircle} from 'iconsax-react';
import { useRef,useEffect } from 'react';
import logo from './../assets/AZlogo.webp';

const Navbar = () => {
    let x : any = window.matchMedia("(min-width: 768px)");
    const sidebar = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (sidebar.current) {
        sidebar.current.focus();
      }
    }, []);

    const openSideBar = (): void =>{
      sidebar.current?.classList.remove("hidden");
      sidebar.current?.classList.add("flex");
    }
    const closeSideBar = (): void =>{
      sidebar.current?.classList.remove("flex");
      sidebar.current?.classList.add("hidden");
    }

    return ( 
        <div className='sticky top-0 left-0 w-full'>
        <div className="w-full px-3 bg-zinc-900 h-5 flex sm:justify-between text-[11px] sm:text-[12px] justify-center text-white font-sans items-center">
          <div className='hidden sm:block'>New Season is Coming!</div>
          <div>Discount 10% for summery products  |  <a href="#" className="underline">check now</a></div>
          <DiscountShape size={24} color="#fff" className="animate-bounce hidden sm:block"/>
        </div>
        <div className="bg-white z-50 w-full h-14 shadow-md grid grid-cols-9 md:grid-cols-12">
          <a className="col-start-1 md:col-end-3 col-end-4 flex md:pl-4 items-center overflow-hidden font-mono font-extrabold text-2xl" href='#'><img className='h-full w-auto' src={logo} alt='logo' /></a>
            {["Home","Categories","Blog","Contact"].map((item : string,index : number) =>(
              <a href="#" key={index} className="hidden md:flex hover:underline font-normal transition-all col-span-1 justify-center items-center">{item}</a>      
            ))}
            <div className="col-start-4 col-end-6 md:col-start-9 md:col-end-12 flex justify-end md:justify-center items-center">
            <input type="text" placeholder='Search Products' className="hidden md:block h-3/5 rounded-s-full border outline-none min-w-3.5 px-4"/>
            <span className='flex justify-center items-center md:bg-zinc-900 h-3/5 px-2 min-w-2.5 cursor-pointer rounded-e-full bg-white'>
            <SearchNormal1 size={19} color={x.matches ? "#fff" : "#18181b"}/>
            </span>
            </div>
            <div className="h-full flex items-center justify-end md:justify-center md:col-start-12 md:col-end-13 col-start-6 col-end-8">
            <a href='#' className='flex items-center justify-center'><ShoppingCart size={24} color="#18181b"/><b className='font-normal hidden md:block'>cart</b></a>
              <div className="cursor-default ml-1 text-white w-5 h-5 rounded-full bg-zinc-800 text-md flex items-center justify-center text-[12px]">0</div>
            </div>
            <div className='md:hidden flex justify-center items-center cursor-pointer col-start-8 col-end-10' onClick={openSideBar}><HambergerMenu size={26} color="#18181b"/></div>
        </div>
        <div ref={sidebar} className='z-50 hidden absolute right-0 top-0 w-3/4 h-full backdrop-blur pl-10 bg-[#00000063] pt-4 flex-col items-center'>
          <div className='flex justify-end w-full pr-5' onClick={closeSideBar}><CloseCircle size={40} color="#fff"/></div>
          {["Home","Categories","Blog","Contact"].map((item : string,index : number) =>(
              <a href="#" key={index} className="flex h-20 active:underline text-white text-2xl font-normal w-full items-center">{item}</a>      
            ))}
        </div>
        </div>
     );
}
 
export default Navbar;