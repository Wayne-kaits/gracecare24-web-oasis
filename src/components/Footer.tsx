import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-accent p-2 rounded-lg">
                <div className="text-white font-bold text-xl">G</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-background">
                  Grace<span className="text-accent">Care</span>
                  <span className="text-accent font-black"> 24</span>
                </h3>
                <p className="text-xs text-background/70 uppercase tracking-wide">Medical Center</p>
              </div>
            </div>
            <p className="text-background/80 text-sm">
              Providing exceptional healthcare services 24/7 to the Marondera 
              community with compassion, expertise, and state-of-the-art facilities.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm text-background">0776 903 799</p>
                  <p className="text-xs text-background/70">Primary Line</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm text-background">0775 364 407</p>
                  <p className="text-xs text-background/70">Alternative Line</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm text-background">gracecare24@gmail.com</p>
                  <p className="text-xs text-background/70">Email Us</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Location & Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <div>
                  <p className="text-sm text-background">33 Mahusekwa Growth Point</p>
                  <p className="text-sm text-background">Marondera, Zimbabwe</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-accent mt-0.5" />
                <div>
                  <p className="text-sm text-background font-semibold">Open 24/7</p>
                  <p className="text-xs text-background/70">Always here for you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Key Services</h4>
            <div className="space-y-2">
              <p className="text-sm text-background/80">• Emergency Care</p>
              <p className="text-sm text-background/80">• General Consultation</p>
              <p className="text-sm text-background/80">• Laboratory Services</p>
              <p className="text-sm text-background/80">• X-ray & Scan</p>
              <p className="text-sm text-background/80">• Maternity Care</p>
              <p className="text-sm text-background/80">• Chronic Care</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-accent" />
              <p className="text-sm text-background/80">
                © {currentYear} GraceCare 24 Medical Center. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-background/80">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Patient Rights</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;