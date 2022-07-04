import React from 'react';
import AOS from 'aos';
import FrontCover from '../components/front-cover';
import {useRouter} from 'next/router';

const Home = () => {
  const router = useRouter();
  const [showCover, setShowCover] = React.useState(true);

  const {to} = router.query;

  React.useEffect(() => {
    AOS.init();

    return () => {};
  }, []);

  return (
    <>
      {showCover ? (
        <FrontCover
          femaleName="Rika"
          maleName="Fariz"
          guestName={`${to}`}
          onClick={() => setShowCover(false)}
        />
      ) : (
        <div className="aycawd-fullbg-2" data-aos="flip-left"></div>
      )}
    </>
  );
};

export default Home;
