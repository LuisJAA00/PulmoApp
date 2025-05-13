import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    console.log("Selected Category:", category);
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

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <ImageBackground
          key={index}
          source={{
            uri:
              item.imageUrl ||
              "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{
            height: 150, // h-56
            width: 133,
            borderRadius: 12,
            overflow: "hidden",
            marginHorizontal: 8,
            padding: 12,
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderWidth: selectedCategory === item.category ? 4 : 0,
            borderColor: "white",
          }}
          imageStyle={{ borderRadius: 12 }}
        >
          <TouchableOpacity
            onPress={() => handleCategoryPress(item.category)}
            style={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 14,
                color: "white",
                textShadowColor: "rgba(0, 0, 0, 0.6)",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2,
              }}
            >
              {`Top: ${item.title}`}
            </Text>

            <Text
              style={{
                fontFamily: "Rubik-ExtraBold",
                fontSize: 16,
                color: "white",
                textShadowColor: "rgba(0, 0, 0, 0.8)",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2,
              }}
            >
              {`Bottom: ${item.category}`}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      ))}
    </ScrollView>
  );
};

export default Filters;
