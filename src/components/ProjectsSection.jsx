import { ArrowRight } from "lucide-react"
import { Carousel } from "@/components/ui/Carousel"
import img1 from "@/images/bae.PNG"
import img2 from "@/images/benjamin.jpg"
import img3 from "@/images/captcha.PNG"

const IMAGES = [img1, img2, img3]

const projects = [
    {
        id: 1,
        title: "placeholder",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sit, esse maiores hic ex cumque minus? Dolorem ipsum, nisi laudantium officia sint quaerat, possimus, tenetur repellat incidunt animi unde libero!",
        image: img1,
        tags: ["React", "TailwindCSS", "Go"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "placeholder",
        description: "Yeah",
        image: img2,
        tags: ["React", "TailwindCSS", "Go"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "placeholder",
        description: "Yeah",
        image: img3,
        tags: ["React", "TailwindCSS", "Go"],
        demoUrl: "#",
        githubUrl: "#"
    },
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foregroung mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects ranging from school work to personal projects made to further my learning of a skill or create entire new ones
                </p>

                <Carousel projects={projects} />

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/nrogers98"
                    >
                        Check my Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}