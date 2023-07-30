import type { PropsWithChildren } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = PropsWithChildren & { params: { slug: string } };

const LibraryLayout: React.FC<Props> = ({ children, params }) => {
  return (
    <main className="flex min-h-full flex-col">
      <Header currentLibraryName={params.slug} />
      {children}
      <Footer />
    </main>
  );
};

export default LibraryLayout;
