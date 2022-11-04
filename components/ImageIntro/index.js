import Link from "next/link";
import Introduction from "../ui/Introduction";
import Subtitle from "../ui/Subtitles";

function ImageIntro({url, variant}){
  
   switch (variant) {
    case 'green':
        
       return(
        <div className="profile">
            
            <div className='bg-green-300 mb-6  overflow-hidden'>
            <Link href='/#'>
              
                    <img className=" profile__img" src={url} alt="mockup" />
              
            </Link>
            </div>
            <Subtitle first_title='PRODUCT DESIGN' second_title='QUALITY ASSURANCE'  />
            <Introduction title={`Corrily:  Optimize prices \n  to maximize revenue`} subtitle='Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign.'/>
        </div>)
   
    case 'purple':
    return(
        <div className="profile">
            
            <div className='bg-purple-900 mb-6  overflow-hidden'>
            <Link href='/#'><img className=" profile__img" src={url} alt="mockup"/></Link>
            </div>
            <Subtitle first_title='PRODUCT DESIGN' second_title='WEB DEVELOPMENT' />
            <Introduction title={`Fiona: Engage &  \n Decide `} subtitle='Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.'/>
        </div>)
        case 'orange':
            return(
                <div className="profile">
                    
                    <div className='bg-thumborange mb-6  overflow-hidden'>
                    <Link href='/#'><img className=" profile__img" src={url} alt="mockup"/></Link>
                    </div>
                    <Subtitle first_title='PRODUCT DESIGN' second_title='WEB DEVELOPMENT' third_title='QUALITY ASSURANCE' />
                    <Introduction title={`Ukulele: \n The largest ukulele tabs archive`} subtitle='Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website.'/>
                </div>)

   }
    // return(
      
      
            // <div className="px-6 mb-16">
                
            //     <div className={`bg-green-300 mb-6 ${ variant==='purple'? 'bg-purple-900':'bg-orange-400' }`}>
            //     <Link href='/#'><img src={url} alt="mockup"/></Link>
            //     </div>
            //     <Subtitle first_title='PRODUCT DESIGN' second_title='QUALITY ASSURANCE' />
            //     <Introduction title='Corrily:  Optimize prices  to maximize revenue' subtitle='Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign.'/>
            // </div>
    
    // );
}
export default ImageIntro