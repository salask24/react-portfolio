//home page
import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import AboutSection from '../components/AboutSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/AboutSection/Data'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <InfoSection />
            <AboutSection {...homeObjOne} />
            <Projects {...homeObjThree}/>
            <AboutSection {...homeObjTwo} />
            <AboutSection {...homeObjFour}/>
            <Footer/>
        </>
    );
}

export default Home;
