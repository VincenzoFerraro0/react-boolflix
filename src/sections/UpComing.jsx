import { useEffect, useState } from "react"

import axios from "axios"
import Card from "../components/Card"


export default function UpComing() {

    const apiKey = import.meta.env.VITE_CHIAVE_API;
    const urlComing = import.meta.env.VITE_URL_COMING;

    const [coming, setComing] = useState([]);

    useEffect(()=>{
        //https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1
        axios.get(`${urlComing}?api_key=${apiKey}`)
            .then((res)=> setComing(res.data.results))
    },[])
    
    return (
        <section>
            <h3>In Arrivo</h3>
            <div>
                {
                    coming.map((element) =>{
                        return(
                            <Card
                                key={element.id}
                                image={element.backdrop_path}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
};