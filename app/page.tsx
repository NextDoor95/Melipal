
import Author from "@/components/Author/Author";
import Cards from "@/components/Cards/Cards";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Testimonial from "@/components/Testimonial/Testimonial";
import Video from "@/components/ui/Video";

export default function Home() {
    return (
        <>  
            <Navbar/>
            <Hero/>
            <Author/>
            <Testimonial/>
            <Video/>
            <Cards/>
            <Footer/>
        </>
    )
}