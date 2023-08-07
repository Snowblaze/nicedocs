import {
  ComponentPropsWithoutRef,
  ReactMarkdownProps,
} from 'react-markdown/lib/ast-to-react';
import { FC, isValidElement, ReactElement } from 'react';
import { GoAlert, GoInfo, GoReport } from 'react-icons/go';

type Props = ComponentPropsWithoutRef<'blockquote'> & ReactMarkdownProps;

const alertRegex = /\[!(.*?)]/gm;

enum AlertType {
  NOTE = 'NOTE',
  IMPORTANT = 'IMPORTANT',
  WARNING = 'WARNING',
}

const borderClasses: { [key in AlertType]: string } = {
  [AlertType.NOTE]: 'border-blue-500',
  [AlertType.IMPORTANT]: 'border-purple-500',
  [AlertType.WARNING]: 'border-yellow-700',
};

const heading: { [key in AlertType]: string } = {
  [AlertType.NOTE]: 'Note',
  [AlertType.IMPORTANT]: 'Important',
  [AlertType.WARNING]: 'Warning',
};

const headingClasses: { [key in AlertType]: string } = {
  [AlertType.NOTE]: 'text-blue-500',
  [AlertType.IMPORTANT]: 'text-purple-500',
  [AlertType.WARNING]: 'text-yellow-700',
};

const icon: { [key in AlertType]: ReactElement } = {
  [AlertType.NOTE]: <GoInfo size={18} strokeWidth={0.5} />,
  [AlertType.IMPORTANT]: <GoReport size={18} strokeWidth={0.5} />,
  [AlertType.WARNING]: <GoAlert size={18} strokeWidth={0.5} />,
};

const BlockQuote: FC<Props> = ({ node, children, ...props }) => {
  if (!isValidElement(children[1])) return null;

  if (!children[1].props.children[0]) return null;

  const allMatches = alertRegex.exec(children[1].props.children[0]);

  if (allMatches) {
    const content = children[1].props.children[0]
      .replace(alertRegex, '')
      .trim();

    const alertType = allMatches[1] as AlertType;

    return (
      <div className={`my-4 border-l-4 pl-4 ${borderClasses[alertType]}`}>
        <p className="text-base">
          <span
            className={`mb-1 inline-flex items-center gap-2 font-medium ${headingClasses[alertType]}`}
          >
            {icon[alertType]}
            {heading[alertType]}
          </span>
          <br />
          {content}
        </p>
      </div>
    );
  }

  return (
    <blockquote
      {...props}
      className="my-4 border-l-4 border-gray-300 pl-4 text-base font-normal text-gray-500"
    >
      <p>{children[1].props.children[0]}</p>
    </blockquote>
  );
};

export default BlockQuote;
