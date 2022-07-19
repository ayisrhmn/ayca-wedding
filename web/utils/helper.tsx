import React from 'react';

export const useAudio = (urlAudio: any) => {
  const audio = React.useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio(urlAudio) : undefined,
  );
  const [playing, setPlaying] = React.useState(false);

  const toggle = () => setPlaying(!playing);

  React.useEffect(() => {
    playing ? audio.current?.play() : audio.current?.pause();

    return () => {};
  }, [playing]);

  React.useEffect(() => {
    audio.current?.addEventListener('ended', () => {
      setPlaying(false);
      setTimeout(() => {
        setPlaying(true);
      }, 2000);
    });

    return () => {
      audio.current?.removeEventListener('ended', () => {
        setPlaying(false);
      });
    };
  }, [playing]);

  return [playing, setPlaying, toggle];
};

export const getRandomColor = () => {
  let letters = 'BCDEF'.split('');
  let color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
};
