import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import ImageView from "react-native-image-viewing";
import Graficador from "@/components/Graficador64";

const screenWidth = Dimensions.get("window").width;

const PatientResultCard = ({ date, grafica }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [viewerKey, setViewerKey] = useState(0);

  const [chartLoaded, setChartLoaded] = useState(false);
  const [visible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (modalVisible) setChartLoaded(true);
  }, [modalVisible]);

  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const imageSource = { uri: `data:image/png;base64,${grafica}` };

  return (
    <>
      {/* Tarjeta compacta */}
      <TouchableOpacity
        style={[styles.card, { flexDirection: "column", alignItems: "center" }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.date}>{formattedDate}</Text>
        <Graficador base64String={grafica} />
      </TouchableOpacity>

      {/* Modal con info detallada */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalDate}>{formattedDate}</Text>
            {chartLoaded && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => setIsVisible(true)}
              >
                <Graficador base64String={grafica} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={{ color: "white" }}>Cerrar</Text>
            </TouchableOpacity>
            


          </View>
          {visible && (
  <ImageView
    key={viewerKey}
    images={[imageSource]}
    imageIndex={0}
    visible={true}
    onRequestClose={() => {
      setIsVisible(false);
      setViewerKey(prev => prev + 1);
    }}
  />
)}

        </View>
      </Modal>

      {/* Pantalla completa con zoom y swipe */}
      
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f2f2f2",
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 10,
    elevation: 3,
  },
  date: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "90%",
    alignItems: "center",
  },
  modalDate: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  button: {
    width: screenWidth * 0.85,
    height: screenWidth * 0.5,
  },
});

export default PatientResultCard;
