import { ArrowBigDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export const HomeSection = () => {
    return( 
    <section 
        id="home" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opactity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Noah</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Rogers</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foregroung max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptates? Quibusdam unde voluptatibus tempore culpa explicabo ullam quia fugiat nobis sequi? Labore, ea nesciunt! Non dolorem incidunt amet expedita debitis.
                </p>
            </div>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <HashLink to="#projects" className="cosmic-button">
                    View My Work
                </HashLink>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowBigDown className="h-5 w-5 text-primary"></ArrowBigDown>        
        </div>
    </section>
    );
}