import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-center gap-4 border-t border-gray-200 px-4 py-2">
      <p className="text-sm text-slate-800">
        @{process.env.CURRENT_YEAR} nicebyte
      </p>
      <div className="flex gap-1">
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/nice_byte"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-gray-100"
          >
            <FaTwitter size="20px" />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nicebyte"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-gray-100"
          >
            <FaGithub size="20px" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
