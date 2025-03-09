import Card from "../components/Card"


export default function ResultSearch({type, items}) {
    return (
        <div  className="mb-8">
            <p className="text-gray-400 text-sm mb-4">
                risultati trovati: {items.length}
            </p>
            <ul className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
                {
                    items && items.length > 0 ? (
                        items.map((item)=>{
                            return(
                                <Card
                                    key={item.id}
                                    data={item}
                                    type={type}
                                
                                />
                            )
                        })
                    ): (
                        <p className="text-gray-400">nessun risultato</p>
                    )
                }
            </ul>
        </div>
    )
};