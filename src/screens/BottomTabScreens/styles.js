import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';

//////colors/////////////////
import Colors from '../../utils/Colors';

/////height and width////////////////
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

///////////////////app fonts/////////////
import { fontFamily } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  gradientContainer: {
    flex: 1,
    position: 'absolute',
    // /paddingTop: StatusBar.currentHeight,
  },
  topiconview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(100),
    paddingHorizontal: wp(5),
    marginTop: hp(5),
  },
  soldtagview: {
    position: 'absolute',
    bottom: hp(3),
    width: wp(26),
    height: hp(3.5),
    backgroundColor: '#F5004E',
    borderRadius: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    left:wp(5)
  },
  soldtagtext: {
    fontSize: hp(1.7),
    fontFamily: fontFamily.PassengerSans_SemiBold,
    color: 'white',
  },
  pricetagview: {
    width: wp(30),
    height: hp(3.5),
    backgroundColor: '#BC61F5',
    borderRadius: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:wp(5),
    marginTop:hp(2.5)
  },
  pricetagtext: {
    fontSize: hp(1.8),
    fontFamily: fontFamily.PassengerSans_SemiBold,
    color: 'white',
  },
  iconview: {
    flexDirection: 'row',
    width: wp(20),
    justifyContent: 'space-between',
  },
  headingtext: {
    fontSize: hp(2.7),
    fontFamily: fontFamily.PassengerSans_Bold,
    color: 'white',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  blacktext:
  {
    color:'#888888',
    fontSize:hp(1.8),
    fontFamily:fontFamily.PassengerSans_Medium
  },
  themecolortext:
  {
    color:Colors.Appthemecolor,
    fontSize:hp(1.8),
    fontFamily:fontFamily.PassengerSans_Bold
  },

  categoriesview:{
    borderWidth:wp(0.3),
    borderColor:'grey',
    borderRadius:wp(8),
    paddingHorizontal:wp(4),
    paddingVertical:hp(1.5 ),
    alignItems:'center',
    justifyContent:'center',
    
  },
  categorytext:
  {
    color:"white",
    fontSize:hp(2),
    fontFamily:fontFamily.PassengerSans_Medium,
  },
  locationtext:
  {
    color:"white",
    fontSize:hp(2),
    fontFamily:fontFamily.PassengerSans_Regular,
    width: wp(60),
    lineHeight:20
  },
  directiontext:
  {
    color:Colors.Appthemecolor,
    fontSize:hp(1.9),
    fontFamily:fontFamily.PassengerSans_SemiBold,
    marginLeft:wp(2)
  },
  lasttext:
  {
    color:"white",
    fontSize:hp(2.5),
    fontFamily:fontFamily.PassengerSans_SemiBold,
  },
  lastbtntext:
  {
    color:"white",
    fontSize:hp(2.5),
    fontFamily:fontFamily.PassengerSans_Medium,
  },
});
  export default styles;
  