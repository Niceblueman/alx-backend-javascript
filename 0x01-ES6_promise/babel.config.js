module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins: [
      // Your custom Babel plugins go here
      // Example:
      '@babel/plugin-transform-runtime',
    ],
  };
  