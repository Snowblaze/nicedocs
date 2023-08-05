import docs from '@/docs/pages';
import type { LibraryName } from '@/types';
import Section from './Section';

type Props = {
  slug: string[];
};

const TableOfContents: React.FC<Props> = ({ slug }) => {
  const pages = docs[slug[0] as LibraryName];

  return (
    <ul>
      {pages.map((page) => (
        <Section
          slug={slug}
          parentPath={slug[0]}
          page={page}
          key={page.pathname}
        />
      ))}
    </ul>
  );
};

export default TableOfContents;
