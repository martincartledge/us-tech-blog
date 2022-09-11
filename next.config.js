const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/blog/:year/:month/:day/:title*",
        destination: "/posts/:title*",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/posts/about-this-blog",
        permanent: true,
      },
      {
        source: "/archives",
        destination: "/posts",
        permanent: true,
      },
      {
        source: "/blog/authors",
        destination: "/authors",
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
