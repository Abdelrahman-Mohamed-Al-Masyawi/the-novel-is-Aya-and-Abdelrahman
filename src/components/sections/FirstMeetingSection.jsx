import FadeUp from "../common/FadeUp.jsx";
import ImageReveal from "../common/ImageReveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import TimelineNode from "../timeline/TimelineNode.jsx";
import useGalleryImages from "../../hooks/useGalleryImages.js";

/** أول تعارف: سرد على خط زمني، مع صور اختيارية من مجلد first-meeting. */
export default function FirstMeetingSection({ number, data }) {
  const images = useGalleryImages(data.galleryFolder).slice(0, 2);

  return (
    <section id="first-meeting" className="section first-meeting">
      <SectionHeading number={number} title={data.heading} />

      <div className="story-row">
        <TimelineNode number={number} />

        <div className="story-row__content">
          <FadeUp as="h3" className="story-row__title">
            {data.title}
          </FadeUp>
          <FadeUp delay={0.15} className="story-row__meta">
            <span>{data.date}</span>
            {data.place && <span>{data.place}</span>}
          </FadeUp>
          <FadeUp as="p" delay={0.3} className="story-row__text">
            {data.description}
          </FadeUp>

          {images.length > 0 && (
            <div className="story-row__images">
              {images.map((image) => (
                <ImageReveal key={image.id} src={image.src} alt={image.alt} parallax={24} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
