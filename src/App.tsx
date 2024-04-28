import './App.css';
import {Header} from "./layouts/header/Header";
import {Intro} from "./layouts/sections/intro/Intro";
import {TechStack} from "./layouts/sections/techStack/TechStack";
import {AboutMe} from "./layouts/sections/aboutMe/AboutMe";
import {Projects} from "./layouts/sections/projects/Projects";
import {Contact} from "./layouts/sections/contact/Contact";
import {Footer} from "./layouts/footer/Footer";


function App() {
    return (
        <div className="appWrapper">
            <Header/>
            <main>
                <Intro/>
                <TechStack/>
                <AboutMe/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
