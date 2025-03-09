import Card from "../components/Card"


export default function ResultList({ type, items }) {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <p className="text-white text-xl mb-4">
                risultati trovati: {items.length}
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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