import MapView from 'react-native-maps';
import React, { Component } from 'react';


import { View } from 'react-native';

// import styles from './styles';


export default class Main extends Component {
  
  render() {
    return (
      <MapView style={{flex: 1}}
        initialRegion={{
          latitude: -23.555505,
          longitude: -46.658900,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421 
        }}
      
      />
    );
  }
}
