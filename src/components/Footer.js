import facebook from '../img/facebook.svg'
import github from '../img/github.svg'
import instagram from '../img/instagram.svg'

const Footer = () => {
    return (
        <footer>
            <div className="divider"></div>
            <div className='footer'>
                <div className='footer-container'>
                    <div>
                        <h2>Thành Nguyễn</h2>
                        <p>Well this can't get any weirder.</p>
                        <div>
                            <button className='social'><img src={facebook} alt="facebook" /></button>
                            <button className='social'><img src={github} alt="github" /></button>
                            <button className='social'><img src={instagram} alt="instagram" /></button>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
