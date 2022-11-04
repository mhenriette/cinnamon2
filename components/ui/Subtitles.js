function Subtitle({first_title, second_title, third_title }){
    return (
        <div className="flex flex-wrap">
            <p className="font-MontBold text-xs uppercase leading-smallx text-textgray mb-6 mr-8">{first_title}</p>
            <p className="font-MontBold text-xs uppercase leading-smallx text-textgray mb-6 mr-8">{second_title}</p>
            <p className="font-MontBold text-xs uppercase leading-smallx text-textgray mb-6 mr-8">{third_title}</p>
        </div>
    );
}
export default Subtitle