import './App.css';
import {Header} from "./layouts/header/Header";
import {Intro} from "./layouts/sections/intro/Intro";
import {TechStack} from "./layouts/sections/techStack/TechStack";
import {Projects} from "./layouts/sections/projects/Projects";
import {Contacts} from "./layouts/sections/contact/Contacts";
import {Footer} from "./layouts/footer/Footer";


function App() {
    return (
        <div className="app">
            <Header/>
            <main>
                <Intro/>
                <TechStack/>
                <Projects/>
                <Contacts/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
