import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

////////app styles///////////////////
import styles from './styles';

//////////////paper///////////////
import {Avatar} from 'react-native-paper';

////height and width///////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

///////////////////map states//////////////////
import MapView, {
  PROVIDER_GOOGLE,
  Polyline,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

/////////////map key//////
import {MapKeyApi} from '../../../utils/MapKey';

////////////location function////////////////
import {
  getCurrentLocation,
  locationPermission,
} from '../../../api/CurrentLocation';

/////////////map variables////////////////
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.08;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const pinsdata = [
  {latitude: 33.6493, longitude: 73.0843},
  {
    latitude: 33.6431,
    longitude: 73.0733,
  },
];

const MapScreen = ({navigation, route}) => {
  //////////////menu states//////////
  const [confirm_ride, setConfirmRide] = useState(false);

  ///////////////////map/////////////////////
  const mapRef = useRef();
  const markerRef = useRef();
  const ref = useRef();

  const [state, setState] = useState({
    curLoc: {
      latitude: 33.6491,
      longitude: 73.0833,
    },
    destinationCords: {
      latitude: 33.6844,
      longitude: 73.0479,
    },
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
    heading: 0,
  });

  const {
    curLoc,
    destinationCords,
    coordinate,
  } = state;

  toggleviewbutton = () => {
    if (confirm_ride === true) {
      setConfirmRide(false);
    } else {
      setConfirmRide(true);
    }
  };

  return (
    <SafeAreaView style={styles.container1}>
          {0 === 0 ? (
            <MapView
              ref={mapRef}
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={[styles.map]}
              initialRegion={{
                ...curLoc,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
            >
              <Marker.Animated
                ref={markerRef}
                coordinate={
                  curLoc
                }>
              </Marker.Animated>
            </MapView>
          ) : null}
    </SafeAreaView>
  );
};

export default MapScreen;
