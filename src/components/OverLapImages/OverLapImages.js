import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ImageOverlap = ({ images }) => {
  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={image}
          style={[styles.image, { marginLeft: index === 0 ? 0 : -20 }]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  image: {
    width: windowWidth / 7,
    height: windowWidth / 7,
    borderRadius: (windowWidth / 3) / 2, // Make it circular
    borderWidth: 2, // Optional: Add a border for better visibility
    borderColor: '#000', // Optional: Border color
  },
});

export default ImageOverlap;
