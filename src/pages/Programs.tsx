import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Microscope, FlaskConical, ClipboardCheck, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/src/components/ui/SectionHeading';

const curricula = {
  biologi: [
    { sem: 'Semester 1-2', subjects: ['Biologi Umum', 'Kimia Dasar', 'Matematika Sains', 'Bahasa Inggris Ilmiah'] },
    { sem: 'Semester 3-4', subjects: ['Biologi Sel', 'Struktur Hewan/Tumbuhan', 'Mikrobiologi', 'Ekologi'] },
    { sem: 'Semester 5-6', subjects: ['Biologi Molekuler', 'Genetika', 'Bioinformatika', 'Metodologi Penelitian'] },
    { sem: 'Semester 7-8', subjects: ['KKN', 'Magang Industri', 'Skripsi / Riset Akhir'] },
  ],
  pendidikan: [
    { sem: 'Semester 1-2', subjects: ['Pengantar Kependidikan', 'Biologi Umum', 'Filsafat Pendidikan', 'Psikologi Belajar'] },
    { sem: 'Semester 3-4', subjects: ['Strategi Pembelajaran', 'Media Pendidikan', 'Evaluasi Proses & Hasil Belajar'] },
    { sem: 'Semester 5-6', subjects: ['Kurikulum Merdeka', 'Statistika Pendidikan', 'Microteaching', 'Inovasi Pendidikan'] },
    { sem: 'Semester 7-8', subjects: ['PPL / Internship Sekolah', 'Skripsi Pendidikan'] },
  ]
};

export const Programs = () => {
  const [activeTab, setActiveTab] = useState<'biologi' | 'pendidikan'>('biologi');

  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Program Pendidikan" 
          subtitle="Menghasilkan lulusan yang kompeten di laboratorium maupun di depan kelas." 
        />

        <div className="flex flex-col md:flex-row gap-6 mb-20 p-2 bg-light rounded-[2.5rem] max-w-2xl mx-auto shadow-inner border border-primary/5">
          <button 
            onClick={() => setActiveTab('biologi')}
            className={`flex-1 py-5 px-8 rounded-full font-bold transition-all flex items-center justify-center gap-3 ${activeTab === 'biologi' ? 'bg-primary text-white shadow-xl' : 'text-primary/60 hover:text-primary'}`}
          >
            <FlaskConical className="w-5 h-5" />
            S1 Biologi Murni
          </button>
          <button 
            onClick={() => setActiveTab('pendidikan')}
            className={`flex-1 py-5 px-8 rounded-full font-bold transition-all flex items-center justify-center gap-3 ${activeTab === 'pendidikan' ? 'bg-primary text-white shadow-xl' : 'text-primary/60 hover:text-primary'}`}
          >
            <GraduationCap className="w-5 h-5" />
            S1 Pendidikan Biologi
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            key={activeTab + 'info'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-mono text-sm uppercase tracking-widest">
              Profile Lulusan
            </div>
            <h3 className="text-5xl font-display font-bold text-primary leading-tight">
              {activeTab === 'biologi' ? 'Menjadi Peneliti & Analis Profesional' : 'Membentuk Pendidik Berwawasan Masa Depan'}
            </h3>
            <p className="text-xl text-dark/70 leading-relaxed italic font-serif-alt">
              {activeTab === 'biologi' 
                ? 'Kami fokus pada penguasaan teknik laboratorium modern, analisis genetika, dan konservasi biodiversitas tropis.' 
                : 'Kami memadukan penguasaan konten biologi yang kuat dengan metodologi pengajaran inovatif berbasis digital.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Microscope, label: 'Laboratorium Terintegrasi' },
                { icon: ClipboardCheck, label: 'Sertifikasi Kompetensi' },
                { icon: BookOpen, label: 'Jurnal Terakreditasi' },
                { icon: GraduationCap, label: 'Networking Alumni Luas' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-neutral rounded-2xl border border-primary/5">
                  <div className="p-3 bg-white rounded-xl text-accent shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-primary text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute top-0 left-6 h-full w-1 bg-light z-0 hidden lg:block" />
            <div className="space-y-12 relative z-10">
              {curricula[activeTab].map((stage, i) => (
                <motion.div 
                  key={activeTab + i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-[-1.1rem] top-2 w-10 h-10 bg-white rounded-full border-4 border-light flex items-center justify-center shadow-md z-20">
                    <div className="w-4 h-4 bg-accent rounded-full" />
                  </div>
                  <div className="bg-neutral p-8 rounded-[2rem] border border-primary/5 hover:border-accent/40 transition-colors">
                    <h5 className="font-mono text-accent text-xs uppercase tracking-widest mb-2">{stage.sem}</h5>
                    <h4 className="text-2xl font-display font-bold text-primary mb-6">Fokus Kurikulum</h4>
                    <div className="flex flex-wrap gap-2">
                      {stage.subjects.map((s, j) => (
                        <span key={j} className="px-4 py-2 bg-white rounded-full text-xs font-bold text-primary/70 shadow-sm border border-primary/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
