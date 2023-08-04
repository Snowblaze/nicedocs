import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const getDocBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(process.cwd(), `docs/${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    content,
    ...data,
  };
};
