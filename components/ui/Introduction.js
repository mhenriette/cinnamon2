import Link from "next/link";

function Introduction({title, subtitle, variant }){
    return (
        <div className="flex flex-col gap-y-4">
          <Link href='/#'>  <h3 className={`font-MontBold text-4xl whitespace-pre-line leading-medium md:leading-[56px] md:text-[40px]  ${variant==='bgblack'? 'text-white text-small pt-6':'text-lightblack'}`}>{title}</h3></Link>
            <p className={`font-sans text-lg leading-middle md:w-3/4 md:leading-small ${variant==='bgblack'? 'text-[#CFCFCF] text-smallx':'text-gray32 '} `}>{subtitle}</p>
        </div>
    );
}
export default Introduction