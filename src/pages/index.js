//home page
import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import AboutSection from '../components/AboutSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/AboutSection/Data'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
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
            <Projects/>
            <AboutSection {...homeObjTwo} />
            <AboutSection {...homeObjThree} />
        </>
    );
}

export default Home;
