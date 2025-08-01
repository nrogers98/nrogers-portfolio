import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState} from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast }  = useToast();
  const form = useRef();

 const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h436jfc', 'template_rlu4wmm', form.current, {
        publicKey: 'LZgPHoKD73kSEk6WV',
      }).then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    
    e.target.reset()

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return(
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text=primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunites.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 pt-7">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"/>
                </div>
                <div className="w-100">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:rogersnoah45@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    rogersnoah45@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary"/>
                </div>
                <div className="w-100">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+15068980772"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (506) 898-0772
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary"/>
                </div>
                <div className="w-100">
                  <h4 className="font-medium">Location</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Saint John, NB, Canada
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/noah-rogers-b324a124b/" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>     
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form 
              ref={form}
              className="space-y-6"
              onSubmit={sendEmail} 
            >
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe..."  
                >
                </input>
              </div>
              
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John@gmail.com"  
                >
                </input>
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."  
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16}/>
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}