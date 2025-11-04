import { Libre_Baskerville, Montserrat } from "next/font/google";

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_baskerville",
  weight: ["400", "700"], // regular + bold
  style: ["normal", "italic"], 
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});
