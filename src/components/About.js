import React from 'react'

const About = () => {
    return (
        <section>
            <div className='figure'></div>
            <div className='about-container'>
                <div className='figure-2'></div>
                <div className='flex-container'>
                    <div className='box-text pl-10'>
                        <h2 className='heading-md'><span className='decoration-md'></span> About Me</h2>
                        <p className='p-text pt-5'>Currently a sophomore at HCMUS,
                            Thành is fueled by his passion for building and delivering incredible websites / softwares to end users.</p>
                    </div>
                </div>
                <div className='grid-col-2-about py-64'>
                    <h1 className='heading-text'>Driven by technology</h1>
                    <p className='p-text pl-32'>He considers himself a ‘forever student,’ eager to both build on his technical skills
                        and stay in tune with the latest technology through continued research and professional development.
                    </p>
                </div>
            </div>
            <div className='about-container'>
                <div className="experience" id="experience">
                    <div className="container">
                        <header className="section-header">
                            <p className='p-text'><span className='decoration'></span> My Resume</p>
                            <h2 className='heading-md'>Education, Working Experience</h2>
                        </header>
                        <div className="timeline mt-20">
                            <div className="timeline-item left">
                                <div className="timeline-text">
                                    <div className="timeline-date p-text">2020 - 2024</div>
                                    <h2>Bachelor of Computer and Information Sciences</h2>
                                    <h4>Ho Chi Minh University of Sciences, HCMC | Auckland University of Technology, NZ</h4>
                                    <p>

                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item right">
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
        </section>
    )
}

export default About
