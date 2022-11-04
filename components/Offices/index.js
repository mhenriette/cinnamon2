import Link from "next/link";
function Offices({url, title, image,icon, subtitle}){
    return (
       
              <div className="  gap-8 ">
                <div className="max-w-[544px] group transition-all ">
                  <Link href={url}>
                    <div className="max-w-full relative group-hover:text-lightblue duration-300"><img src={image} alt="house"/></div>
                  </Link>
                  <div className="flex items-start gap-5 mt-8  group-hover:text-lightblue duration-300">
                    {/* <img src="location.svg " alt="location" className=" group-hover:text-lightblue"/> */}
                   <span><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg" className=" group-hover:text-lightblue"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span> 
                    <div className=" flex flex-col gap-1  group-hover:text-lightblue duration-300">
                      <h1 className="font-MontBold text-[24px] leading-small  group-hover:text-lightblue duration-300">{title}</h1>
                      <p className="font-sans text-smallx text-gray32  group-hover:text-lightblue duration-300">{subtitle}</p>
                    </div>
                  </div>

                </div>

              </div>
              
        
    );


}
export default Offices