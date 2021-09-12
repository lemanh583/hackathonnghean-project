import React from "react";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import {View, TouchableOpacity, Image,Text} from 'react-native'
import HomeScreen from './src/screen/Home/Index';
import ProfileScreen from './src/screen/Profile';
import BloodDonationRegisterScreen from './src/screen/BloodDonation/Register';
import LoginWarningScreen from './src/screen/BloodDonation/LoginWarning';

const Tab = createBottomTabNavigator();
const CustomTabButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    activeOpacity = {1.0}
    onPress={onPress}>
    <View
      style={{
        width: 80,
        height: 80,
        borderRadius: 35,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => (
        <BottomTabBar
          {...props}
          state={{
            ...props.state,
            routes: props.state.routes.slice(0, 3),
          }}></BottomTabBar>
      )}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          elevator: 0,
          height: 87,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('~/assets/icon/home.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#FF576E' : '#BEBEBE',
                }}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LoginWarning"
        component={LoginWarningScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('~/assets/icon/blood.png')}
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </View>
          ),
          tabBarButton: props => <CustomTabButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('~/assets/icon/profile.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#FF576E' : '#BEBEBE',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
