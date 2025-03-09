import Card from "../components/Card"


export default function ResultList({ type, items }) {
    return (
        <div className="max-w-7xl mx-auto ">
            <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 ">
                {
                    items && items.length > 0 ? (
                        items.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    data={item}
                                    type={type}

                                />
                            )
                        })
                    ) : (
                        <p className="text-gray-400">nessun risultato</p>
                    )
                }
            </ul>
        </div>
    )
};