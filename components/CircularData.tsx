import React from "react";
import { View, Text } from "react-native";
import { Svg, Circle } from "react-native-svg";

const CircularData = () => {
  // Example min and max values
  const minValue = 80; // Gray circle represents this value
  const maxValue = 120; // Blue circle represents this value
  const totalValue = 200; // 100% is 200

  // Calculate progress for the max and min values
  const maxProgress = maxValue / totalValue; // Progress for the blue circle
  const minProgress = minValue / totalValue; // Progress for the gray circle

  // Function to calculate arc path
  const getArcPath = (progress: number, radius: number) => {
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress);
    return { circumference, strokeDashoffset };
  };

  const blueRadius = 80; // Radius for the blue circle
  const grayRadius = 60; // Smaller radius for the gray circle

  // Blue circle represents the maxValue and is partial
  const { circumference: blueCircumference, strokeDashoffset: blueStrokeDashoffset } = getArcPath(maxProgress, blueRadius);

  // Gray circle represents the minValue and is partial
  const { circumference: grayCircumference, strokeDashoffset: grayStrokeDashoffset } = getArcPath(minProgress, grayRadius);

  return (
    <View className="items-center justify-center mt-10">
      {/* Square Container */}
      <View className="w-64 h-64 items-center justify-center">
        <Svg width="100%" height="100%" viewBox="0 0 200 200">
          {/* Background Circle (Max Value) - Blue */}
          <Circle
            cx="100"
            cy="100"
            r={blueRadius}
            fill="none"
            stroke="#007BFF" // Blue for max value
            strokeWidth={12}
            strokeDasharray={blueCircumference}
            strokeDashoffset={blueStrokeDashoffset}
            strokeLinecap="round"
          />
          {/* Progress Circle (Min Value) - Gray */}
          <Circle
            cx="100"
            cy="100"
            r={grayRadius}
            fill="none"
            stroke="#E0E0E0" // Gray for min value
            strokeWidth={12}
            strokeDasharray={grayCircumference}
            strokeDashoffset={grayStrokeDashoffset}
            strokeLinecap="round"
          />
        </Svg>
        {/* Centered Text */}
        <View className="absolute items-center">
          <Text className="text-4xl font-bold text-black">{maxValue}</Text>
          <Text className="text-gray-500">Max Value</Text>
        </View>
      </View>
      {/* Legend */}
      <View className="flex-row mt-4">
        <View className="flex-row items-center mr-4">
          <View className="w-4 h-4 bg-gray-400 rounded-full mr-2" />
          <Text className="text-gray-600">Min: {minValue}</Text>
        </View>
        <View className="flex-row items-center">
          <View className="w-4 h-4 bg-blue-500 rounded-full mr-2" />
          <Text className="text-blue-600">Max: {maxValue}</Text>
        </View>
      </View>
    </View>
  );
};

export default CircularData;