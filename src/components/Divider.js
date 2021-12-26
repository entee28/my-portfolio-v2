import React from 'react'
import github from '../img/github-brands.svg'
import envelope from '../img/envelope-regular.svg'

const Divider = () => {
    return (
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
    )
}

export default Divider
