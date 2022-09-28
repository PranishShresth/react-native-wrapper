import { StyleSheet, SafeAreaView, Vibration, Share } from "react-native";
import { WebView } from "react-native-webview";

const WEB_URL = "https://project-alpha-82b4f.web.app";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: WEB_URL,
        }}
        onMessage={async (event) => {
          //add implementation for bridge between web and native
        }}
        scalesPageToFit={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
