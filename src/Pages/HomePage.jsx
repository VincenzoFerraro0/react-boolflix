
import ResultMovies from "../Sections/ResultMovies";
import ResultSeries from "../Sections/ResultSeries";
import SectionPopular from "../Sections/SectionPopular";
import TopRated from "../Sections/TopRated";
import UpComing from "../Sections/UpComing";

export default function HomePage() {
    return (
        <>
           <ResultMovies />
            <ResultSeries />
            <SectionPopular />
            <TopRated />
            <UpComing />
        </>
    )
};