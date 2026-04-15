import { Mail, Phone, MapPin, Share2, Globe, MessageCircle, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/icaebms-logo.png" alt="Logo" className="h-10 brightness-0 invert" />
              <span className="font-bold text-2xl tracking-tight">ICAEBMS 2026</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities. Serving as a global platform for academic excellence and sustainable innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-all"><Share2 size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-all"><Globe size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-all"><MessageCircle size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-all"><Info size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Conference</a></li>
              <li><a href="#theme" className="hover:text-secondary transition-colors">Conference Theme</a></li>
              <li><a href="#tracks" className="hover:text-secondary transition-colors">Session Tracks</a></li>
              <li><a href="#dates" className="hover:text-secondary transition-colors">Important Dates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Organizer
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-secondary rounded-full"></span>
            </h4>
            <div className="space-y-6">
              <img src="/cerada-logo.png" alt="CERADA" className="h-12 brightness-0 invert opacity-80" />
              <p className="text-white/70 text-sm italic">
                Confworld Educational Research and Development Association (CERADA)
              </p>
              <div className="text-xs font-mono bg-white/5 p-3 rounded-lg border border-white/10">
                ISBN: 978-95-813001-3-6
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-6 text-white/70 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span>Bangkok Convention Centre, Bangkok, Thailand</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-secondary shrink-0" size={20} />
                <span>+66 (0) 2XXX XXXX</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-secondary shrink-0" size={20} />
                <span>contact@icaebms2026.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/50 uppercase tracking-widest">
          <p>© 2026 ICAEBMS. All Rights Reserved.</p>
          <p>Organized by CERADA</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
