import sanityClient from '../client';
import { useEffect, useState } from 'react'

const Projects = () => {
    const [projectData, setProjectData] = useState(null);

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
            <section className='about-container'>
                <h1 className='heading-lg my-32'><span className='decoration-lg'></span> My Latest Works</h1>
                <section className='grid-col-2 gap-8'>
                    {projectData && projectData.map((project, index) => (
                        <article className='relative rounded-lg shadow-xl bg-white p-16'>
                            <h3 className='heading-project'>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            </h3>
                            <div className='text-gray-500 text-xs '>
                                <span>
                                    <strong className='font-bold'>Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <br/>
                                <span>
                                    <strong className='font-bold'>Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <div className='tags'>
                                    {project.tags.map((tag, index) => (
                                        <span className='mr-2 pill'>{tag}</span>
                                    ))}
                                </div>
                                <p className='p-text'>{project.description}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Projects
