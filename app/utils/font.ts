import { Lato, Nunito_Sans, Poppins } from 'next/font/google';

import { Playfair_Display, Montserrat } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair_display',
  weight: ['400', '500', '600', '700', '800'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
});


// export const nunitoSans = Nunito_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-nunito_sans',
//   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
// });

// export const poppins = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-poppins',
//   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
// });

// export const lato = Lato({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-lato',
//   weight: ['100', '300', '400', '700', '900'],
// });