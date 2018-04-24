import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DrawerScreen from './DrawerScreen';

const Home = StackNavigator({
  Home: {
    screen: Screen1,
    navigationOptions: () => ({
      title: 'Home',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#4f3403',
        elevation: 0,
        shadowOpacity: 0
      },
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconFontAwesome 
            name='home'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  }
},{
  headerMode: 'none'
});

const Favorite = StackNavigator({
  Favorite: {
    screen: Screen2,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconMaterialIcons 
            name='favorite-border'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  }
},{
  headerMode: 'none'
});

const TabNav = TabNavigator({
  TabHome: Home,
  Details: Favorite,
  Map: {
    screen: Screen3,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconIonicons 
            name='place'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  }
}, {
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: '#4f3403'
    },
    inactiveTintColor: 'white',
    activeTintColor: '#e0ab18'
  }
});

const StackTab = StackNavigator({
  Tabs: TabNav
});

export default Drawer = DrawerNavigator({
  Tabs: {
    screen: StackTab
  }
}, {
  contentComponent: props => <DrawerScreen {...props} />
});