import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../contents/project";


const Projects = () => {
    return (
        <div className="grid w-full max-w-6xl space-y-8 overflow-hidden my-2">
            <div className="text-primaryTitle font-medium">Projects</div>

            {data.map((project) => (
                <div key={project.id} className="grid gap-3">
                    <div className="text-sm font-semibold flex justify-between">
                        <span>{project.title}</span>
                        <span>[ {project.date} ]</span>
                    </div>

                    <div className="text-sm">{project.description}</div>
                    <div className="flex flex-wrap gap-2 text-sm">
                        {project.tags.map((tag, index) => (
                            <div key={index} className="bg-primaryBase px-2 py-1 rounded-md hover:text-primaryContent">{tag}</div>
                        ))}
                    </div>

                    <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-xl shadow-lg border border-slate-700 object-cover"
                    >
                        เบราว์เซอร์ไม่รองรับการเล่นวิดีโอ
                    </video>

                    <div className="flex gap-4 text-xl">
                        {project.links?.github && (
                            <a href={project.links.github} target="_blank" rel="noreferrer" className="hover:text-primaryAccent transition-colors">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        )}
                        {project.links?.youtube && (
                            <a href={project.links.youtube} target="_blank" rel="noreferrer" className="hover:text-primaryAccent transition-colors">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        )}
                        {project.links?.canva && (
                            <a href={project.links.canva} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primaryAccent transition-colors text-base font-medium">
                                <FontAwesomeIcon icon={faPaintBrush} /> Canva
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Projects;