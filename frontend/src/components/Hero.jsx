export default function Hero() {
  return (
    <section className="relative h-100 overflow-hidden md:h-105">
      <img
        src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1600&q=80&auto=format&fit=crop"
        alt="Koleksi atasan pria dan wanita"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay navy agar teks terbaca & menyatu dengan warna brand */}
      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/50" />

      <div className="page-container relative flex h-full flex-col justify-end pb-9">
        <h1 className="font-serif text-4xl text-white md:text-[2.6rem]">OUR PRODUCT</h1>
        <p className="mt-1 text-lg text-white md:text-xl">find your product here</p>
      </div>
    </section>
  )
}
