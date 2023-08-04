import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { RiArrowDownSFill } from 'react-icons/ri';
import { libraryNames } from '@/docs/pages';

type Props = {
  currentLibraryName: string;
};

const Header: React.FC<Props> = ({ currentLibraryName }) => {
  return (
    <header className="bg-white px-4 py-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]">
      <nav className="flex justify-between">
        <div className="flex items-center gap-6">
          <Link className="ml-2" href="/">
            <Image
              className="relative drop-shadow-[0_0_0.3rem_#e65722]"
              src="/logo2x.png"
              alt="nicebyte logo"
              width={47}
              height={48}
              priority
            />
          </Link>
          <div className="group">
            <div className="flex cursor-pointer items-center rounded-full px-2 py-1 hover:text-main">
              {currentLibraryName}
              <RiArrowDownSFill />
            </div>
            <ul className="invisible absolute z-[200] block rounded bg-white p-2 shadow-[0_5px_40px_rgba(0,0,0,0.2)] group-hover:visible">
              {libraryNames.map((name) => (
                <li
                  key={name}
                  className={`rounded hover:bg-gray-100 hover:text-main ${
                    currentLibraryName === name ? 'bg-gray-100 text-main' : ''
                  }`}
                >
                  <Link className="inline-block px-2 py-1" href={`/${name}`}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <Link href={`https://github.com/nicebyte/${currentLibraryName}`}>
            <FaGithub
              size="32px"
              className="transition-opacity duration-200 hover:opacity-50"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
