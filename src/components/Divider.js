import React from 'react'
import github from '../img/github-brands.svg'
import envelope from '../img/envelope-regular.svg'
import { useSpring, animated } from 'react-spring'

const Divider = () => {
    const animation = useSpring({
        config: {
            duration: 200
        },
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        delay: 800
    })

    return (
        <animated.div style={animation}>
            <ul class="divider opacity-50">
                <li>
                    <a href="https://github.com/entee28" rel="noopener noreferrer" target="_blank">
                        <img src={github} alt="" />
                    </a>
                </li>
                <li>
                    <a href="mailto:puffle.nnt@gmail.com" rel="noopener noreferrer" target="_blank">
                        <img src={envelope} alt="" />
                    </a>
                </li>
            </ul>
        </animated.div>
    )
}

export default Divider
