import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { SectionHeading } from '@/src/components/ui/SectionHeading';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Umum', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: 'Umum', message: '' });
    }, 1500);
  };

  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading 
              title="Hubungi Kami" 
              subtitle="Pintu kami selalu terbuka untuk diskusi ilmiah, kerjasama riset, maupun pertanyaan seputar pendaftaran." 
            />
            
            <div className="space-y-10 mt-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex gap-6 items-start group"
              >
                <div className="p-4 bg-light rounded-2xl text-primary group-hover:bg-accent transition-colors">
                  <MapPin />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1 text-primary">Alamat Kampus</h5>
                  <p className="text-primary/60 leading-relaxed uppercase">Jln. William Iskandar PS. V No. 104 Kotak Pos No. 1589 - Medan Sumatera Utara, ID 20221</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 items-start group"
              >
                <div className="p-4 bg-light rounded-2xl text-primary group-hover:bg-accent transition-colors">
                  <Phone />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1 text-primary">Telepon / Fax</h5>
                  <p className="text-primary/60">(061) 6613365<br />Senin - Jumat, 08:00 - 16:00 WIB</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 items-start group"
              >
                <div className="p-4 bg-light rounded-2xl text-primary group-hover:bg-accent transition-colors">
                  <Mail />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1 text-primary">Email Resmi</h5>
                  <p className="text-primary/60">biologi@unimed.ac.id<br />mipa.bio@unimed.ac.id</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-neutral p-10 md:p-12 rounded-[3rem] border border-primary/5 shadow-sm">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-primary w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-primary mb-4">Pesan Terkirim!</h4>
                  <p className="text-primary/60 mb-8">Terima kasih atas pesan Anda. Tim administrasi kami akan segera menghubungi Anda melalui email.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="font-bold text-accent hover:underline"
                  >
                    Kirim pesan lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-primary/50 uppercase tracking-widest pl-1">Nama Lengkap</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-accent shadow-sm transition-all"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-primary/50 uppercase tracking-widest pl-1">Alamat Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-white border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-accent shadow-sm transition-all"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-primary/50 uppercase tracking-widest pl-1">Subjek</label>
                    <select 
                      className="w-full bg-white border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-accent shadow-sm transition-all appearance-none"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    >
                      <option>Umum</option>
                      <option>Pendaftaran S1</option>
                      <option>Kerjasama Riset</option>
                      <option>Keluhan / Saran</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-primary/50 uppercase tracking-widest pl-1">Pesan Anda</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full bg-white border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-accent shadow-sm transition-all"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 rounded-[3.5rem] overflow-hidden shadow-2xl h-[500px] border border-primary/5"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.4852924194098!2d98.71510421077978!3d3.607281250156976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cacf8c0875%3A0xb03824eeaf0c7d4d!2sGedung%20Biologi%20FMIPA%20UNIMED!5e0!3m2!1sid!2sid!4v1715533800000!5m2!1sid!2sid"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
