import {
    ActivityIndicator,
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import { useEffect } from "react";
  import { router, useLocalSearchParams } from "expo-router";
  
  import icons from "@/constants/icons";
  import TherapyTimer from "@/components/TherapyTimer";
  import RespiratoryExerciseCard from "@/components/RespiratoryExerciseCard";
  
  import { Card } from "@/components/Cards";
  import Filters from "@/components/Filters";
  
  import { getProperties } from "@/lib/appwrite";
  import { useAppwrite } from "@/lib/useAppwrite";
  import Video from '@/components/VideoScreen'
  
  const Explore = () => {
    const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  
    const {
      data: properties,
      refetch,
      loading,
    } = useAppwrite({
      fn: getProperties,
      params: {
        filter: params.filter!,
        query: params.query!,
      },
      skip: true,
    });
  
    useEffect(() => {
      refetch({
        filter: params.filter!,
        query: params.query!,
      });
    }, [params.filter, params.query]);
  
    const handleCardPress = (id: string) => router.push(`/properties/${id}`);
  
    return (
      <SafeAreaView className="h-full bg-white">
        <FlatList
          data={properties}
          numColumns={2}
          renderItem={({ item }) => (
            <Card item={item} onPress={() => handleCardPress(item.$id)} />
          )}
          keyExtractor={(item) => item.$id}
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
                  Respiratory Therapy
                </Text>
                <Image source={icons.bell} className="w-6 h-6" />
              </View>
  
              {/* Smart Health Metrics Section */}
              <View className="mt-5">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Guia respiración
                </Text>
                <Video />
              </View>
  
              {/* Start Therapy Section */}
              <View className="mt-8"> {/* Add margin top of 32 units (mt-8) */}
                <Text className="text-xl font-rubik-bold text-black-300">
                  Start Therapy
                </Text>
                <View className="mt-4"> {/* Add margin top of 16 units (mt-4) */}
                  <TherapyTimer />
                </View>
              </View>
  
              {/* Respiratory Exercises Section */}
              <View className="mt-8"> {/* Add margin top of 32 units (mt-8) */}
                <RespiratoryExerciseCard />
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    );
  };
  
  export default Explore;