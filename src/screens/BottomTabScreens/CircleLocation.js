import React from 'react';
import { View, Text, Button, StyleSheet,Image,ScrollView, FlatList } from 'react-native';
import ImageOverlap from '../../components/OverLapImages/OverLapImages';

const CircleLocation = () => {
  const userImages = [
    require('../../assets/images/AddEvents/mainbanner.png'),
    require('../../assets/images/AddEvents/mainbanner.png'),
    require('../../assets/images/AddEvents/mainbanner.png'),
    // Add more image sources
  ];

  const renderAvatar = ({ item }) => <CircularAvatar source={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
      <View style={styles.container1}>
      <ImageOverlap images={userImages} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  avatarsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default CircleLocation;
