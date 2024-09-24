import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterWithWaves from "../components/FooterWithWaves/footerWithWaves";

export const metadata = {
  title: "Bongo Hotel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
      <Header />      
        {children}
        {/* <Footer /> */}
        <FooterWithWaves />
      </body>
      
    </html>
  );
}
 

