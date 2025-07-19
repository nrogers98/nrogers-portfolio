import { Briefcase, Code, User } from "lucide-react"
import { HashLink } from "react-router-hash-link"

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="containter mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Web Developer & Tech Creator
                    </h3>

                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, culpa. Deserunt beatae, sed dolorem deleniti ullam accusantium pariatur consequatur temporibus voluptate quam unde est dolore fugiat, quidem explicabo rem necessitatibus?
                    </p>

                    <div className="flex flec-col sm:flex-row gap-4 pt-4 justify-center">
                        <HashLink to="#contact" className="cosmic-button">
                            Get In Touch
                        </HashLink>

                        <a href="https://drive.google.com/uc?export=download&id=1eiUFy8OUJK3yeUW8ht4PzTFeff5XilU7" className="void-button">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"></Code>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites and web applications with modern frameworks
                                </p>
                            </div>
                        </div>
                    </div>    
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"></User>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive user interfaces and seamless user experiences
                                </p>
                            </div>
                        </div>
                    </div>         
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Agile/Scrum</h4>
                                <p className="text-muted-foreground">
                                    Working in teams from conception to completion using agile methodologies
                                </p>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
    )
}