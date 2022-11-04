import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

function Navbar(){

    const [scroll, setScroll] =useState(false)

    function scrolling(){
        if(window.scrollY>10){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', scrolling)
    },[])

    

    return (
        <header className={` z-50 px-6 py-4  fixed w-full ${scroll? 'bg-white':'bg-transparent' }`}>
            <div className=" flex justify-between items-center md:mx-auto container md:px-12">
            <div className="w-40 h-5"><img src= {!scroll? '/logo-white.97f0c2c8.svg':'/logodark.svg'}  alt="logo-white"/></div>
            <div className="md:flex gap-10 items-center hidden">
            <nav className={` text-white gap-6 md:flex items-start text-smallx font-sans hidden ${!scroll?'text-white':'text-black'} `}>
                            <Link href='/'>Home</Link>
                            <Link href='/Projects'>Projects</Link>
                            <Link href='/Services'>Services</Link>
                            <Link href='/About'>About Us</Link>
                            <Link href='/Careers'>Careers</Link>
                            <Link href='/Blog'>Blog</Link>
            </nav>
            <div className={`rounded-full w-10 h-10 flex items-center justify-center border-2  ${!scroll?'border-white':'border-lightblue'}`}><img  src={ !scroll? '/play.svg':'/playblue.svg'} /></div>
            <Button title='Contact Us' style='px-10'/>
            </div>

        
         
            <div className={`w-8 h-8 md:hidden mx-10 ${scroll? 'hidden':'flex'}`}><img src="/mobilemenu-white.svg" alt="mobile-menu" /></div>
            <div className={`w-8 h-8 md:hidden mx-10 ${scroll? 'flex':'hidden'}`}><img src="/menudark.svg" alt="mobile-menu" /></div>
         
            </div>
        </header>
    );
}
export default Navbar