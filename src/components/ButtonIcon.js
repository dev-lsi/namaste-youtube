const ButtonIcon=({src,alt,style})=>{
    
    return (
        <button className="border border-slate-100 h-8 w-8 rounded-full bg-slate-100 pl-2 ml-4">
                <img 
                    alt={alt} 
                    src={src}
                    className={"w-4 h-4"}
                />
        </button>
    );
};

export default ButtonIcon;