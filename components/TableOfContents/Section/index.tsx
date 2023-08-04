import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import Link from 'next/link';
import type { MarkdownPage } from '@/types';

type Props = {
  page: MarkdownPage;
  parentPath: string;
};

const Section: React.FC<Props> = ({ page, parentPath }) => {
  if (page.children) {
    return (
      <Accordion type="multiple">
        <AccordionItem value={page.pathname}>
          <AccordionTrigger className="flex cursor-pointer rounded px-2 py-1 text-base font-normal transition-all duration-200 hover:bg-gray-100 hover:no-underline">
            {page.title}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="pl-3">
              {page.children?.map((child) => (
                <Section
                  parentPath={[parentPath, page.pathname].join('/')}
                  page={child}
                  key={child.pathname}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  return (
    <li className="rounded transition-all duration-200 hover:bg-gray-100">
      <Link
        className="flex px-2 py-1 text-base"
        href={`/${[parentPath, page.pathname].join('/')}`}
      >
        {page.title}
      </Link>
    </li>
  );
};

export default Section;
