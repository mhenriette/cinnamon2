function LoopCard({url, title, name, date, time,descript}){
    return(
        <div className="flex flex-col items-start w-[352px] gap-2 group transition-all  duration-300">
            <div className="group-hover:text-lightblue "><img src={url} alt="pic"/></div>
            <p className="text-smallx uppercase font-MontBold duration-300 ease-in  group-hover:text-lightblue ">{title}</p>
            <div className="grid grid-flow-col gap-3 mt-4 mb-3  items-center box-border duration-300 ease-in  group-hover:text-lightblue ">
                <p className="text-[#525252] text-smallx leading-4 truncate ">{name}</p>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <p className="text-[#525252] text-smallx leading-4 ">{date}</p>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <p className="text-[#525252] text-smallx leading-4 ">{time}</p>
            </div>
            <div><h5 className="text-[24px] font-MontBold leading-small group-hover:text-lightblue duration-300 ease-in ">{descript}</h5></div>
        </div>
    );
}
export default LoopCard