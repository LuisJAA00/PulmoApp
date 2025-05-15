import Graficador from "@/components/Graficador64";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImageView from "react-native-image-viewing";

const screenWidth = Dimensions.get("window").width;

const PatientResultCard = ({ date, grafica, graficaIA }) => {
  const [currentImage, setCurrentImage] = useState(null);
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
  const imageSourceIA = { uri: `data:image/png;base64,${graficaIA}` };

  const openImageViewer = (img) => {
    setCurrentImage(img);
    setIsVisible(true);
  };

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
              <View style={styles.modalBody}>
                <TouchableOpacity
                  style={styles.imageContainer}
                  onPress={() => openImageViewer(imageSource)}
                >
                  <Graficador base64String={grafica} />
                  <Text style={styles.imageLabel}>Gráfico Original</Text>
                </TouchableOpacity>

                <View style={styles.separator} />

                <TouchableOpacity
                  style={styles.imageContainer}
                  onPress={() => openImageViewer(imageSourceIA)}
                >
                  <Graficador base64String={graficaIA} />
                  <Text style={styles.imageLabel}>Gráfico IA</Text>
                </TouchableOpacity>
              </View>
            )}
            
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
          
          {visible && (
            <ImageView
              key={viewerKey}
              images={[currentImage]}
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
    maxWidth: 400,
    alignItems: "center",
  },
  modalBody: {
    width: "100%",
    marginVertical: 15,
  },
  modalDate: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  imageContainer: {
    width: "100%",
    marginBottom: 15,
    alignItems: "center",
  },
  imageLabel: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
    width: "100%",
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#007bff",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    width: screenWidth * 0.85,
    height: screenWidth * 0.3,
  },
});

export default PatientResultCard;