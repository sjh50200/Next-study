import './globals.css';
import Navbar from '@/components/organisms/Navbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
