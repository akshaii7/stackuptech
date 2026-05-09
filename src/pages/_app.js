import "@/styles/globals.css";
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins' 
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${poppins.variable} font-sans min-h-screen bg-black text-white selection:bg-gold selection:text-black`}>
      <Component {...pageProps} />
    </div>
  );
}
  