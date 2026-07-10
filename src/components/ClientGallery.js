'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function ClientGallery({ images }) {
  const [showAll, setShowAll] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-[var(--darker)] border border-[rgba(10,10,10,0.06)] rounded-sm">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">Gallery Content Being Curated</span>
      </div>
    );
  }

  // Calculate 70% of images for the slider
  const sliderCount = Math.max(1, Math.ceil(images.length * 0.7));
  const sliderImages = images.slice(0, sliderCount);
  const remainingImages = images.slice(sliderCount);

  return (
    <div className="w-full">
      <div className="relative mb-[40px] cursor-none custom-swiper-wrapper border border-[rgba(10,10,10,0.06)] rounded-sm overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full h-[500px] md:h-[700px] bg-black"
        >
          {sliderImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat grayscale-[20%] hover:grayscale-0 transition-all duration-[600ms]"
                style={{ backgroundImage: `url('${src}')` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {remainingImages.length > 0 && (
        <div className="mt-[60px] text-center">
          {!showAll ? (
            <button 
              onClick={() => setShowAll(true)}
              className="inline-block border border-[rgba(10,10,10,0.15)] text-[var(--light)] uppercase tracking-[0.2em] text-[10px] px-8 py-4 transition-all duration-300 hover:bg-[var(--light)] hover:text-[var(--dark)] hover:border-transparent cursor-none font-medium"
            >
              View Full Gallery <span className="text-[11px] ml-1">({remainingImages.length} More)</span>
            </button>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] stagger-children visible text-left">
              {remainingImages.map((src, index) => (
                <div key={index} className="w-full aspect-square overflow-hidden group rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] relative">
                  <img 
                    src={src} 
                    alt={`Gallery Image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-103 grayscale-[25%] group-hover:grayscale-0"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* No shading overlay */}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <style jsx global>{`
        .custom-swiper-wrapper .swiper-button-next,
        .custom-swiper-wrapper .swiper-button-prev {
          color: #ffffff;
          transition: color 0.3s ease;
        }
        .custom-swiper-wrapper .swiper-button-next:hover,
        .custom-swiper-wrapper .swiper-button-prev:hover {
          color: var(--gold);
        }
        .custom-swiper-wrapper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
        }
        .custom-swiper-wrapper .swiper-pagination-bullet-active {
          background: var(--gold);
        }
      `}</style>
    </div>
  );
}
