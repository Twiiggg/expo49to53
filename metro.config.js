// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// não usar o inexistente package.json:exports
// como dito em https://docs.expo.dev/versions/v53.0.0/config/metro/#packagejsonexports no ultimo codeblock
config.resolver.unstable_enablePackageExports = false;

module.exports = withNativeWind(config, { input: './global.css' })
