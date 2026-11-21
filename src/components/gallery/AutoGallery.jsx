import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Expand } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import useGalleryImages from "../../hooks/useGalleryImages.js";
import Lightbox from "./Lightbox.jsx";

/**
 * <AutoGallery folder="engagement/together" />
 * يقرأ الصور من src/assets/gallery/<folder> تلقائيًا.
 */
export default function AutoGallery({ folder }) {
  const images = useGalleryImages(folder);
  const [openIndex, setOpenIndex] = useState(null);

  if (!images.length) {
    return (
      <div className="auto-gallery__empty">
        <p>لا توجد صور بعد</p>
        <code>src/assets/gallery/{folder}</code>
      </div>
    );
  }

  return (
    <motion.div
      className="auto-gallery"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Swiper
        dir="rtl"
        modules={[A11y, EffectCoverflow, Keyboard, Navigation, Pagination]}
        effect="coverflow"
        centeredSlides
        grabCursor
        keyboard={{ enabled: true }}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 160,
          modifier: 1.2,
          slideShadows: false,
        }}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        className="auto-gallery__swiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={image.id} className="auto-gallery__slide">
            <button
              type="button"
              className="auto-gallery__item"
              onClick={() => setOpenIndex(i)}
              aria-label={`عرض الصورة ${i + 1} بملء الشاشة`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span className="auto-gallery__expand">
                <Expand size={18} />
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        images={images}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </motion.div>
  );
}
