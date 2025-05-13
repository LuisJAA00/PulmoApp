import PatientResultCard from "@/components/resCard";
import { Ionicons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { db } from "../firebaseConfig";

const UserDataScreen = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Función para cargar los datos automáticamente
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth().currentUser;
        if (!currentUser) {
          throw new Error('Usuario no autenticado');
        }

        const userEmail = currentUser.email?.toLowerCase().trim();
        if (!userEmail) {
          throw new Error('Email no disponible');
        }

        const q = query(
          collection(db, 'pulmoDB'),
          where('email', '==', userEmail)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setUserData([]);
          setError('No se encontraron datos para este usuario');
          return;
        }

        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setUserData(data);
        
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Función para regresar (puedes cambiar la ruta)
  const handleGoBack = () => {
    router.replace('/(auth)/Explore'); // Cambia esta ruta según necesites
    // Otras opciones:
    // router.back() - Para regresar a la pantalla anterior
    // router.replace('/(tabs)/profile') - Para reemplazar completamente la pantalla
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.backText}>Regresar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.backText}>Regresar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Tus Datos Guardados</Text>
        
      </View>
      
      <FlatList
        data={userData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.dataCard}>
            <Text>Email: {item.email}</Text>
            <PatientResultCard
              date={item.createdAt || "Fecha desconocida"}
              grafica={item.grafica || []}
              graficaIA={item.graficaIA || []}
            />
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay datos disponibles</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  dataCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginRight: 10,
  },
  backText: {
    marginLeft: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});

export default UserDataScreen;