import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screen/Profile';
import CreateUrgentScreen from '../screen/CreateUrgent';

const Tab = createBottomTabNavigator();

export default function TabBottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CreatUrgent" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={CreateUrgentScreen} />
    </Tab.Navigator>
  );
}
