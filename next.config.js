const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/blog/:year/:month/:day/:title*",
        destination: "/:title*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
