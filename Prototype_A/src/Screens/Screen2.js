import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
  render() {
    return (
      
      <View style={styles.container}>
      <Text style={styles.api}>
          Hazardous Pollution {'\n'} 310 API
      </Text>
      <Text style={styles.gases}>
          Weekly Average : 45 {'\n'} Best Day Of The Week : 15 {'\n'} Worst Day Of The Week : 310 {'\n'}
          {"\n"}        
        </Text>
        <Image
        style={{width: 50, height: 50}}
        source={{uri:'https://cdn2.iconfinder.com/data/icons/shopping-online-e-commerce-store/512/trusted_certified_seller_reseller-512.png' }}
        />
        <Text style={styles.gases}>
        {"\n"} 
    PM2.5 : 310 {'\t'}    SO2 : 5  {"\n"}
          PM10 : 291 {"\t"}      CO : 30 {"\n"}
          NO2 : 70  {"\t"}        03 : 0
        </Text>
        
      </View>
    );
  }
}
/* use button in view if needed
<Button 
          title="Show Screen 1"
          onPress={() => {
            this.props.navigation.navigate('Screen1');
          }}
        />
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00E676',
  },
  api: {
    alignItems: 'flex-start',
    fontSize: 40,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  gases: {
    fontSize: 25,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
