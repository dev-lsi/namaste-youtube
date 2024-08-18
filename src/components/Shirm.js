const Shirm=()=>{
    const ShirmCard=()=>{
        return (
            <div className="chirm-card w-1/4 max-h-6 bg-slate-300">

            </div>
        )
    }

    const generateCards = (count) => {
        const res=[];
        for (let i = 0; i < count; i++) {
            res.push(<ShirmCard key={i}/>)
        }
        return res;
    }
    return (
        <div className="shirm flex flex-wrap">
           { 
             generateCards(12)
           }
        </div>
    )
}

export default Shirm;