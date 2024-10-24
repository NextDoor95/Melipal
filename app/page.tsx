import Cards from "@/components/Cards/Cards";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Video from "@/components/ui/Video";

export default function Home() {
    return (
        <>  
            <Navbar/>
            <Hero/>
            <Video/>
            <Cards/>
            <Footer/>
        </>
    )
}