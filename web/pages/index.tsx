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
import moment from 'moment';
import OurStorySection from '../components/our-story-section';

const Home = () => {
  const router = useRouter();
  const {place, session, to} = router.query;

  const [showCover, setShowCover] = React.useState(true);
  const [guestName, setGuestName] = React.useState('');
  const [placeName, setPlaceName] = React.useState('');
  const [sessionNum, setSessionNum] = React.useState('');
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    AOS.init();
    setGuestName(to !== undefined ? `${to}` : '');
    setPlaceName(place !== undefined ? `${place}` : '');
    setSessionNum(session !== undefined ? `${session}` : '');
    isMobileScreen();

    return () => {};
  }, [place, session, to]);

  const dtCouple = [
    {
      _id: 'couple_0',
      name: 'Wahyu Rikawati',
      img_tlg: '/img/rika-tlg.jpg',
      img_kdr: '/img/rika-kdr.jpg',
      father: 'Richwan',
      mother: 'Wiwik Wikaningsih',
      ig_url: 'https://instagram.com/rikawhy_',
    },
    {
      _id: 'couple_1',
      name: 'Muhammad Fariz Rahman',
      img_tlg: '/img/fariz-tlg.jpg',
      img_kdr: '/img/fariz-kdr.jpg',
      father: 'Rudy Hertiono',
      mother: 'R.A. Soeprijati',
      ig_url: 'https://instagram.com/ayisrhmn',
    },
  ];

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

  const eventTlg = {
    akad: moment('2022-11-19 08:00'),
    startResepsi: moment('2022-11-19 12:30'),
    endResepsi: moment('2022-11-19 15:00'),
    location: 'https://maps.app.goo.gl/GuNWQCL9GyHxyzKb6',
  };
  const eventKdr = {
    startSesi1: moment('2022-11-26 10:00'),
    endSesi1: moment('2022-11-26 12:00'),
    startSesi2: moment('2022-11-26 13:00'),
    endSesi2: moment('2022-11-26 15:00'),
    location: 'https://maps.app.goo.gl/1jsuAhE9zRceu7CdA',
  };

  return (
    <>
      {showCover ? (
        <FrontCover
          femaleName="Rika"
          maleName="Fariz"
          guestName={guestName}
          place={placeName}
          onClick={() => setShowCover(false)}
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
          />
          <OurStorySection isMobile={isMobile} />
        </>
      )}
    </>
  );
};

export default Home;
