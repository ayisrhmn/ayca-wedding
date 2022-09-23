import moment from 'moment';

export const dtCouple = [
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

export const eventTlg = {
  akad: moment('2022-11-19 09:00'),
  startResepsi: moment('2022-11-19 12:30'),
  endResepsi: moment('2022-11-19 15:00'),
  location: 'https://maps.app.goo.gl/GuNWQCL9GyHxyzKb6',
};

export const eventKdr = {
  startSesi1: moment('2022-11-26 10:00'),
  endSesi1: moment('2022-11-26 12:00'),
  startSesi2: moment('2022-11-26 12:00'),
  endSesi2: moment('2022-11-26 14:00'),
  location: 'https://maps.app.goo.gl/1jsuAhE9zRceu7CdA',
};

export const storyData = {
  firstMeet: {
    title: 'First Meet ~ 2016',
    desc: 'Lebih tepatnya pada bulan Januari 2017 adalah awal pertemuan kami pada saat event di calon sekolah kami Prisma Profesional. Sama sama belum saling kenal dan kita berkenalan pada saat itu tanpa ada maksud untuk saling mencintai. Beberapa saat setelah itu kami sudah mulai masuk di Prisma Profesional dan hanya berteman biasa bahkan kita bukan salah satu teman dekat.',
  },
  expressFeelings: {
    title: 'Express Feelings ~ 2017',
    desc: 'Seiring berjalannya waktu, pada akhir Juli kita sama sama berkenalan lebih dekat meskipun perkenalan dekat ini tanpa sengaja sampai akhirnya kita sama sama mencintai dan tanggal 08 September 2017 kami memutuskan untuk mempunyai kesepakatan untuk bersama dan menjalin cinta wkwkw',
  },
  engagement: {
    title: 'Engagement ~ 2021',
    desc: '5 Desember 2021 adalah tanggal dimana kita ingin menjalin hubungan yang lebih serius setelah 4 tahun bersama. Kami saling berbicara untuk kejenjang yang lebih serius didepan kedua orang tua kami dan keluarga besar kami.',
  },
  goesToMarried: {
    title: 'Goes to Married ~ 2022',
    desc: 'Setelah perjalanan cinta kami yang lebih dari 5 tahun akhirnya momen spesial yang kami tunggu akan dilaksanakan pada tanggal 19 November 2022, dimana kami akan membangun keluarga kecil kami. Semoga Allah SWT memberikan keberkahan untuk pernikahan kami dan kami selalu bahagia dan menua bersama.',
  },
};

export const imgGallery = [...Array(19)].map((_, i: number) => {
  return {
    original: `/img/gallery/img-${i + 1}.jpg`,
    thumbnail: `/img/gallery/img-thumb-${i + 1}.jpg`,
  };
});
