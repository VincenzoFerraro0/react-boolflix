import { useEffect, useState } from "react"

import axios from "axios"
import Card from "../components/Card"




export default function TopRated() {
    
    const apiKey = import.meta.env.VITE_CHIAVE_API
    const urlTopRated = import.meta.env.VITE_URL_TOP

    const [topRated, setTopRated] = useState([])

    //https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1
    useEffect(()=>{
        axios.get(`${urlTopRated}?api_key=${apiKey}`)
            .then((res) => setTopRated(res.data.results))
    },[])

    
    return (
        <section>
            <h3>di tendenza</h3>
            <div>
                {
                    topRated.map((rated)=>{
                        
                        return(
                            <Card
                                key={rated.id}
                                image={rated.backdrop_path}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
};