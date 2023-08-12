import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
} from 'react-native';

//////////////height and width/////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////colors//////////////
import Colors from '../../utils/Colors';

/////////////calendar////////////
import {Calendar} from 'react-native-calendars';

/////////app fonts////////////////
import {fontFamily} from '../../constants/fonts';

const CustomCalendar = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.CloseModal}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView]}>
          <View style={{marginTop: hp(2),alignItems:"center"}}>
            <Text
              style={{
                color: 'white',
                fontSize: hp(2.5),
                fontFamily: fontFamily.PassengerSans_Bold,
              }}>
              PICK YOU EVENT DATE
            </Text>
          </View>

          <Calendar
            style={{
              backgroundColor: Colors.calendarBG_Color,
            }}
            onDayPress={props.handleDateSelect}
            markedDates={{
              [props.selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: Colors.Appthemecolor,
              },
            }}
            theme={{
              selectedDayBackgroundColor: Colors.Appthemecolor,
              todayTextColor: Colors.Appthemecolor,
              arrowColor: Colors.Appthemecolor,
              backgroundColor: Colors.calendarBG_Color,
              calendarBackground: Colors.calendarBG_Color,
              textSectionTitleColor: '#fff',
              selectedDayBackgroundColor: Colors.Appthemecolor,
              selectedDayTextColor: '#ffffff',
              dayTextColor: '#fff',
              textDisabledColor: 'grey',
            }}
            textStyle={{
              // Apply the custom style to the month text
              monthText: styles.customMonthText,
            }}
          />
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginBottom: hp(2),
              marginTop: hp(3),
              marginRight: wp(8),
            }}
            onPress={props.onPress}>
            <Text
              style={{
                color: 'white',
                fontSize: hp(2),
                fontFamily: fontFamily.PassengerSans_Bold,
              }}>
              CLOSE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    zIndex: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(0),
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalView: {
    width: wp(95),
    paddingTop: wp(0),
    paddingHorizontal: wp(2),
    backgroundColor: Colors.calendarBG_Color,
    borderRadius: wp(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 16,
  },
  customMonthText: {
    color: 'red', // Replace with your desired color
  },
});
export default CustomCalendar;
