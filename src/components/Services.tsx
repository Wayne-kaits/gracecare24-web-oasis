import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Stethoscope, 
  Baby, 
  Heart, 
  Microscope, 
  Scan, 
  X as XRay,
  Home,
  TestTube,
  Scale,
  Syringe,
  Activity,
  Shield
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Treatment",
    description: "Comprehensive medical treatment for various conditions"
  },
  {
    icon: Heart,
    title: "Wellness Clinic",
    description: "Preventive care and health maintenance services"
  },
  {
    icon: Baby,
    title: "Antenatal & Post Natal Care",
    description: "Complete maternity care for mothers and babies"
  },
  {
    icon: Microscope,
    title: "Medical Examinations",
    description: "Thorough health assessments and check-ups"
  },
  {
    icon: Activity,
    title: "Chronic Illness Follow-up Care",
    description: "Ongoing management of chronic conditions"
  },
  {
    icon: Home,
    title: "Home Based Care",
    description: "Routine checkups and care in the comfort of your home"
  },
  {
    icon: Shield,
    title: "Family Planning Services",
    description: "Comprehensive reproductive health services"
  },
  {
    icon: TestTube,
    title: "HIV Testing & Counselling",
    description: "Confidential testing and support services"
  },
  {
    icon: Scan,
    title: "Scan",
    description: "Advanced diagnostic imaging services"
  },
  {
    icon: XRay,
    title: "X-ray",
    description: "Digital radiography for accurate diagnosis"
  },
  {
    icon: Microscope,
    title: "Laboratory",
    description: "Comprehensive laboratory testing services"
  },
  {
    icon: Scale,
    title: "Baby Scale & Vaccinations",
    description: "Pediatric care and immunization services"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Medical <span className="text-transparent bg-gradient-hero bg-clip-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive healthcare services with a focus on quality, 
            compassion, and accessibility for all patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-soft"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary-light rounded-full group-hover:bg-accent-light transition-colors">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 24/7 Consultation Banner */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-2">24/7 CONSULTATION</h3>
            <p className="text-lg opacity-90">
              Emergency medical services available around the clock
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;