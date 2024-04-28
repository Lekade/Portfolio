import React from 'react';

export const Projects = () => {
    return (
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
    );
};