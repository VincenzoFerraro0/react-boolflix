import { useGlobalContext } from "../Context/GlobalContext"
import ResultList from "../Sections/ResultList";

export default function AllTrending(){
    const { allTrending} = useGlobalContext();

    return (
        <>
        <section>
            <ResultList type='movies' items={allTrending}/>
        </section>
        </>
    )
};