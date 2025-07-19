import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot, ExternalLink, Github } from "lucide-react"
import { useState } from "react"

type ProjectList = {
  projects: Project[]
}

type Project = {
    id: number,
    title: string,
    description: string,
    image: string,
    tags: string[],
    demoUrl: string,
    githubUrl: string,
}

export function Carousel ( {projects}:
ProjectList) {
    const [projectIndex, setProjectIndex] = useState(0)

    function showPrevImage() {
      setProjectIndex(index => {
        if (index === 0) return projects.length -1
        return index - 1
      })
    }

    function showNextImage() {
      setProjectIndex(index => {
        if (index === projects.length - 1) return 0
        return index + 1
      })
    }

    return (
      <div className="w-full h-full relative">
        <div className="w-full h-full flex overflow-hidden">
          <div
            className="flex w-full h-full transition-transform duration-500"
            style={{ transform: `translateX(-${projectIndex * 100}%)` }}
          >
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs w-full h-full block flex-shrink-0"
                style={{ minWidth: '100%' }}
              >
                <div className="h-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="image-slider-img w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 h-10 px-16">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ml-14 pb-6">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="carousel-btn left-0"
          onClick={showPrevImage}
        >
          <ArrowBigLeft />
        </button>
        <button
          className="carousel-btn right-0"
          onClick={showNextImage}
        >
          <ArrowBigRight />
        </button>
        <div className="absolute pt-8 left-[50%] translate-[-50%] flex gap-0.5">
          {projects.map((_, index) => (
            <button 
              className="cursor-pointer hover:scale-120 transition duration-300 ease-in-out" 
              onClick={() => setProjectIndex(index)}>{index === projectIndex ? <CircleDot/> : <Circle/>}</button>
          ))}
        </div>
      </div>
    )
}
