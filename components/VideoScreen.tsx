import React, { useRef, useState } from "react";
import { View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Text } from "react-native";

const VideoScreen = () => {
  const videoRef = useRef(null); // Referencia para el video
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.setPositionAsync(0);
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef} // Asignamos la referencia
        source={require("@/assets/videos/Anim3.mp4")}
        style={styles.video}
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
          <Text style={styles.buttonText}>
            {isPlaying ? "Reproducir" : "Reiniciar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16, // Reduced padding
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    width: "90%", // Smaller width for the container
    alignSelf: "center", // Center the container horizontally
  },
  video: { width: "100%", height: 300 },
  timerContainer: {
    alignItems: "center",
    marginBottom: 16, // Reduced margin
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    backgroundColor: "#0f67fe",
    paddingHorizontal: 16, // Reduced padding
    paddingVertical: 8, // Reduced padding
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16, // Slightly smaller font size
    fontWeight: "bold",
  },
});

export default VideoScreen;
