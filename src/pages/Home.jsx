import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import ScrollTop from "../components/UI/ScrollTop"
import ThemeToggle from "../components/UI/ThemeToggle"


function Home() {

    return (

        <>
            <Navbar />
            <ThemeToggle />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <ScrollTop />
        </>

    )

}

export default Home