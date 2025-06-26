import React, { useState, useEffect } from 'react';
import { 
  Recycle, 
  Leaf, 
  Users, 
  TrendingUp, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Target,
  Heart,
  Truck,
  BookOpen,
  Smartphone,
  Handshake,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-800">PT Sampah Nusantara</h1>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('philosophy')} className="text-gray-700 hover:text-emerald-600 transition-colors">Filosofi</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors">Kontak</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-emerald-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md">Layanan</button>
              <button onClick={() => scrollToSection('philosophy')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md">Filosofi</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md">Kontak</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-600 rounded-full mb-6 shadow-lg">
              <Recycle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-4">
              PT Sampah Nusantara
            </h1>
            <p className="text-2xl md:text-3xl text-emerald-700 mb-6 font-medium">
              Menabung Sampah, Menyelamatkan Lingkungan
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Pelopor sistem pengelolaan sampah berbasis masyarakat terbesar dan paling berdampak di Indonesia 
              melalui inovasi dan pemberdayaan komunitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Pelajari Layanan <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="border border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Tentang Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '10,000+', label: 'Nasabah Aktif' },
              { icon: Recycle, number: '500 Ton', label: 'Sampah Terdaur Ulang' },
              { icon: Leaf, number: '50+', label: 'Bank Sampah Partner' },
              { icon: Award, number: '95%', label: 'Tingkat Kepuasan' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-emerald-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Tentang PT Sampah Nusantara</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami adalah perusahaan yang berfokus pada pengelolaan dan daur ulang sampah berbasis masyarakat, 
              meliputi tabungan sampah, edukasi lingkungan, sistem digital pengelolaan sampah, dan pemberdayaan ekonomi sirkular.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-6">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Visi</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi pelopor sistem pengelolaan sampah berbasis masyarakat terbesar dan paling berdampak di Indonesia 
                melalui inovasi dan pemberdayaan komunitas.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-6">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Misi</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Mendorong masyarakat untuk memilah dan menabung sampah sebagai aset bernilai</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Menyediakan layanan penjemputan, pencatatan, dan penukaran sampah secara transparan</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Memberikan edukasi dan pelatihan pengelolaan sampah kepada masyarakat luas</span>
                </li>
              </ul>
            </div>

            {/* Goals */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-6">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Tujuan</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Mengurangi jumlah sampah yang dibuang ke TPA secara signifikan</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Meningkatkan taraf hidup masyarakat melalui insentif sampah</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Menumbuhkan budaya lingkungan bersih dan peduli daur ulang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Layanan Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan komprehensif untuk mendukung pengelolaan sampah yang berkelanjutan dan berdampak positif bagi masyarakat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Recycle,
                title: 'Tabungan Sampah',
                description: 'Sistem tabungan sampah dengan pencatatan digital dan transparansi penuh untuk nasabah.',
                color: 'bg-emerald-100 text-emerald-600'
              },
              {
                icon: Truck,
                title: 'Penjemputan Sampah',
                description: 'Layanan penjemputan sampah rutin langsung dari rumah atau lokasi usaha Anda.',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: BookOpen,
                title: 'Edukasi Lingkungan',
                description: 'Program pelatihan dan workshop untuk meningkatkan kesadaran pengelolaan sampah.',
                color: 'bg-lime-100 text-lime-600'
              },
              {
                icon: Smartphone,
                title: 'Sistem Digital',
                description: 'Platform digital terintegrasi untuk manajemen sampah yang efisien dan mudah digunakan.',
                color: 'bg-teal-100 text-teal-600'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${service.color} rounded-xl mb-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Filosofi Perusahaan</h2>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-4">"Dari Sampah Menjadi Berkah"</h3>
              <p className="text-xl text-white leading-relaxed">
                Bank Sampah Nusantara percaya bahwa sampah bukanlah akhir, melainkan awal dari perubahan 
                menuju lingkungan yang lestari dan masyarakat yang mandiri. Setiap sampah yang terkumpul 
                adalah langkah nyata menuju masa depan yang lebih hijau dan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Kemitraan & Kolaborasi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami bekerja sama dengan berbagai pihak untuk menciptakan ekosistem pengelolaan sampah yang komprehensif dan berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: 'Industri Daur Ulang',
                description: 'Kemitraan strategis dengan industri daur ulang untuk memastikan sampah dapat diproses menjadi produk bernilai.',
                points: ['Penjualan material daur ulang', 'Standardisasi kualitas', 'Jaminan pasar']
              },
              {
                icon: Users,
                title: 'Pemerintah Daerah',
                description: 'Kolaborasi dengan pemerintah dalam program pengelolaan sampah dan kebijakan lingkungan.',
                points: ['Program CSR', 'Dukungan regulasi', 'Kampanye edukasi']
              },
              {
                icon: Leaf,
                title: 'Komunitas Lokal',
                description: 'Pemberdayaan masyarakat melalui program bank sampah dan edukasi pengelolaan lingkungan.',
                points: ['Pelatihan pengelolaan', 'Insentif ekonomi', 'Pemberdayaan UMKM']
              }
            ].map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-6">
                  <partner.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{partner.title}</h3>
                <p className="text-gray-600 mb-6">{partner.description}</p>
                <ul className="space-y-2">
                  {partner.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bergabunglah dengan Gerakan Lingkungan Berkelanjutan
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Mari bersama-sama menciptakan lingkungan yang lebih bersih dan masyarakat yang lebih sejahtera 
            melalui pengelolaan sampah yang bijak dan berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Hubungi Kami Sekarang
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105">
              Download Brosur
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Hubungi Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Siap untuk memulai perjalanan menuju pengelolaan sampah yang lebih baik? Tim kami siap membantu Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Masukkan email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telepon</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Tuliskan pesan Anda..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telepon</h4>
                    <p className="text-gray-600">+62 878 2084 5810</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@sampahnusantara.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alamat</h4>
                    <p className="text-gray-600">Jl. Merdeka No.1, RT.05/RW.01, Abadijaya<br />Kec. Sukmajaya, Kota Depok, Jawa Barat</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-600 rounded-2xl p-6 text-white">
                <h4 className="font-semibold mb-2">Jam Operasional</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span>08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">PT Sampah Nusantara</h3>
                </div>
              </div>
              <p className="text-emerald-200 mb-4">
                Menabung Sampah, Menyelamatkan Lingkungan
              </p>
              <p className="text-sm text-emerald-300">
                Dari sampah menjadi berkah untuk masa depan yang lebih hijau dan berkelanjutan.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-emerald-200">
                <li><a href="#" className="hover:text-white transition-colors">Tabungan Sampah</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Penjemputan Sampah</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Edukasi Lingkungan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sistem Digital</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-emerald-200">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Tentang Kami</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Berita</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-emerald-200">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+62 87820845810</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@sampahnusantara.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>Jl. Merdeka No.1, RT.05/RW.01, Abadijaya<br />Kec. Sukmajaya, Kota Depok, Jawa Barat</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-800 pt-8 text-center">
            <p className="text-emerald-300">
              &copy; 2025 PT Sampah Nusantara. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
