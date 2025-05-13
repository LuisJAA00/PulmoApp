import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import { useEffect } from "react";
  import { router, useNavigation } from "expo-router";
  
  import ClinicalHistoryCard from "@/components/HistoryCard";
  import TherapyResultsCard from "@/components/TherapyResultCard";
  import { Card } from "@/components/Cards";
  
  const ClinicalHistory = () => {
    const navigation = useNavigation();
  
    // Enable swipe-to-go-back gesture
    useEffect(() => {
      navigation.setOptions({
        gestureEnabled: true, // Enable swipe gesture
      });
    }, [navigation]);
  
    return (
      <View className="h-full bg-white">
        {/* Clinical History Card */}
        <ClinicalHistoryCard value={120} description="Last Value of Therapy" />
  
        <SafeAreaView className="h-full bg-white">
          {/* ScrollView for Scrollable Content */}
          <ScrollView
            contentContainerStyle={{ paddingBottom: 32 }} // Add padding at the bottom
            showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
          >
            <View className="px-5">
              {/* Header Section */}
              <View className="mt-5">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Clinical History
                </Text>
              </View>
  
              {/* Therapy Results Cards */}
              <TherapyResultsCard />
              <TherapyResultsCard />
              <TherapyResultsCard />
             
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  };
  
  export default ClinicalHistory;