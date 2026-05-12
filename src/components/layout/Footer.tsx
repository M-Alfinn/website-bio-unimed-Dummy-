import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="UNIMED Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Unimed.png";
                  }}
                />
              </div>
              <span className="text-3xl font-display font-bold whitespace-nowrap">Bio · UNIMED</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-8">
              Membangun masa depan melalui pemahaman mendalam tentang kehidupan, sains, dan dedikasi pada lingkungan.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, color: '#7EC850' }}
                  href="#" className="p-3 bg-primary/30 rounded-full transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/" className="hover:text-accent transition-colors">Beranda</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors">Program Studi</Link></li>
              <li><Link to="/faculty" className="hover:text-accent transition-colors">Dosen & Staf</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Akademik</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">Kurikulum</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Jadwal Kuliah</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">E-Learning</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Perpustakaan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Kontak</h4>
            <ul className="space-y-4 text-white/60 mb-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Jln. William Iskandar PS. V No. 104 Kotak Pos No. 1589 - Medan Sumatera Utara, ID 20221</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>(061) 6613365</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>biologi@unimed.ac.id</span>
              </li>
            </ul>
            <div className="rounded-xl overflow-hidden h-40 border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.4852924194098!2d98.71510421077978!3d3.607281250156976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cacf8c0875%3A0xb03824eeaf0c7d4d!2sGedung%20Biologi%20FMIPA%20UNIMED!5e0!3m2!1sid!2sid!4v1715533800000!5m2!1sid!2sid"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Jurusan Biologi UNIMED. Member of FMIPA.</p>
          <div className="flex gap-8 text-sm text-white/60">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
