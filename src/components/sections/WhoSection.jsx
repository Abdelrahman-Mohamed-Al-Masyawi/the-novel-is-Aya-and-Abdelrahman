import SectionHeading from '../common/SectionHeading.jsx';
import useGalleryImages from '../../hooks/useGalleryImages.js';
import PersonPanel from './PersonPanel.jsx';
import imgAya from '../../../public/Aya.webp';
import imgAbdo from '../../../public/a.webp';
/**
 * شاشة منقسمة: شخصيتان مستقلتان قبل أن تلتقيا.
 * صورة كل شخص هي أول صورة في معرضه الشخصي (gallery/aya و gallery/abdelrahman).
 */

const images = {
  aya: {
    src: imgAya,
    alt: 'آية',
  },

  abdelrahman: {
    src: imgAbdo,
    alt: 'عبدالرحمن',
  },
};

export default function WhoSection({ number, aya, abdelrahman }) {
  const ayaImages = useGalleryImages('aya');
  const abdelrahmanImages = useGalleryImages('abdelrahman');

  return (
    <section id='who' className='section who'>
      <SectionHeading number={number} title={aya.tagline} />
      <div className='who__split'>
        <PersonPanel person={aya} image={images.aya} direction='right' />
        <div className='who__divider' aria-hidden='true' />
        <PersonPanel person={abdelrahman} image={images.abdelrahman} direction='left' />
      </div>
    </section>
  );
}
