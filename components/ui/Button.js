function Button({title, style}){
    return(
        <button className={`bg-lightblue text-white py-3   text-center ${style}`}>{title}</button>
    );
}
export default Button