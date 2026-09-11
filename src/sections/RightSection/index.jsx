import About from "../About";
import Projects from '../Projects';
import Certificate from '../Certificate';

const RightSection = () => {
    return (
        <div className='flex flex-col gap-y-10 pt-15 pb-20 px-5'>
            <div className='text-primaryContent text-xl' id="about">
                <About />
            </div>

            <div className='text-primaryContent text-xl' id="project">
                <Projects />
            </div>

            <div className='text-primaryContent text-xl' id="certificate">
                <Certificate />
            </div>
        </div>
    )
}
export default RightSection
