import { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'


const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress]);

    return (
        <>
            {showModal ? (
                <section className='modal-background' ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <div className='modal-container'>
                            <div className='close-modal'>
                                <button onClick={() => setShowModal(prev => !prev)}>
                                    <span className='text-4xl font-bold'>&times;</span>
                                </button>
                            </div>
                            <div className='form-container'>
                                <h1 className='heading-md mb-20'>Hi, let us talk!</h1>
                                <form data-netlify="true" className='form-flex' value="sentMessage">
                                    <input type="hidden" name="form-name" value="contact" />

                                    <div className="input-row">
                                        <label htmlFor="name" className='input'>
                                            <input type="text" className="input__field" placeholder=' ' name='name' id='name' />
                                            <span className="input__label">Name</span>
                                        </label>
                                    </div>

                                    <div className="input-row">
                                        <label htmlFor="mail" className='input'>
                                            <input type='email' className="input__field" placeholder=' ' name='mail' id='mail' />
                                            <span className="input__label">Email</span>
                                        </label>
                                    </div>
                                    
                                    <div className="input-row">
                                        <label htmlFor="subject" className='input'>
                                            <input type='text' className="input__field" placeholder=' ' name='subject' id='subject' />
                                            <span className="input__label">Subject</span>
                                        </label>
                                    </div>
                                    
                                    
                                    <div className="input-row">
                                        <label htmlFor="message" className='input'>
                                            <textarea className="input__field" placeholder=' ' name='subject' id='subject' />
                                            <span className="input__label">Message</span>
                                        </label>
                                    </div>

                                    <div className="btn-group">
                                        <button className="btn btn-submit mt-14" type='submit'>Send</button>
                                        <button className='btn' type='reset'>Reset</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </animated.div>
                </section>

            ) : null}
        </>
    )
}

export default Modal
