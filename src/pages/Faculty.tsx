import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, User } from 'lucide-react';
import { SectionHeading } from '@/src/components/ui/SectionHeading';

const facultyData = [
  { name: 'Prof. Dr. Ir. Herbert Sipahutar, M.S.', title: 'Guru Besar', field: 'Ekologi Hidrobiologi', category: 'Ekologi', image: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Dr. Fauziyah Harahap, M.Si.', title: 'Kepala Jurusan', field: 'Fisiologi Tumbuhan', category: 'Botani', image: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Dr. Hasruddin, M.Pd.', title: 'Dosen Senior', field: 'Pendidikan Biologi', category: 'Pendidikan', image: 'https://i.pravatar.cc/150?u=3' },
  { name: 'Dr. Ashar Hasairin, M.Si.', title: 'Dosen Senior', field: 'Botani - Lichenologi', category: 'Botani', image: 'https://i.pravatar.cc/150?u=4' },
  { name: 'Dr. Syarifuddin, M.Sc.', title: 'Dosen Senior', field: 'Mikrobiologi Dasar', category: 'Mikrobiologi', image: 'https://i.pravatar.cc/150?u=5' },
  { name: 'Dr. Melva Silitonga, M.S.', title: 'Dosen Senior', field: 'Zoologi - Fisiologi Hewan', category: 'Zoologi', image: 'https://i.pravatar.cc/150?u=6' },
];

export const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Ekologi', 'Botani', 'Zoologi', 'Mikrobiologi', 'Pendidikan'];

  const filteredFaculty = useMemo(() => {
    return facultyData.filter(doc => {
      const matchSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.field.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = activeCategory === 'Semua' || doc.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section className="py-32 bg-neutral min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Dosen & Peneliti" 
          subtitle="Berkenalan dengan tenaga pengajar profesional yang berdedikasi dalam pengembangan sains hayat." 
        />

        {/* Interaction Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Cari nama atau bidang keahlian..."
              className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border border-primary/10 focus:outline-none focus:border-accent transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg' : 'bg-white text-primary/60 hover:bg-light'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredFaculty.map((doc, i) => (
              <motion.div 
                layout
                key={doc.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-[2.5rem] border border-primary/5 text-center group hover:shadow-xl transition-all"
              >
                <div className="relative mb-6 mx-auto w-40 h-40">
                  <div className="absolute inset-0 bg-accent blob transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                  <div className="absolute inset-2 overflow-hidden blob border-4 border-white z-10 shadow-inner">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h4 className="text-xl font-display font-bold text-primary mb-1 min-h-[3.5rem] flex items-center justify-center line-clamp-2">{doc.name}</h4>
                <p className="text-accent text-xs font-mono mb-4 uppercase tracking-widest font-bold">{doc.title}</p>
                <div className="pt-4 border-t border-light">
                  <p className="text-dark/50 text-sm italic">{doc.field}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredFaculty.length === 0 && (
          <div className="py-20 text-center">
            <User className="w-16 h-16 text-primary/10 mx-auto mb-4" />
            <p className="text-xl font-display text-primary/40 italic">Data dosen tidak ditemukan...</p>
          </div>
        )}
      </div>
    </section>
  );
};
