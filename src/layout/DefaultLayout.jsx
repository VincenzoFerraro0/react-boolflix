import { Outlet } from "react-router-dom"
import Header from "../Sections/Header"
import { Footer } from "../Sections/Footer"



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