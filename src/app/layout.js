import { Montserrat } from "@next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/shared/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Mammoth Media",
  description:
    "Mammoth Media Ltd is your go-to digital marketing agency for powering business growth. From branding and website design to social media marketing, we offer a comprehensive suite of services to help you achieve your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mammothTheme">
      <head>
        <link rel="icon" href="/fav-icon.png" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
