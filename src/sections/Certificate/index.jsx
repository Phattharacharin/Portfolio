import { data } from "../../contents/certificate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Certificate = () => {
    return (
        <div className="grid w-full max-w-6xl space-y-5 overflow-hidden mt-3">
            <div className="text-primaryTitle font-medium">Certificate</div>

            {data.map((item) => (
                <div key={item.id} className="grid gap-3">
                    <div className="text-sm font-semibold flex justify-between">
                        <span>{item.title}</span>
                        <span>[ {item.date} ]</span>
                    </div>

                    <div className="text-sm text-primaryContent">{item.description}</div>

                    {item.link !== "#" && (
                        <a href={item.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 w-fit transition-colors">
                            Read more <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </a>
                    )}
                </div>
            ))}
        </div>
    )
}
export default Certificate;
