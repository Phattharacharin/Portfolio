import { data } from "../../contents/about"

const About = () => {
    return (
        <div>
            <div className="text-primaryTitle font-medium space-y-4">{data.title}</div>
            <div className="my-4 text-primaryContent text-sm mr-5">
                {data.description}</div>
        </div>
    )
}
export default About;

