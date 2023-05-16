import Navbar from '@/components/organisms/Navbar';

const ComponentPagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <section>{children}</section>
    </main>
  );
};

export default ComponentPagesLayout;
