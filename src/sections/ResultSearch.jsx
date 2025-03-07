import Card from "../components/Card"


export default function ResultSearch({type, items}) {
    return (
        <div>
            <p>
                risultati trovati: {items.length}
            </p>
            <ul>
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
                        <p>nessun risultato</p>
                    )
                }
            </ul>
        </div>
    )
};