import React from 'react';
import AOS from 'aos';
import FrontCover from '../components/front-cover';
import {useRouter} from 'next/router';

const Home = () => {
  const router = useRouter();
  const {place, to} = router.query;

  const [showCover, setShowCover] = React.useState(true);
  const [guestName, setGuestName] = React.useState('');
  const [placeName, setPlaceName] = React.useState('');

  React.useEffect(() => {
    AOS.init();
    setGuestName(to !== undefined ? `${to}` : '');
    setPlaceName(place !== undefined ? `${place}` : '');

    return () => {};
  }, [place, to]);

  return (
    <>
      {showCover ? (
        <FrontCover
          femaleName="Rika"
          maleName="Fariz"
          guestName={guestName}
          onClick={() => setShowCover(false)}
        />
      ) : (
        <div
          className="aycawd-fullbg-2"
          data-aos="fade-up"
          data-aos-duration="1000"></div>
      )}
    </>
  );
};

export default Home;
