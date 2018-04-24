import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import { Button, Icon } from 'native-base';

import firebase from 'firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  componentWillMount() {

    // To Configure react native app with cloud of Google Firebase database !
    var config = {
      apiKey: "AIzaSyATzawIX7SF_7ptbi0TPycr0ihmBsbVas8",
      authDomain: "testfire-fd8cb.firebaseapp.com",
      databaseURL: "https://testfire-fd8cb.firebaseio.com",
      projectId: "testfire-fd8cb",
      storageBucket: "",
      messagingSenderId: "479739911728"
    };
    firebase.initializeApp(config);

    // To select data from firebase every time data has changed !
    firebase.database().ref('sensors').once('value', (data) => {
        console.log(data.toJSON());
    })

    // To Await 5 seconds to insert a new user
    setTimeout(() => {
      
        firebase.database().ref('sensors/003').set(
            {
                api_value: 111,
                api_level: 'Moderate Pollution',
                PM25: 210,
                PM10: 391,
                NO2: 50,
                SO2: 5,
                CO: 30,
                O3: 0
            }  
        ).then(() => {
            console.log('INSERTED !');
        }).catch((error) => {
            console.log(error);
        });
    }, 5000);

    // To Update a user
    firebase.database().ref('sensors/002').update({
                api_value: 90,
                api_level: 'Low Pollution',
                PM25: 100,
                PM10: 122,
                NO2: 55,
                SO2: 22,
                CO: 39,
                O3: 55
    });
    // To Remove a user
    firebase.database().ref('sensors/').remove();
  
    // To Display data from firebase
    /*
    var sensorsRef = firebase.database().ref('sensors/sensors');
    starCountRef.on('value', function(snapshot) {
    updateSensors(postElement, snapshot.val());
    */
   
   firebase.database().ref(`/sensors/003`)
  .on('value', snapshot => {
    snapshot.val()
   });
   
   var sensorId;
   return firebase.database().ref('/sensors/' + sensorId).once('value').then(function(snapshot) {
   var sensorname = (snapshot.val() && snapshot.val().sensorname) || 'Anonymous';
   });
   
   /*
   firebase.database().ref('/sensors/').on('value', snapshot => {
    this.setState({ sensorname: snapshot.val() });
  });
  */
 /* not js syntax :-
 var database = firebase.database().ref().child('sensors');
 var sensorInput = document.getElementById('mainSearch');
 
 database.child(sensorInput).on('value', function(snap) {
 
           var data = snap.val();
 
           var apiValue = data.api_value;
           var apiLevel = data.api_level;
           
         }); 
*/
}

  navOptions

  static navigationOptions = ({ navigation }) => {

    navOptions = navigation;
    const { params = {} } = navigation.state;

    return {
      headerLeft: (
        <Button
          transparent
          onPress={() => params._onHeaderEventControl()}
        >
          <Icon 
            api_value="menu"
            style={{ fontSize: 30, color: 'white' }}
          />
        </Button>
      )
    }
  }

  onHeaderEventControl() {
    const { params = {} } = navOptions.state;
    params._openNav()
  }

  componentDidMount() {
    this.props.navigation.setParams({
      _onHeaderEventControl: this.onHeaderEventControl,
      _openNav: () => this.openDrawer()
    })
  }

  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
        style={{width: 200, height: 200}}
        source={{uri:'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-symbols-shapes/016961-3d-transparent-glass-icon-symbols-shapes-smileyfacesad.png' }}
        />
        
        <Text style={styles.api}>
          API : High Pollution
          
        </Text>
        <Text style={styles.date_time}>
        
            9 March 2018 3.15PM
        </Text>
        <Image 
        style={{width: 300, height: 200}}
        source={{uri:'https://lh3.googleusercontent.com/F0x8me7MrZmVNOuOqVLYuVWRdKpmwcHwAdWfL3nht2Ax-WBipvEkOU8zWOylV6WxPAsh=s124'}}        
        />

        {alert(this.props.sensorname)}
        

                <Text style={{ fontWeight: 'bold', fontSize: 18, fontColor:'white' }}> 
                {'\t'}
              "Firebase Database already Connected!"
                </Text>  

            </View>

    );
  }


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00E676',
  },
  api: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'red',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'orange',
  },
  date_time: {
    fontSize:20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
