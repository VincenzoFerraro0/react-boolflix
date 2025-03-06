import { useEffect, useState } from "react"

import axios from "axios"
import Card from "../components/Card"


export default function SectionPopular() {

    
    const urlPopular = import.meta.env.VITE_URL_POPULAR
    const apiKey = import.meta.env.VITE_CHIAVE_API

    const  [populars, setPopular] = useState([])

    useEffect(()=>{
        axios.get(`${urlPopular}?api_key=${apiKey}`)
            .then((res) => setPopular(res.data.results))
    },[])

        
    
    
    return (
        <section>
            <h3>Popular on</h3>
            <div>
            {
            populars.map((popular) =>{
                    const {id, backdrop_path, } = popular
                    return(
                        <Card
                            key={id}
                            image={backdrop_path}
                            
                        />
                    )
                })
            }
            </div>

        </section>
    )
};