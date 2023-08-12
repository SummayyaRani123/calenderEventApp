import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

//////colors/////////////////
import Colors from '../../../utils/Colors';

/////height and width////////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////////////app fonts/////////////
import {fontFamily} from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 10,
    width: wp(100),
    height: hp(100),
    zIndex: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: hp(104),
  },
});
export default styles;
