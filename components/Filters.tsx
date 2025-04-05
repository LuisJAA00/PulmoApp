import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    console.log("Selected Category:", category); // Debugging line
    switch (category) {
      case "AI Predict":
        router.push("/ia-predict");
        return;
      case "History":
        router.push("/clinical-history");
        return;
      case "Recent":
        router.push("/recent-study");
        return;
      case "Resultados":
        router.push("/mostrarRes");
        return;
      default:
        if (selectedCategory === category) {
          setSelectedCategory("");
          router.setParams({ filter: "" });
          return;
        }
        setSelectedCategory(category);
        router.setParams({ filter: category });
    }
  };

  // Updated array of vibrant colors for each box
  const vibrantColors = [
    "#0f67fe", // Electric Blue
    "#fa4d5e", // Electric Pink/Red
    "#3dd6db", // Aqua/Turquoise
    "#ff9f1c", // Bright Orange
    "#8338ec", // Electric Purple
    "#ff006e", // Hot Pink
    "#00bbf9", // Sky Blue
    "#fb5607", // Bright Red/Orange
    "#9b5de5", // Light Purple
    "#00f5d4", // Bright Cyan
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(item.category)}
          key={index}
          className={`h-56 rounded-lg flex justify-between items-start p-3 mx-2 ${
            selectedCategory === item.category ? "border-4 border-white" : ""
          }`}
          style={{
            backgroundColor: vibrantColors[index % vibrantColors.length],
            width: 133, // 128px (w-32) + 5px = 133px
          }}
        >
          {/* Top Text with Rubik-Regular */}
          <Text
            style={{
              fontFamily: "Rubik-Regular", // Apply Rubik-Regular font
              fontSize: 14, // Adjust font size as needed
              color: "white",
            }}
          >
            {`Top: ${item.title}`}
          </Text>

          {/* Bottom Text with Rubik-ExtraBold */}
          <Text
            style={{
              fontFamily: "Rubik-ExtraBold", // Apply Rubik-ExtraBold font
              fontSize: 16, // Make the bottom text bigger
              color: "white",
            }}
          >
            {`Bottom: ${item.category}`}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;