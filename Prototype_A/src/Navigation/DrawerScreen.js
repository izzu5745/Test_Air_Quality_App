import React from 'react';
import { View, Text, Button, Image } from 'react-native';

export default class DrawerScreen extends React.Component {

  render() {
    return (
      <View>
        
        

        <Button
          title='User Account'
        />
        

        <View style={{ height: 100, backgroundColor: '#2cc142' }}>
        <Text style ={{fontSize: 20, fontColor:'white'}}>  
        User : Nierwinter
        </Text>  
        </View>

        <Button
          title='Settings'
        />
        <Button
          title='F.A.Q'
        />
        <Button
          title='About Us'
        />
        <Button
          title='Rate the app'
        />
        <Button
          title='Share'
        />
        <Button
          title='Sign Out'
        />

      </View>
    );
  }
}