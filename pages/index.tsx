import React from 'react';
import AOS from 'aos';
import FrontCover from '../components/front-cover';

const Home = () => {
  const [showCover, setShowCover] = React.useState(true);

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
          guestName="Uzumaki Saruto"
          onClick={() => setShowCover(false)}
        />
      ) : (
        <div className="aycawd-fullbg-2" data-aos="flip-left"></div>
      )}
    </>
  );
};

export default Home;
