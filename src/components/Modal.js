import { useRef, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form';
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

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <>
            {showModal ? (
                <section className='modal-background' ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <div className='modal-container'>
                            <div className='close-modal'>
                                <button onClick={() => setShowModal(prev => !prev)}>
                                    <span className='close-modal-btn'>&times;</span>
                                </button>
                            </div>
                            <div className='form-container'>
                                <h1 className='heading-md'>Hi, let us talk!</h1>
                                <form data-netlify="true" className='form-flex' value="sentMessage" onSubmit={handleSubmit(onSubmit)}>
                                    <input type="hidden" name="form-name" value="contact" />

                                    <div className="input-row">
                                        <label htmlFor="name" className='input'>
                                            <input type="text" className="input__field" placeholder=' ' name='name' id='name'
                                                {...register("name", {
                                                    required: true,
                                                    pattern: /\p{L}+/u
                                                })} />
                                            <span className="input__label">Name</span>
                                        </label>
                                        {errors?.name?.type === "required" && <p className='error'>This field is required</p>}
                                        {errors?.name?.type === "pattern" && (
                                            <p className='error'>Alphabetical characters only</p>
                                        )}
                                    </div>

                                    <div className="input-row">
                                        <label htmlFor="mail" className='input'>
                                            <input className="input__field" placeholder=' ' name='mail' id='mail'
                                                {...register("mail", {
                                                    required: true,
                                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                })} />
                                            <span className="input__label">Email</span>
                                        </label>
                                        {errors?.mail?.type === "required" && <p className='error'>This field is required</p>}
                                        {errors?.mail?.type === "pattern" && (
                                            <p className='error'>Invalid email</p>
                                        )}
                                    </div>

                                    <div className="input-row">
                                        <label htmlFor="subject" className='input'>
                                            <input type='text' className="input__field" placeholder=' ' name='subject' id='subject'
                                                {...register("subject")} />
                                            <span className="input__label">Subject</span>
                                        </label>
                                    </div>


                                    <div className="input-row">
                                        <label htmlFor="message" className='input'>
                                            <textarea className="input__field" placeholder=' ' name='subject' id='subject'
                                                {...register("message", {
                                                    required: true
                                                })} />
                                            <span className="input__label">Message</span>
                                        </label>
                                        {errors?.message?.type === "required" && <p className='error'>This field is required</p>}
                                    </div>

                                    <div className="btn-group">
                                        <button className="btn btn-submit" type='submit'>Send</button>
                                        {/* <button className='btn' type='reset' onClick={resetForm}>Reset</button> */}
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
