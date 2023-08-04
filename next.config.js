/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CURRENT_YEAR: new Date().getFullYear(),
  },
  redirects: async () => {
    return [
      {
        source: '/nicemath',
        destination: '/nicemath/overview',
        permanent: true,
      },
      {
        source: '/niceshade',
        destination: '/niceshade/overview',
        permanent: true,
      },
      {
        source: '/nicegraf',
        destination: '/nicegraf/overview',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
