import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const AverageCard = () => {
  return (
    <View style={styles.container}>
      {/* Icon */}
     
      {/* Title and Number */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Average</Text>
        <Text style={styles.number}>85</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 32, // Full width minus some padding
    backgroundColor: "#FFFFFF", // White background
    borderRadius: 12, // Rounded corners
    padding: 16, // Inner padding
    paddingTop: 4, // Add padding to the top
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Center items vertically
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 6, // Shadow blur radius
    elevation: 5, // Android shadow
    marginHorizontal: 16, // Horizontal margin
    alignSelf: "center", // Center the container horizontally
    marginTop: 26, // Space above the card
    marginBottom: 15, // Space below the card
  },
  icon: {
    width: 40, // Icon size
    height: 40, // Icon size
    marginRight: 16, // Space between icon and text
  },
  textContainer: {
    flex: 1, // Take up remaining space
  },
  title: {
    fontSize: 18, // Title font size
    fontWeight: "bold", // Bold title
    color: "#333333", // Dark gray color
  },
  number: {
    fontSize: 24, // Number font size
    fontWeight: "bold", // Bold number
    color: "#007BFF", // Blue color
    marginTop: 4, // Space between title and number
  },
});

export default AverageCard;