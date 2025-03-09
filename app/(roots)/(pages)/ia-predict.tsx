import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import { router, useNavigation } from "expo-router";

import icons from "@/constants/icons";
import TherapyTimer from "@/components/TherapyTimer";
import RespiratoryExerciseCard from "@/components/RespiratoryExerciseCard";

import { Card } from "@/components/Cards";
import Filters from "@/components/Filters";

const IAPredict = () => {
  const navigation = useNavigation();

  // Enable swipe-to-go-back gesture
  useEffect(() => {
    navigation.setOptions({
      gestureEnabled: true, // Enable swipe gesture
    });
  }, [navigation]);

  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={[]} // Empty data array since we're not using properties
        numColumns={2}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => {}} /> // Placeholder for Card component
        )}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="px-5">
            {/* Header Section */}
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <Text className="text-xl text-center font-rubik-bold text-black-300">
                IA Predict
              </Text>
            </View>

         

         
          
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default IAPredict;