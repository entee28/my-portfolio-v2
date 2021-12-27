import sanityClient from '../client';
import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring';

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

    const animation2 = useSpring({
        config: {
            duration: 600
        },
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        delay: 500
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

    return (
        <main>
            <animated.div style={animation}>
                <section className='project-container'>
                    <h1 className='heading-lg'><span className='decoration-lg'></span> My Latest Works</h1>
                    <animated.div style={animation2}>
                        <section className='grid-col-2'>
                            {projectData && projectData.map((project, index) => (
                                <article>
                                    <h3 className='heading-project'>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                    </h3>
                                    <div className='project-description'>
                                        {/* <span>
                                    <strong>Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span> */}
                                        {/* <br/> */}
                                        <span>
                                            <strong>Type</strong>:{" "}
                                            {project.projectType}
                                        </span>
                                        <div className='tags'>
                                            {project.tags.map((tag, index) => (
                                                <span className='pill'>{tag}</span>
                                            ))}
                                        </div>
                                        <p className='p-text'>{project.description}</p>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <img src={project.mainImage.asset.url} alt={project.mainImage.alt}
                                                className='project-img image' />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </section>
                    </animated.div>
                </section>
            </animated.div>
        </main>
    )
}

export default Projects
