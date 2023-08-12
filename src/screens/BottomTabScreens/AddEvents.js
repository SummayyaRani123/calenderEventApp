import React,{useState,useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

///////////////components/////////////
import SideHeadingView from '../../components/SideHeadingView/SideHeadingView';
import ImageOverlap from '../../components/OverLapImages/OverLapImages';
import CustomCalendar from '../../components/Calendar/CustomCalandar';
import Loader from '../../components/Loader/Loader';

/////////////height and width//////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//////////////app icons///////////
import Ionicons from 'react-native-vector-icons/Ionicons';

//////////////linear gradient////
import LinearGradient from 'react-native-linear-gradient';

///////////styles///////////
import styles from './styles';

///////////////app colors/////////////
import Colors from '../../utils/Colors';

import * as AddCalendarEvent from 'react-native-add-calendar-event';

const AddEvens = ({navigation}) => {
  const userImages = [
    require('../../assets/images/AddEvents/image1.png'),
    require('../../assets/images/AddEvents/image2.png'),
    require('../../assets/images/AddEvents/image3.png'),
    require('../../assets/images/AddEvents/image4.png'),
    // Add more image sources
  ];

    //Modal States
    const [modalVisible, setModalVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = date => {
    setSelectedDate(date.dateString);
    eventadd(new Date(date.dateString))
  };

  const eventadd=(prop)=>{
    const eventConfig = {
      title: 'Event Title',
      startDate:prop.toISOString(),
      endDate:prop.toISOString()
    };
    
    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then((eventInfo) => {
        //console.warn(JSON.stringify(eventInfo));
        setModalVisible(false)
      })
      .catch((error) => {
        // handle error such as when user rejected permissions
        //console.warn(error);
        setModalVisible(false)
      });
  }
  //////////loader state/////
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate a loading process
    if(count === 0)
    {
      setLoading(true)
      setCount(count+1)
    }

    setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 seconds
  }, []);

  return (
    <View style={styles.container}>
         <Loader isLoading={isLoading} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <StatusBar translucent backgroundColor="transparent" />

        <View style={{height: hp(50), width: wp(100)}}>
          <Image
            source={require('../../assets/images/AddEvents/mainbanner.png')}
            style={{height: hp(50), width: wp(100)}}
            resizeMode="contain"
          />
          <LinearGradient
            colors={[
              'rgba(0, 0, 0, 0.7)',
              'rgba(19, 19, 19, 0.9)',
              'rgba(19, 19, 19, 0)',
            ]} // Adjust the opacity as needed
            style={styles.gradientContainer}>
            <View style={styles.topiconview}>
              <Ionicons name="chevron-back" color={'white'} size={25} />
              <View style={styles.iconview}>
                <Ionicons name="heart-outline" color={'white'} size={25} />
                <Ionicons
                  name="share-social-outline"
                  color={'white'}
                  size={25}
                />
              </View>
            </View>
          </LinearGradient>
          <View style={styles.soldtagview}>
            <Text style={styles.soldtagtext}>SOLD OUT!!!</Text>
          </View>
        </View>
        <View style={styles.pricetagview}>
          <Text style={styles.pricetagtext}>FROM £ 25.00</Text>
        </View>
        <View style={{marginLeft: wp(5), marginTop: hp(2)}}>
          <Text style={styles.headingtext}>Dinner with Fairgrove Partners</Text>
        </View>
        <View style={{alignSelf: 'center', marginTop: hp(1), width: wp(90)}}>
          {/* Your other screen content */}
          <Text style={styles.blacktext}>
            Join us for an unforgettable evening of fine dining and
            networking...
            <Text style={styles.themecolortext}> Read More </Text>
          </Text>
        </View>
        <SideHeadingView label={'Participants'} />

        <View style={{marginTop: hp(2), marginLeft: wp(5)}}>
          <ImageOverlap images={userImages} />
        </View>
        <SideHeadingView label={'Categories'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(5),
            marginTop: hp(2),
          }}>
          <View style={styles.categoriesview}>
            <Text style={styles.categorytext}>🎻 Art & Music</Text>
          </View>
          <View style={styles.categoriesview}>
            <Text style={styles.categorytext}>⚽️ Sport</Text>
          </View>
          <View style={styles.categoriesview}>
            <Text style={styles.categorytext}>🎬 Movie</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(5),
            marginTop: hp(3),
          }}>
          <TouchableOpacity
            style={{
              borderColor: Colors.Appthemecolor,
              borderWidth: wp(0.3),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: wp(3),
              paddingHorizontal: wp(4),
              paddingVertical: hp(1),
            }}
            onPress={()=>setModalVisible(true)}
            >
            <Image
              source={require('../../assets/images/AddEvents/calendar.png')}
              style={{height: hp(3.5), width: wp(6)}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(249, 160, 0, 0.65)',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: wp(3),
              paddingHorizontal: wp(8),
              paddingVertical: hp(1),
            }}>
            <Text style={styles.categorytext}>
              Tickets go live 23:59, 17/05/23
            </Text>
          </View>
        </View>
        <SideHeadingView label={'Date & Time'} />
        <View style={{marginLeft: wp(5), marginTop: hp(2)}}>
          <Text style={styles.headingtext}>Wed, Mar 29 . 19:00 - 20:00</Text>
        </View>
        <SideHeadingView label={'Location'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(5),
            alignItems:'center',
            marginTop:hp(1)
          }}>
          <View style={{}}>
            <Text style={[styles.locationtext, {}]}>
              Museum of Natural History University Of Oxford, Pitt Rivers Museum
              OX1 3PP
            </Text>
            <TouchableOpacity style={{flexDirection:'row',marginTop:hp(1),alignItems:'center'}}
            onPress={()=>navigation.navigate("MapScreen")}
            >
            <Ionicons name="paper-plane-outline" color={Colors.Appthemecolor} size={20} />
            <Text style={styles.directiontext}>Get directions </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../assets/images/AddEvents/map.png')}
            style={{height: hp(15), width: wp(25), marginLeft: wp(2)}}
            resizeMode="contain"
          />
        </View>
        <SideHeadingView label={'Organized by'} />
        <View
          style={{
            backgroundColor: '#212121',
            flexDirection: 'row',
            alignItems: 'center',
            width: wp(95),
            borderRadius: wp(5),
            alignSelf: 'center',
            marginBottom: hp(2),
            paddingTop: hp(1),
            paddingBottom: hp(0.5),
            marginTop: hp(3),
          }}>
          <Image
            source={require('../../assets/images/AddEvents/card.png')}
            style={{height: hp(15), width: wp(30), marginLeft: wp(2)}}
            resizeMode="contain"
          />
          <View style={{marginLeft: wp(3)}}>
            <Text style={[styles.lasttext, {width: wp(60)}]}>
              Oxford Women in Business
            </Text>
            <View
              style={{
                backgroundColor: Colors.Appthemecolor,
                width: wp(30),
                alignItems: 'center',
                justifyContent: 'center',
                height: hp(5),
                borderRadius: wp(2),
                marginTop: hp(2),
              }}>
              <Text style={styles.lastbtntext}>Follow</Text>
            </View>
          </View>
        </View>
        <CustomCalendar
            modalVisible={modalVisible}
            handleDateSelect={handleDateSelect}
            selectedDate={selectedDate}
            onPress={() =>setModalVisible(false)
            }
          />

      </ScrollView>
    </View>
  );
};

export default AddEvens;
