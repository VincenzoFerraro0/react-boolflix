import { Outlet } from "react-router-dom"
import Header from "../sections/Header"
import { Footer } from "../sections/Footer"



export default function DefaultLayout() {
    return (
        <>
            {/* Header fisso per tutte le pagine */}
            <Header />

            {/* Outlet è il punto in cui verranno renderizzate le pagine dinamiche */}
            <Outlet />
            
            {/* Footer fisso per tutte le pagine */}
            <Footer/>
            
        </>
    )
};