import { useGlobalContext } from "../Context/GlobalContext"
import ResultList from "../Sections/ResultList";



export default function TvsPage() {

    const {tvsList} = useGlobalContext();

    console.log(tvsList)

    return (
        <section>
            <ResultList type='tvs' items={tvsList} />
        </section>
    )
};