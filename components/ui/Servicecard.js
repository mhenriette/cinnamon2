import Introduction from "./Introduction";

function ServiceCard({title, subtitle, url}){
 
    return (
        <div className="w-[256px]">
            <div className="w-12 h-12"><img src={url} alt="logo"/></div>
            <h2 className="font-MontBold leading-medium text-white text-small md:text-[24px] pt-6 pb-[18px]">{title}</h2>
            <p className="font-sans leading-middle  text-smallx text-lightgray">{subtitle}</p>

        </div>
    );


}
export default ServiceCard