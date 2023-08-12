import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//////app colors/////////
import Colors from '../../utils/Colors';

//////////////////app styles///////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

///////////app fonts////////////
import {fontFamily} from '../../constants/fonts';

const Tab = createBottomTabNavigator();

//screeens
import Location from '../../screens/BottomTabScreens/Location';
import Groups from '../../screens/BottomTabScreens/Groups';
import AddEvens from '../../screens/BottomTabScreens/AddEvents';
import CircleLocation from '../../screens/BottomTabScreens/CircleLocation';
import Profile from '../../screens/BottomTabScreens/Profile';

/////////////redux////////////
import {useDispatch, useSelector} from 'react-redux';

///////app images//////////////
import {appImages} from '../../constants/images';

function BottomTab() {
  ///////////redux variable/////////////
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, backgroundColor: '#27262C' }}>
    <Tab.Navigator
      labeled={false}
      activeColor={'grey'}

      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'grey',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          height: hp(8),
          backgroundColor: '#040404',
          borderWidth:1,
          borderColor: '#040404'
        },
      }}>
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,

          tabBarIcon: ({color, focused}) => (
            <View style={style.maintabview}>
              <View style={[style.tab]}>
                <Image
                  source={appImages.Home}
                  style={{width: wp(4), height: hp(3)}}
                />
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View style={style.maintabview}>
              <View style={[style.tab]}>
                <Image
                  source={appImages.Group}
                  style={{width: wp(7), height: hp(2.5)}}
                />
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="AddEvens"
        component={AddEvens}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View style={style.maintabview}>
              <View style={[style.tab]}>
                <Image
                  source={appImages.Add}
                  style={{width: wp(6), height: hp(3)}}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CircleLocation"
        component={CircleLocation}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View style={style.maintabview}>
              <View style={[style.tab]}>
                <Image
                  source={appImages.Location}
                  style={{width: wp(5), height: hp(2.5)}}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View style={style.maintabview}>
              <View style={[style.tab]}>
                <Image
                  source={appImages.Profile}
                  style={{width: wp(5.5), height: hp(2.5)}}
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
    </View>
  );
}
const style = StyleSheet.create({
  maintabview: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  tab: {
    width: wp(15),
    height: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedtabview: {
    width: wp(14),
    height: hp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabtextcolor: {
    color: 'grey',
    fontSize: hp(1.4),
    fontFamily: fontFamily.Poppins_Extra_Light,
    width: wp(19),
    textAlign: 'center',
  },
});
export default BottomTab;
