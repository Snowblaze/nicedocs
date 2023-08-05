import { getDocBySlug } from '@/lib/api';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  slug: string[];
};

const components: Components = {
  h1: ({ node, ...props }: ReactMarkdownProps) => (
    <h1 {...props} className="my-2.5 text-4xl font-semibold" />
  ),
  h2: ({ node, ...props }) => (
    <h2 {...props} className="mb-1 mt-10 text-2xl font-semibold" />
  ),
  h3: ({ node, ...props }) => (
    <h3 {...props} className="mb-1 mt-10 text-xl font-semibold" />
  ),
  p: ({ node, ...props }) => (
    <p {...props} className="mb-7 text-base font-normal text-[#1c2025]" />
  ),
  ul: ({ node, ...props }) => <ul {...props} className="my-6 list-disc pl-8" />,
  ol: ({ node, ...props }) => (
    <ol {...props} className="my-6 list-decimal pl-8" />
  ),
  li: ({ node, ...props }) => (
    <li {...props} className="mb-1 text-base font-normal text-[#1c2025]" />
  ),
  // table: ,
  // thead: ,
  // tbody: ,
  // tr: ,
  // th: ,
  // td: ,
  // code: ,
  a: ({ node, ...props }) => (
    <Link
      {...props}
      href={props.href || '/'}
      className="mb-7 text-base font-normal text-[#1c2025]"
    />
  ),
  img: ({ node, ...props }) => (
    <Image
      src={props.src!}
      alt={props.alt || ''}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  ),
  pre: ({ node, ...props }) => (
    <pre {...props} className="rounded-lg border bg-gray-100 p-4" />
  ),
  blockquote: ({ node, ...props }) => {
    return (
      <blockquote
        {...props}
        className="my-7 text-base font-normal text-red-600"
      />
    );
  },
};

const Content: React.FC<Props> = ({ slug }) => {
  const doc = getDocBySlug(slug.join('/'));

  return (
    <div className="px-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {doc.content}
      </ReactMarkdown>
    </div>
  );
};

export default Content;
