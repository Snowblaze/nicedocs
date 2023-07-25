import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 lg:grid lg:grid-rows-3">
      <div className="relative mb-16 flex place-items-center justify-center lg:mb-0">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#e65722]"
          src="/logo2x.png"
          alt="nicebyte logo"
          width={180}
          height={184}
          priority
        />
      </div>

      <div className="grid text-center lg:grid-cols-3 lg:text-left">
        <Link
          href="/nicemath"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            nicemath{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A compact single-header C++ library that provides data types and
            routines for basic linear algebra operations often encountered in
            computer graphics and game development
          </p>
        </Link>
        <Link
          href="/niceshade"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            niceshade{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A wrapper for the Microsoft DirectXShaderCompiler and SPIRV-Cross
          </p>
        </Link>
        <Link
          href="/nicegraf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            nicegraf{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            An abstraction layer for low-level platform-specific graphics APIs
          </p>
        </Link>
      </div>
    </main>
  );
}
