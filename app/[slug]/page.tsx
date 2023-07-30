import type { Metadata } from 'next';
import { libraryNames } from '@/app/[slug]/paths';

type Props = {
  params: { slug: string };
};

export default function Library({ params }: Props) {
  return (
    <div className="flex flex-1 items-stretch justify-stretch">
      <div className="w-64 border-r border-gray-200">contents</div>
      <div className="flex-1 border-r border-gray-200">text</div>
      <div className="flex-1">code</div>
    </div>
  );
}

export async function generateStaticParams() {
  return libraryNames.map((libraryName) => ({
    slug: libraryName,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.slug,
    description: `Documentation for ${params.slug}`,
  };
}
