import React from 'react';
import AOS from 'aos';
import FrontCover from '../components/front-cover';
import {useRouter} from 'next/router';
import WelcomeSection from '../components/welcome-section';
import PrayerSection from '../components/prayer-section';
import CoupleSection from '../components/couple-section';

const Home = () => {
  const router = useRouter();
  const {place, to} = router.query;

  const [showCover, setShowCover] = React.useState(true);
  const [guestName, setGuestName] = React.useState('');
  const [placeName, setPlaceName] = React.useState('');
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    AOS.init();
    setGuestName(to !== undefined ? `${to}` : '');
    setPlaceName(place !== undefined ? `${place}` : '');
    isMobileScreen();
    // redirectAlwaysWithPlace(placeName);

    return () => {};
  }, [place, to]);

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

  // const redirectAlwaysWithPlace = (place: any) => {
  //   if (place.length > 0) {
  //     if (place !== 'tlg' || place !== 'kdr') {
  //       router.push('/404');
  //     }
  //   }
  // };

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
        </>
      )}
    </>
  );
};

export default Home;
