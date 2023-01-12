import ice from '../asset/ice.png';
import telenor from '../asset/telenor.png';
import telia from '../asset/telia.png';

export const data = [
  {
    logo: ice,
    title: 'Ice Mobile 10GB',
    subTitle: 'Up to 100Mbit/s',
    price: 299,
    color: '#FFFBEC',
  },
  {
    logo: telia,
    title: 'Telia Mobile 15GB',
    subTitle: 'Unlimited calls, SMS and MMS',
    price: 953,
    color: '#F9ECFF',
  },
  {
    logo: telenor,
    title: 'Telenor Next Fast',
    subTitle: 'Up to 100Mbit/s',
    price: 1028,
    color: '#F0F0F6',
  },
];

const size = {
  mobileS: '320px',
  mobileM: '375px',
  // ! 760px
  mobileL: '47.5em',
  // ! 1000px
  tablet: '62.5em',
  //! 1220px
  laptop: '76.25em',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
