import FadeUp from "../common/FadeUp.jsx";
import ImageReveal from "../common/ImageReveal.jsx";

/** نصف الشاشة لشخص واحد: صورة + اسم + نبذة + تفاصيل. */
export default function PersonPanel({ person, image, direction }) {
  return (
    <article className="person-panel">
      <ImageReveal
        src={image?.src}
        alt={person.name}
        direction={direction}
        className="person-panel__photo"
      />
      <div className="person-panel__body">
        <FadeUp as="span" className="person-panel__en">
          {person.nameEn}
        </FadeUp>
        <FadeUp as="h3" delay={0.1} className="person-panel__name">
          {person.name}
        </FadeUp>
        <FadeUp as="p" delay={0.2} className="person-panel__bio">
          {person.bio}
        </FadeUp>
        <FadeUp as="p" delay={0.3} className="person-panel__personality">
          {person.personality}
        </FadeUp>

        <FadeUp delay={0.4} className="person-panel__chips">
          {person.traits.map((trait) => (
            <span key={trait}>{trait}</span>
          ))}
        </FadeUp>

        <FadeUp delay={0.5} className="person-panel__loves">
          <small>تحب</small>
          <p>{person.loves.join(" · ")}</p>
        </FadeUp>

        <FadeUp as="p" delay={0.6} className="person-panel__special">
          {person.special}
        </FadeUp>
      </div>
    </article>
  );
}
