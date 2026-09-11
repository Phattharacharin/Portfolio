import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Contact.jsx
const Contact = () => {
    return (
        /* เอา flex-1 ออก เพื่อไม่ให้กล่องยืดกินพื้นที่ลงไปข้างล่าง */
        <div className='flex items-center gap-4 text-2xl text-slate-400'>
            <a href="https://github.com/Phattharacharin" target="_blank" className='hover:text-white hover:scale-120 transition-all duration-600'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/phattharacharin-khamsitha-0b0a173a0/" target="_blank" className='hover:text-white hover:scale-120 transition-all duration-600'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
                href="mailto:phattharacharin.k@ku.th"
                className='hover:text-white hover:scale-120 transition-all duration-600 cursor-pointer'
                title="Send an email to phattharacharin.k@ku.th"
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    )
}
export default Contact

