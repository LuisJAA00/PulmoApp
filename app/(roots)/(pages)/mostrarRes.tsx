import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import PatientResultCard from "@/components/resCard";
import icons from "@/constants/icons";
import { getCurrentUser, getResultsForUser } from "@/lib/appwrite";

const pageSize = 1000; // Tamaño de carga por bloque

const ObtenerRes = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);


  useEffect(() => {
    navigation.setOptions({ gestureEnabled: true });
    onRefresh(); // ✅ Usamos la función segura que ya resetea la página y hace fetch limpio
  }, []);

  // Función para obtener los resultados paginados
  const fetchResults = async (reset = false) => {
    try {
      if (reset) setRefreshing(true);
      else setLoading(true);
  
      const user = await getCurrentUser();
      if (!user) return;
  
      const data = await getResultsForUser(user.email);
  
      const offset = reset ? 0 : results.length;
      const nextPage = data.slice(offset, offset + pageSize);
  
      const formattedData = nextPage.map((item) => ({
        id: item.$id,
        date: new Date().toISOString().split("T")[0],
        grafica: item.grafica,
        graficaIA: item.graficaIA.split(",").map(Number),
      }));
  
      // Si no hay más datos, no hagas nada
      if (formattedData.length === 0) {
        setLoading(false);
        setRefreshing(false);
        return;
      }
  
      setResults((prev) => (reset ? formattedData : [...prev, ...formattedData]));
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.error("Error al obtener resultados:", error);
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Para recargar al hacer pull-to-refresh
  const onRefresh = () => {
    setPage(1);
    fetchResults(true);
  };

  // Para cargar más datos cuando se baja el scroll

  

  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
     
        onEndReachedThreshold={0.5}
        numColumns={1}
        renderItem={({ item }) => (
          <PatientResultCard
            date={item.date || "Fecha desconocida"}
            grafica={item.grafica || []}
            graficaIA={item.graficaIA || []}
          />
        )}
        contentContainerClassName="pb-32"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>
              <Text className="text-xl text-center font-rubik-bold text-black-300">Resultados</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ObtenerRes;
