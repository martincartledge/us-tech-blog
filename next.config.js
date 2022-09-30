const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/blog/:year/:month/:day/:title*",
        destination: "/posts/:title*",
        permanent: true,
      },
      {
        source: "/blog/authors/:author*(.html)",
        destination: "/authors/:author*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
