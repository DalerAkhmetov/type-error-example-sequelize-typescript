module.exports = {
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "babel-plugin-transform-typescript-metadata"
  ],
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
  ],
  ignore: ['node_modules']
};
