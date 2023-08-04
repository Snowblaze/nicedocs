export type MarkdownPage = {
  title: string;
  pathname: string;
  children?: MarkdownPage[];
};

export type LibraryName = 'nicemath' | 'niceshade' | 'nicegraf';
