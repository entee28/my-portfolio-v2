import sanityClient from '../client';
import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring';
import Aos from 'aos';

const Projects = () => {
    const [projectData, setProjectData] = useState(null);

    const animation = useSpring({
        config: {
            duration: 600
        },
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    })

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            link,
            tags,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data) => setProjectData(data))
            .catch(console.error);
    }, []);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <main>
            <div className='about-container experience-section'>
                <div className="experience" id="experience">
                    <div className="container">
                        <header className="section-header">
                            <div data-aos="fade" data-aos-duration="1000" data-aos-once="true">
                                <p className='p-text about-header'><span className='decoration'></span> Timeline</p>
                                <h2 className='heading-md'>Résumé / Experience</h2>
                            </div>
                        </header>
                        <div className="timeline">
                            <div className="timeline-item left" data-aos="slide-left" data-aos-once="true">
                                <div className="timeline-text">
                                    <div className="timeline-date p-text">2020 - 2024</div>
                                    <h2>Bachelor of Computer and Information Sciences</h2>
                                    <h4>Ho Chi Minh University of Sciences, HCMC | Auckland University of Technology, NZ</h4>
                                    <p>

                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item right" data-aos="slide-right" data-aos-once="true" data-aos-delay='200'>
                                <div className="timeline-text">
                                    <div className="timeline-date p-text">??? - ???</div>
                                    <h2>There's more to come</h2>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <animated.div style={animation}>
                <section className='project-container'>
                    <header className="section-header">
                        <div data-aos="fade" data-aos-duration="1000" data-aos-once="true">
                            <p className='p-text about-header'><span className='decoration'></span> Projects</p>
                            <h2 className='heading-md'>My Latest Works</h2>
                        </div>
                    </header>

                    <div className="project-content">
                        {projectData && projectData.map((project, index) => (
                            <div className="project-card-container">
                                <div className="project-card">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <div className="project-card--display">
                                            <img src={project.mainImage.asset.url} alt={project.mainImage.alt} />
                                            <h2>{project.title}</h2>
                                            <div className='tags'>
                                                {project.tags.map((tag, index) => (
                                                    <span className='pill'>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="project-card--hover">
                                            <h2>{project.title}</h2>
                                            <div className='tags'>
                                                {project.tags.map((tag, index) => (
                                                    <span className='pill'>{tag}</span>
                                                ))}
                                            </div>
                                            <p>{project.description}</p>
                                            <p className="link">Click to see project</p>
                                        </div>
                                    </a>
                                    <div className="project-card--border"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </animated.div>
        </main>
    )
}

export default Projects
