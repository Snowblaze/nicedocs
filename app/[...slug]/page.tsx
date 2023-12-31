import type { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Content from '@/components/Content';
import docs from '@/docs/pages';
import { LibraryName, MarkdownPage } from '@/types';

type Props = {
  params: { slug: string[] };
};

export default function Library({ params: { slug } }: Props) {
  return (
    <div className="flex flex-1 items-stretch justify-stretch">
      <div className="w-64 border-r border-gray-200 p-2">
        <TableOfContents slug={slug} />
      </div>
      <div className="flex-1 justify-center">
        <Content slug={slug} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const keys = Object.keys(docs) as LibraryName[];

  const processPageRecursive = (page: MarkdownPage): string[][] => {
    return page.children
      ? page.children
          .map(processPageRecursive)
          .flat()
          .map((innerPath) => [page.pathname, ...innerPath])
      : [[page.pathname]];
  };

  const allSlugs = keys
    .map((libraryName) => {
      return docs[libraryName]
        .map(processPageRecursive)
        .flat()
        .map((path) => [libraryName, ...path]);
    })
    .flat();

  return allSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.slug[0],
    description: `Documentation for ${params.slug}`,
  };
}
