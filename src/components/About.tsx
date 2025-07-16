import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                About <span className="text-transparent bg-gradient-hero bg-clip-text">GraceCare 24</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Located at 33 Mahusekwa Growth Point Marondera, GraceCare 24 Medical Center 
                is dedicated to providing exceptional healthcare services to our community. 
                Our state-of-the-art facility combines modern medical technology with 
                compassionate care.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in accessible healthcare for all, which is why we operate 24/7 
                to ensure that quality medical care is available whenever you need it most.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Hours of Operation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">12+</div>
                <p className="text-muted-foreground">Medical Services</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
                <div className="p-2 bg-primary-light rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Qualified professionals</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
                <div className="p-2 bg-accent-light rounded-full">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Quality Care</h3>
                  <p className="text-sm text-muted-foreground">High standards</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
                <div className="p-2 bg-primary-light rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Always Open</h3>
                  <p className="text-sm text-muted-foreground">24/7 availability</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
                <div className="p-2 bg-accent-light rounded-full">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Accessible</h3>
                  <p className="text-sm text-muted-foreground">Central location</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/a0fb523c-3d7a-4519-8e29-c802c4ce3ef9.png"
                alt="GraceCare 24 Medical Center Building"
                className="w-full h-auto rounded-2xl shadow-card"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-hero rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;