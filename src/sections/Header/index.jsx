import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from '../../contents/header'


const Header = () => {
    return (
        <div className='flex flex-col gap-y-2 pt-4'>
            <div className='flex flex-col lg:flex-row flex-wrap sm:gap-x-4 gap-y-1 mt-8'>
                <h1 className='text-4xl font-bold text-primaryTitle2 [-webkit-text-stroke:0.2px_#ffffff]'>
                    {data.name}
                </h1>
                <h1 className='text-4xl font-bold text-primaryTitle [-webkit-text-stroke:0.1px_#000000]'>
                    {data.last}
                </h1>
            </div>
            <h1 className='text-primaryTitle text-medium'>
                {data.title}
            </h1>
            <p className='text-sm text-primaryContent'>
                {data.period}
            </p>
            <p className='text-xs w-5/5 text-primaryContent leading-relaxed '>
                {data.caption}
            </p>


            <div className='pt-2'>
                <a
                    href={data.link}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:scale-98 transition-all duration-500 inline-flex text-black border-1px-white item-between bg-primaryTitle2 w-auto px-3 py-1 rounded-lg font-bold transition-colors cursor-pointer'
                >
                    <span>{data.btnText}</span>
                    <span className='rotate-90 inline-block text-sm pt-2 ml-2'>
                        <FontAwesomeIcon className='animate-bounce text-bold' icon= {faArrowDown} />
                    </span>
                </a>


            </div>
        </div>

    )

}

export default Header;