import * as React from 'react';
import { FaGithub } from 'react-icons/fa';

type Props = {
  sourceLocation: string;
};

const EditPage: React.FC<Props> = (props) => {
  const { sourceLocation } = props;

  return (
    <a
      href={`${process.env.SOURCE_CODE_REPO}/edit/${process.env.SOURCE_GITHUB_BRANCH}/docs/${sourceLocation}.md`}
      target="_blank"
      rel="noopener nofollow"
      className="my-4 flex items-center gap-2 rounded p-2 text-xs font-medium text-main transition-colors hover:bg-gray-100"
    >
      <FaGithub />
      Edit Page
    </a>
  );
};

export default EditPage;
