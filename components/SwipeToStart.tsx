import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For the swipe icon

// Define the type for the props
interface SwipeToStartProps {
  onSwipe: () => void; // onSwipe is a function that takes no arguments and returns void
}

const SwipeToStart: React.FC<SwipeToStartProps> = ({ onSwipe }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSwipe}>
      {/* Text Label */}
      <Text style={styles.label}>Respiratory Exercises</Text>

      {/* Swipe Icon */}
      <Ionicons name="arrow-forward" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 32, // Full width minus some padding
    height: 60, // Height of the rectangle
    backgroundColor: "#333333", // Dark grey background
    borderRadius: 12, // Rounded corners
    flexDirection: "row", // Horizontal layout
    justifyContent: "space-between", // Space between text and icon
    alignItems: "center", // Center items vertically
    paddingHorizontal: 16, // Inner padding
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 6, // Shadow blur radius
    marginTop: 26, // Space above the card
    elevation: 5, // Android shadow
  },
  label: {
    fontSize: 16, // Font size
    fontWeight: "bold", // Bold text
    color: "#FFFFFF", // White text color
  },
});

export default SwipeToStart;