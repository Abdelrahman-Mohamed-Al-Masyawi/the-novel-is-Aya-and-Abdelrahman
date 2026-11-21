import SectionHeading from "../common/SectionHeading.jsx";
import AutoGallery from "./AutoGallery.jsx";

/**
 * فصل صور كامل. يقبل معرضًا واحدًا أو أكثر:
 * galleries = [{ title, folder }, ...]
 * رقم الفصل يظهر على أول معرض فقط.
 */
export default function GallerySection({ id, number, galleries }) {
  return (
    <section id={id} className="section gallery-section">
      {galleries.map((gallery, i) => (
        <div className="gallery-section__block" key={gallery.folder}>
          <SectionHeading number={i === 0 ? number : undefined} title={gallery.title} />
          <AutoGallery folder={gallery.folder} />
        </div>
      ))}
    </section>
  );
}
