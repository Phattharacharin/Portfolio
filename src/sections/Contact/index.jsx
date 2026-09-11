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
            <div 
                onClick={() => {
                    navigator.clipboard.writeText("phattharacharin.k@ku.th");
                    alert("คัดลอกอีเมล phattharacharin.k@ku.th ลงคลิปบอร์ดแล้ว!");
                }}
                className='hover:text-white hover:scale-120 transition-all duration-600 cursor-pointer'
                title="Copy Email"
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
        </div>
    )
}
export default Contact

