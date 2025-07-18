import {Montserrat} from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],       
  weight: ['400', '700'],   
  display: 'swap',           
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <div className='global-container'>
          {children}
        </div>
      </body>
    </html>
  );
}
