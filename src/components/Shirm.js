const Shirm=()=>{
    const ShirmCard = () => {
        return (
            <div className="shirm-card w-48 h-64 bg-slate-100">

            </div>
        )
    }

    const generateShirmCards = (count) => {
        const res=[];
        for (let i = 0; i < count; i++) {
            res.push(<ShirmCard key={i}/>)
        }
        return res;
    }
    return (
        <div className="shirm flex flex-wrap justify-between gap-y-4">
           { 
             generateShirmCards(Number(12))
           }
        </div>
    )
}

export default Shirm;