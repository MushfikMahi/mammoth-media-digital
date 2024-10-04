import { Montserrat } from "@next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/shared/Footer";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Mammoth Media",
  description:
    "Mammoth Media Ltd is your go-to digital marketing agency for powering business growth. From branding and website design to social media marketing, we offer a comprehensive suite of services to help you achieve your goals.",
  image: "/Logo-of-Mammoth-Media.jpg",
  url: "https://mammothmedia.digital/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mammothTheme">
      <head>
        <link rel="icon" href="/fav-icon.png" type="image/png" />
      </head>
      <Head>
        {/* General Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph Meta Tags (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:url" content={metadata.url} />

        {/* LinkedIn Meta Tags */}
        <meta property="og:site_name" content="Mammoth Media" />
        <meta property="article:author" content="Mammoth Media Ltd" />

        {/* Schema.org for Google */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mammoth Media",
            "url": "${metadata.url}",
            "logo": "${metadata.image}",
            "sameAs": [
              "https://www.facebook.com/mammothmedia.digital",
              "https://www.linkedin.com/company/MammothMedia",
              "https://twitter.com/MammothMedia"
            ]
          }
          `}
        </script>
      </Head>
      <body className={`${montserrat.className} antialiased`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
