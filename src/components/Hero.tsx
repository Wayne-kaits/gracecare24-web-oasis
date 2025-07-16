import { Button } from "@/components/ui/button";
import { Clock, Shield, Heart, Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-subtle pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Your Health, Our
                <span className="text-transparent bg-gradient-hero bg-clip-text"> Priority</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                GraceCare 24 Medical Center provides comprehensive healthcare services 
                24/7 with experienced medical professionals and state-of-the-art equipment.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
                <div className="p-2 bg-primary-light rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">24/7 Care</h3>
                  <p className="text-sm text-muted-foreground">Always open</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
                <div className="p-2 bg-accent-light rounded-full">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Expert Care</h3>
                  <p className="text-sm text-muted-foreground">Qualified staff</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
                <div className="p-2 bg-primary-light rounded-full">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Compassionate</h3>
                  <p className="text-sm text-muted-foreground">Patient focused</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="medical" 
                size="xl"
                onClick={scrollToContact}
              >
                Book Appointment
              </Button>
              <Button 
                variant="emergency" 
                size="xl"
                className="flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Emergency: 0776 903 799
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/d7e10292-4339-4335-a3c7-face50263f83.png"
                alt="GraceCare 24 Medical Center Services"
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

export default Hero;