export default function ImagePair() {
  return (
    <section className="bg-[#f4f1ea] pb-24 lg:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
                alt="Restaurant interior with table setting"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80"
                alt="Chef presenting a plated dish"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
