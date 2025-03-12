import React from "react";
import { View, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require("@/assets/videos/Resp_ver2.mp4")}
        style={styles.video}
        resizeMode={ResizeMode.COVER}
        shouldPlay // Reproduce automáticamente
        isLooping // Se repite en bucle
        isMuted={true} // Sin sonido
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  video: { width: "100%", height: 300 },
});

export default VideoScreen;
