export default {
  expo: {
    name: "HD-Notes",
    slug: "HD-Notes",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    scheme: "hdnotes",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.hdwebsoft.notes",
      googleServicefile: process.env.GOOGLE_SERVICE_INFOSPLIST,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.hdwebsoft.notes",
      googleServicefile: process.env.GOOGLE_SERVICES_JSON,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: ["expo-router", "@react-native-google-signin/google-signin"],
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "359aac53-335f-47b4-b06c-527c4f199de9",
      },
    },
  },
};
