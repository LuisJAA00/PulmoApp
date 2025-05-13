import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Graficador64 = ({ base64String }) => {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      
      <Image
        source={{ uri: `data:image/png;base64,${base64String}` }}
        style={{
          width: '100%',
          height: 150,
          resizeMode: 'contain',
          borderRadius: 10,
        }}
        />
      
      
      
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  imageStyle: {
    flex: 1,
    resizeMode: "contain"
  },
  button: {
    width: 100,
    height: 100
 }
});

export default Graficador64;
