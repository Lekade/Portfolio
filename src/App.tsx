import './App.css';
import {Header} from "./layouts/header/Header";


function App() {
    return (
        <div className="appWrapper">
            <Header/>
            <main>
                <section className="intro">
                    <div className="container">
                        <div className="introContent">
                            <span>Hello</span>
                            <h1>I’m Denis Kasperovich</h1>
                            <p>I've been doing web design, front-end and back-end development
                                for a year now. Do you need a website design, site layout,
                                or maybe a turnkey website? Then contact me</p>
                            <button>Contact me</button>
                        </div>
                    </div>
                </section>
                <section className="techStack">
                    <div className="container">
                        <h2>My Tech Stack</h2>
                        <span>Technologies I’ve been working with recently</span>
                        <div className="icons">
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </section>
                <section className="aboutMe">
                    <div className="container">
                        <img src="" alt=""/>
                        <div className="aboutMeContent">
                            <h2>About Me</h2>
                            <p>I’d describe myself as a goal-oriented and hardworking person with experience in creating SPA,
                                usingReact(JS/TS), Redux, HTML & CSS. Now I am improving my skills in this direction and expanding
                                them with new technologies. In the future, I would like to become a full-stack developer.</p>
                        </div>
                    </div>
                </section>
                <section className="projects">
                    <div className="container">
                        <h2>Projects</h2>
                        <span>Things I’ve built so far</span>
                        <div className="ProjectsItems">
                            <article className="project">
                                <img src="" alt=""/>
                                <h3>Project Tile goes here</h3>
                                <p>This is sample project description random things are here in description
                                    This is sample project lorem ipsum generator for dummy content</p>
                                <span>Tech stack :</span><span>HTML , JavaScript, SASS, React</span>
                                <a href="#" className="projectLink">
                                    <img src="" alt="link"/>
                                    <span>Live Preview</span>
                                </a>
                                <a href="#" className="projectLink">
                                    <img src="" alt="link"/>
                                    <span>View Code</span>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <div className="container">
                        <h2>Contacts</h2>
                        <form>
                            <label >
                                <span>Name</span>
                                <input type="text" placeholder="Name"/>
                            </label>
                            <label >
                                <span>Mail</span>
                                <input type="email" placeholder="Mail"/>
                            </label>
                            <label >
                                <span>Message</span>
                                <textarea placeholder="Message"/>
                            </label>
                            <button>Submit</button>
                        </form>
                    </div>
                </section>
            </main>
            <footer>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About me</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="contact">
                    <span>Contact:</span>
                    <span>Email: notitanic33@gmail.com</span>
                    <span>Inst: notitanic33</span>
                    <span>Calls: +7 (900) - 121 - 54 -54</span>
                </div>
                <div className="logo">Lekade</div>
                <span>Copyright © 2024, Notitanic</span>
            </footer>
        </div>
    );
}

export default App;
