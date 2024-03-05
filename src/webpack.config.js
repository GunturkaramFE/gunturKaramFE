// webpack.config.js
module.exports = {
    // ... other configurations
    resolve: {
      fallback: {
        util: require.resolve('util/'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
      },
    },
  };
  