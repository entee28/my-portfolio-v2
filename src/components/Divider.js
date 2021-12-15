import React from 'react'
import github from '../img/github-brands.svg'
import envelope from '../img/envelope-regular.svg'

const Divider = () => {
    return (
        <ul class="divider opacity-50">
            <li>
                <a href="https://github.com/entee28" target="_blank">
                    <img src={github} alt="" className='w-7 h-7' />
                </a>
            </li>
            <li>
                <a href="mailto:puffle.nnt@gmail.com" target="_blank">
                    <img src={envelope} alt="" className='w-7 h-7' />
                </a>
            </li>
        </ul>
    )
}

export default Divider
