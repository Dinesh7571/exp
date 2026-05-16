const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

const config = getDefaultConfig(__dirname);

// --- ADD THIS LINE ---
config.resolver.sourceExts.push('css');
// ---------------------

const mergedConfig = mergeConfig(config, {});

module.exports = withUniwindConfig(mergedConfig, {
  cssEntryFile: './global.css', // Matches your root location
  dtsFile: './src/uniwind-types.d.ts',
  // extraThemes: ['ocean-light', 'ocean-dark'],
});