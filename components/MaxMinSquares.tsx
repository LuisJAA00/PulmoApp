import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const MaxMinSquares = () => {
  return (
    <View style={styles.container}>
      {/* Maximum Square */}
      <View style={[styles.square, styles.maxSquare]}>
        <Text style={styles.title}>Maximum</Text>
        <Text style={styles.value}>120</Text>
      </View>

      {/* Minimum Square */}
      <View style={[styles.square, styles.minSquare]}>
        <Text style={styles.title}>Minimum</Text>
        <Text style={styles.value}>80</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal layout
    justifyContent: "center", // Center squares horizontally
    marginHorizontal: 16, // Horizontal margin
    marginTop: 16, // Space above the component
    marginBottom: 16, // Space below the component
  },
  square: {
    width: Dimensions.get("window").width / 2 - 40, // Smaller width (adjusted for centering)
    aspectRatio: 1, // Ensure the square is perfectly square
    backgroundColor: "#FFFFFF", // White background
    borderRadius: 12, // Rounded corners
    padding: 16, // Inner padding
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 6, // Shadow blur radius
    elevation: 5, // Android shadow
  },
  maxSquare: {
    marginRight: 8, // Space between squares
  },
  minSquare: {
    marginLeft: 8, // Space between squares
  },
  title: {
    fontSize: 18, // Title font size
    fontWeight: "bold", // Bold title
    color: "#333333", // Dark gray color
  },
  value: {
    fontSize: 24, // Value font size
    fontWeight: "bold", // Bold value
    color: "#007BFF", // Blue color
    marginTop: 8, // Space between title and value
  },
});

export default MaxMinSquares;