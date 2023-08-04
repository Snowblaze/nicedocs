import nicegrafDocs from '@/docs/nicegraf/pages';
import niceshadeDocs from '@/docs/niceshade/pages';
import nicemathDocs from '@/docs/nicemath/pages';
import type { LibraryName, MarkdownPage } from '@/types';

const docs: { [key in LibraryName]: MarkdownPage[] } = {
  nicemath: nicemathDocs,
  niceshade: niceshadeDocs,
  nicegraf: nicegrafDocs,
};

export const libraryNames = Object.keys(docs);

export default docs;
