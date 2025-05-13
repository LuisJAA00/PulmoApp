import RespiratoryExerciseCard from "@/components/RespiratoryExerciseCard";
import ResultsCard from "@/components/TherapyResultsCard";
import icons from "@/constants/icons";
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Explore = () => {
  // Datos para la FlatList (puedes personalizar según necesites)
  const sections = [
    {
      id: '1',
      component: <RespiratoryExerciseCard />,
      title: 'Ejercicios Respiratorios'
    },
    {
      id: '2',
      component: <ResultsCard />,
      title: 'Resultados de Terapia'
    },
    // Puedes añadir más secciones aquí
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Respiratory Therapy</Text>
        <Image source={icons.bell} style={styles.bellIcon} />
      </View>

      {/* Lista de secciones */}
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            {item.component}
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 20,
    marginBottom: 20, // Espacio entre secciones
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#444',
  },
  listContent: {
    paddingBottom: 30, // Espacio al final de la lista
  },
});

export default Explore;