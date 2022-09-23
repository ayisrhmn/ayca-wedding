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
import FloatingQR from '../components/floating-qr';
import FloatingToggleMusic from '../components/floating-toggle-music';
import FloatingScrollUp from '../components/floating-scrollup';
import GallerySection from '../components/gallery-section';
import ConfirmSection from '../components/confirm-section';
import GreetingsSection from '../components/greetings-section';
import FooterSection from '../components/footer-section';
import ModalProtocol from '../components/modal-protocol';
import {useAudio} from '../utils/helper';
import {
  dtCouple,
  eventTlg,
  eventKdr,
  storyData,
  imgGallery,
} from '../config/data';

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

  const [showQR, setShowQR] = React.useState(false);
  const onShowQR = () => {
    setShowQR(true);
  };
  const onHideQR = () => {
    setShowQR(false);
  };

  const [showProtocol, setShowProtocol] = React.useState(false);

  const [visibleScrollTop, setVisibleScrollTop] = React.useState(false);
  const scrollDownRef = React.useRef() as any;
  const scrollUpRef = React.useRef() as any;

  React.useEffect(() => {
    AOS.init();
    isMobileScreen();
    window.addEventListener('scroll', scrollTopVisible);

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

  const goScrollDown = () => {
    if (scrollDownRef.current) {
      scrollDownRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  const scrollTopVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisibleScrollTop(true);
    } else if (scrolled <= 300) {
      setVisibleScrollTop(false);
    }
  };

  const goScrollUp = () => {
    if (scrollUpRef.current) {
      scrollUpRef.current.scrollIntoView({behavior: 'smooth'});
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
            setShowProtocol(true);
          }}
        />
      ) : (
        <>
          <WelcomeSection
            place={placeName}
            scrollUpRef={scrollUpRef}
            onScrollDownClick={goScrollDown}
          />
          <PrayerSection scrollDownRef={scrollDownRef} />
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
          <FloatingQR
            show={showQR}
            onClick={onShowQR}
            onHide={onHideQR}
            place={placeName}
          />
          <FloatingToggleMusic toggle={toggle} playing={playing} />
          {visibleScrollTop && <FloatingScrollUp onClick={goScrollUp} />}
          <ModalProtocol show={showProtocol} place={placeName} />
        </>
      )}
    </>
  );
};

export default Home;
