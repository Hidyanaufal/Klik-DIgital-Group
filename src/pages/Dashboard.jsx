import home1 from "../assets/home1.png";

function Dashboard() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={home1}
        alt="home1"
        className="w-full h-full object-cover animate-zoom"
      />

      {/* Overlay + Text Container */}
      <div className="absolute bottom-0 left-0 w-full h-[90%] 
                      bg-gradient-to-t from-black/100 to-transparent 
                      flex items-end animate-overlay">

        <div className="text-white px-27 pb-16 max-w-4xl">

          <h1 className="text-5xl font-bold mb-5 animate-slideUp">
            Ruang Kolaborasi Tanpa Batas untuk Masa Depan yang Lebih Baik.
          </h1>

          <h2 className="text-xl opacity-90 animate-slideUp-delay">
            Klik Digital Group mewadahi semangat kebersamaan dalam inovasi ramah lingkungan. 
            Mari berkolaborasi untuk masa depan.
          </h2>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;
