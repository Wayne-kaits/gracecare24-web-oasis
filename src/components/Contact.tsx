import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleEmail = () => {
    window.location.href = 'mailto:gracecare24@gmail.com';
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=33+Mahusekwa+Growth+Point+Marondera', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-transparent bg-gradient-hero bg-clip-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you with all your healthcare needs. Contact us anytime 
            for appointments, emergencies, or general inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-accent-light rounded-full">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  Emergency & Appointments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Primary: 0776 903 799</p>
                    <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                  </div>
                  <Button 
                    variant="medical" 
                    size="sm"
                    onClick={() => handleCall('0776903799')}
                  >
                    Call Now
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Secondary: 0775 364 407</p>
                    <p className="text-sm text-muted-foreground">Alternative Line</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleCall('0775364407')}
                  >
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-primary-light rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">gracecare24@gmail.com</p>
                    <p className="text-sm text-muted-foreground">For inquiries and appointments</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleEmail}
                  >
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-accent-light rounded-full">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">33 Mahusekwa Growth Point</p>
                    <p className="text-sm text-muted-foreground">Marondera, Zimbabwe</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleDirections}
                  >
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-primary-light rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground">Emergency Services:</span>
                    <span className="font-semibold text-accent">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">General Consultation:</span>
                    <span className="font-semibold text-primary">24/7</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    We're always here when you need us most
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contact Card */}
          <div className="space-y-6">
            <Card className="bg-gradient-accent text-accent-foreground shadow-accent border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Medical Emergency?</CardTitle>
                <CardDescription className="text-accent-foreground/80">
                  Don't wait - call us immediately for urgent medical care
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-bold">0776 903 799</div>
                <Button 
                  variant="secondary" 
                  size="xl"
                  className="w-full"
                  onClick={() => handleCall('0776903799')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Emergency Line
                </Button>
                <p className="text-sm text-accent-foreground/80">
                  Available 24 hours a day, 7 days a week
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero text-primary-foreground shadow-card border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold">Book an Appointment</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Schedule your consultation at your convenience
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="w-full"
                    onClick={() => handleCall('0776903799')}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call to Book
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={handleEmail}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-primary-light rounded-full">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  Why Choose GraceCare 24?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      24/7 availability for all your healthcare needs
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Experienced medical professionals
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive medical services under one roof
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      State-of-the-art medical equipment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;