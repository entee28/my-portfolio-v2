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
        if(modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
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
                                <h1 className='heading-md'>Hi, let us talk!</h1>
                            </div>
                        </div>
                    </animated.div>
                </section>

            ) : null}
        </>
    )
}

export default Modal
