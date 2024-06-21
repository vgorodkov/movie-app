const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts;

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts:
      process.env.MY_APP_MODE === 'mocked'
        ? ['mock.ts', ...defaultSourceExts, 'svg']
        : [...defaultSourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
