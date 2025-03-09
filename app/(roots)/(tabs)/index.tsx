import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


import TopBarCard from "@/components/TopBarCard";
import Filters from "@/components/Filters";
import TherapyTracker from "@/components/TherapyTracker";

import RespiratoryScoreCard from "@/components/RespiratoryScoreCard";
import { Card, FeaturedCard } from "@/components/Cards";
import { useAppwrite } from "@/lib/useAppwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { getLatestProperties, getProperties } from "@/lib/appwrite";

const Home = () => {
  const { user } = useGlobalContext();

  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: latestProperties, loading: latestPropertiesLoading } =
    useAppwrite({
      fn: getLatestProperties,
    });

  const {
    data: properties,
    refetch,
    loading,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.filter, params.query]);

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  return (
    <View className="h-full bg-white">
      {user && <TopBarCard user={user} />}

      <SafeAreaView className="flex-1">
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
            <View className="w-full">
              <View className="px-5">
             
                <View className="my-5">
                  <View className="flex flex-row items-center justify-between">
                    <Text className="text-xl font-rubik-bold text-black-300">
                      Health Score
                    </Text>
                  </View>

                

                 {/* {latestPropertiesLoading ? (
                    <ActivityIndicator size="large" className="text-primary-300" />
                  ) : !latestProperties || latestProperties.length === 0 ? (
                    <NoResults />
                  ) : (
                    <FlatList
                      data={latestProperties}
                      renderItem={({ item }) => (
                        <FeaturedCard
                          item={item}
                          onPress={() => handleCardPress(item.$id)}
                        />
                      )}
                      keyExtractor={(item) => item.$id}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerClassName="flex gap-5 mt-5"
                    />
                 )}*/}
                </View>

                <RespiratoryScoreCard/>

                <View className="mt-5">
                  <View className="flex flex-row items-center justify-between">
                    <Text className="text-xl font-rubik-bold text-black-300">
                    Smart Health Metrics
                    </Text>
                  </View>
                  <Filters />

                  <View className="my-5">
                  <View className="flex flex-row items-center justify-between">
                    <Text className="text-xl font-rubik-bold text-black-300">
                      Therapy Managment
                    </Text>
                  </View>
                </View>

                <TherapyTracker />

                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;