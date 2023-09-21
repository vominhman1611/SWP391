import "./globals.css";
import Authprovider from './components/Authprovider/Authprovider';
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Art Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Authprovider>
        <Navbar />
        {children}
        <Footer />
        </Authprovider>
      </body>
    </html>
  );
}