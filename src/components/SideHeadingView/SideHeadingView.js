import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

//////////////////app height and width//////////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

////app colors/////////
import Colors from '../../utils/Colors';

//////////////app fonts///////////
import { fontFamily } from '../../constants/fonts';

const SideHeadingView = ({navigation, label}) => {
  return (
    <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(3),
    }}>
    <View style={styles.headingsideview}></View>
    <Text style={styles.sideheadingtext}>{label}</Text>
  </View>
  );
};
const styles = StyleSheet.create({

    headingsideview:
    {
      width:wp(2),
      height:hp(3.5),
      backgroundColor:Colors.Appthemecolor
    },
    sideheadingtext:
    {
      color:"white",
      fontSize:hp(2.5),
      fontFamily:fontFamily.PassengerSans_Medium,
      marginLeft:wp(3)
    },
  
  });
export default SideHeadingView;
