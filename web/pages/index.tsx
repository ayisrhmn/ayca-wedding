import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FrontCover from '../components/front-cover';
import {useRouter} from 'next/router';
import WelcomeSection from '../components/welcome-section';
import PrayerSection from '../components/prayer-section';
import CoupleSection from '../components/couple-section';
import BrownSection from '../components/brown-section';
import EventSection from '../components/event-section';
import CountdownSection from '../components/countdown-section';
import OurStorySection from '../components/our-story-section';
import FloatingToggleMusic from '../components/floating-toggle-music';
import GallerySection from '../components/gallery-section';
import {useAudio} from '../utils/helper';
import {
  dtCouple,
  eventTlg,
  eventKdr,
  storyData,
  imgGallery,
} from '../config/data';
import ConfirmSection from '../components/confirm-section';
import GreetingsSection from '../components/greetings-section';
import FooterSection from '../components/footer-section';

const Home = () => {
  const router = useRouter();
  const {place, session, to} = router.query;

  const urlAudio = '/music/main-music.mp3';
  const [playing, setPlaying, toggle] = useAudio(urlAudio) as any;

  const [showCover, setShowCover] = React.useState(true);

  const [guestName, setGuestName] = React.useState('');
  const [placeName, setPlaceName] = React.useState('');
  const [sessionNum, setSessionNum] = React.useState('');

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    AOS.init();
    isMobileScreen();

    return () => {};
  }, []);

  React.useEffect(() => {
    setPlaceName(place !== undefined ? `${place}` : '');
    setSessionNum(session !== undefined ? `${session}` : '');
    setGuestName(to !== undefined ? `${to}` : '');

    return () => {};
  }, [place, session, to]);

  const isMobileScreen = () => {
    let mqPhone = window.matchMedia(
      '(min-width: 280px) and (max-width: 480px)',
    );
    let mqBigPhone = window.matchMedia(
      '(min-width: 481px) and (max-width: 767px)',
    );

    if (mqPhone.matches || mqBigPhone.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <>
      {showCover ? (
        <FrontCover
          femaleName="Rika"
          maleName="Fariz"
          guestName={guestName}
          place={placeName}
          onClick={() => {
            setShowCover(false);
            setPlaying(true);
          }}
        />
      ) : (
        <>
          <WelcomeSection place={placeName} />
          <PrayerSection />
          <CoupleSection
            data={dtCouple}
            place={placeName}
            isMobile={isMobile}
          />
          <BrownSection />
          <EventSection
            eventTlg={eventTlg}
            eventKdr={eventKdr}
            isMobile={isMobile}
            place={placeName}
            session={sessionNum}
          />
          <CountdownSection
            eventTlg={eventTlg}
            eventKdr={eventKdr}
            place={placeName}
            isMobile={isMobile}
          />
          <OurStorySection storyData={storyData} isMobile={isMobile} />
          <GallerySection imgGallery={imgGallery} />
          {guestName !== '' && (
            <ConfirmSection guestName={guestName} place={placeName} />
          )}
          <GreetingsSection />
          <FooterSection place={placeName} />
          <FloatingToggleMusic toggle={toggle} playing={playing} />
        </>
      )}
    </>
  );
};

export default Home;
