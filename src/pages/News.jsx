import NewsCard from "../components/NewsCard";
import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.png";
import foto4 from "../assets/foto4.png";
import foto5 from "../assets/foto5.png";


function News() {
  return (
    <section className="py-20 px-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-10">Berita Terbaru</h2>

      <div className="grid md:grid-cols-4 gap-8">

        <NewsCard
          image={foto1}
          date="27 Februari 2026"
          title="Transformasi Digital UMKM"
          excerpt="Klik Digital Group membantu UMKM dalam mengadopsi sistem digital modern."
        />
        <NewsCard
          image={foto2}
          date="25 Februari 2026"
          title="Kolaborasi Inovasi Berkelanjutan"
          excerpt="Kolaborasi lintas sektor menjadi fondasi pertumbuhan ekonomi digital."
        />
        <NewsCard
          image={foto4}
          date="28 Februari 2026"
          title="Amal SOSIAL Klik Digital Group"
          excerpt="Klik Digital Group melaksanakan kegiatan sosial untuk masyarakat kurang mampu."
        />
        <NewsCard
          image={foto5}
          date="11 Februari 2026"
          title="Sosialisasi Program Digital"
          excerpt="Kunjungan ke sekolah-sekolah untuk mengenalkan program digital Klik Digital Group."
        />

      </div>
    </section>
  );
}

export default News;
