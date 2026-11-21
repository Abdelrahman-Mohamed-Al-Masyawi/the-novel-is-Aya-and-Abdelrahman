import { storyData } from "../../data/storyData.js";
import { chapters, navLinks } from "../../data/chapters.js";
import useScrollProgress from "../../hooks/useScrollProgress.js";
import useActiveChapter from "../../hooks/useActiveChapter.js";

import Navbar from "../../components/ui/Navbar.jsx";
import ChapterIndicator from "../../components/ui/ChapterIndicator.jsx";
import GoldProgressLine from "../../components/ui/GoldProgressLine.jsx";
import GallerySection from "../../components/gallery/GallerySection.jsx";

import IntroSection from "../../components/sections/IntroSection.jsx";
import WhoSection from "../../components/sections/WhoSection.jsx";
import FirstMeetingSection from "../../components/sections/FirstMeetingSection.jsx";
import SharaiVisionSection from "../../components/sections/SharaiVisionSection.jsx";
import FirstCallSection from "../../components/sections/FirstCallSection.jsx";
import EngagementSection from "../../components/sections/EngagementSection.jsx";
import ClosingSection from "../../components/sections/ClosingSection.jsx";

import "./Home.css";
import "../../styles/sections.css";
import "../../styles/gallery.css";

const chapterNumber = (id) => chapters.find((c) => c.id === id)?.number ?? "";

export default function Home() {
  const progress = useScrollProgress();
  const activeIndex = useActiveChapter(chapters);
  const { aya, abdelrahman, galleries } = storyData;

  return (
    <>
      <Navbar
        brand={`${aya.name} × ${abdelrahman.name}`}
        links={navLinks}
      />
      <GoldProgressLine progress={progress} chapters={chapters} activeIndex={activeIndex} />
      <ChapterIndicator chapter={chapters[activeIndex]} />

      <main>
        <IntroSection data={storyData.intro} aya={aya} abdelrahman={abdelrahman} />

        <WhoSection number={chapterNumber("who")} aya={aya} abdelrahman={abdelrahman} />

        <FirstMeetingSection
          number={chapterNumber("first-meeting")}
          data={storyData.firstMeeting}
        />

        <SharaiVisionSection
          number={chapterNumber("sharai-vision")}
          data={storyData.sharaiVision}
        />

        <FirstCallSection number={chapterNumber("first-call")} data={storyData.firstCall} />

        <EngagementSection number={chapterNumber("engagement")} data={storyData.engagement} />

        <GallerySection
          id="moments"
          number={chapterNumber("moments")}
          galleries={[galleries.together]}
        />

        <GallerySection
          id="family"
          number={chapterNumber("family")}
          galleries={[galleries.family]}
        />

        <GallerySection
          id="aya-gallery"
          number={chapterNumber("aya-gallery")}
          galleries={[galleries.aya, galleries.ayaPersonal]}
        />

        <GallerySection
          id="abdelrahman-gallery"
          number={chapterNumber("abdelrahman-gallery")}
          galleries={[galleries.abdelrahman, galleries.abdelrahmanPersonal]}
        />

        <ClosingSection lines={storyData.closing.lines} />
      </main>
    </>
  );
}
