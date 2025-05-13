import { Card } from "@/components/Cards";
import Video from "@/components/VideoScreen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RespEjercicios = () => {
  const router = useRouter();

  // Función para regresar (puedes cambiar la ruta según necesites)
  const handleGoBack = () => {
    router.replace('/(auth)/Explore'); // Cambia esta ruta según necesites
    // Otras opciones:
    // router.back() - Para regresar a la pantalla anterior
    // router.replace('/(tabs)/profile') - Para reemplazar completamente
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header con botón de retroceso y título - Versión mejorada */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={handleGoBack}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.backText}>Regresar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Ejercicios Respiratorios</Text>
        <View style={{ width: 70 }} /> {/* Espacio para balancear el diseño */}
      </View>

      <FlatList
        data={[]}
        numColumns={2}
        renderItem={({ item }) => <Card item={item} onPress={() => {}} />}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Video />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  listContent: {
    paddingBottom: 128,
  },
  columnWrapper: {
    gap: 20,
    paddingHorizontal: 20,
  }
});

export default RespEjercicios;