import { MarkdownPage } from '@/types';

const pages: MarkdownPage[] = [
  {
    title: 'Overview',
    pathname: 'overview',
  },
  {
    title: 'Getting Started',
    pathname: 'getting-started',
    children: [
      {
        title: 'Installation',
        pathname: 'installation',
      },
      {
        title: 'Usage',
        pathname: 'usage',
      },
    ],
  },
  {
    title: 'Test Folder',
    pathname: 'test-folder',
    children: [
      {
        title: 'Test File',
        pathname: 'test-file',
      },
      {
        title: 'Test Inner Folder',
        pathname: 'test-inner-folder',
        children: [
          {
            title: 'Test Inner File',
            pathname: 'test-inner-file',
          },
        ],
      },
    ],
  },
];

export default pages;
