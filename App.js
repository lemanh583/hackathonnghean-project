import * as React from 'react';
import {NavigationContainer, Image} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/Home/Index';
import UrgentScreen from './src/screen/Urgent';
import UrgentDetailScreen from './src/screen/UrgentDetail';
import RegisterScreen from './src/screen/Register';
import ProfileScreen from './src/screen/Profile';
import CreateUrgentScreen from './src/screen/CreateUrgent';
import BloodDonationRegisterScreen from './src/screen/BloodDonation/Register';
import LoginWarningScreen from './src/screen/BloodDonation/LoginWarning';
import NewsDetailScreen from './src/screen/Home/NewsDetail';
import LoginScreen from './src/screen/Login';
import BloodRegisterScreen from './src/screen/BloodRegister';
import BloodRegisteredScreen from './src/screen/BloodRegistered';
import NewsScreen from './src/screen/Home/News';

import TabsScreen from './Tab';
import {COLOR_PRIMARY} from './src/constants';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Group>
          {/* screen của hùng */}
          <Stack.Screen
            name="Main"
            options={{
              headerShown: false,
            }}>
            {() => <TabsScreen />}
          </Stack.Screen>
          {/* end screen của hùng */}

          {/* screen của a khoa */}
          {/* <Stack.Screen
            name="Tabs"
            component={TabsScreen}
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="Urgent"
            component={UrgentScreen}
            options={{
              title: 'Cần máu khẩn cấp',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLOR_PRIMARY,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          {/* end screen của a khoa */}

          {/* screen của mạnh */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CreateUrgent"
            component={CreateUrgentScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* end screen của mạnh */}

          {/* screen của dũng */}
          <Stack.Screen
            name="BloodRegister"
            component={BloodRegisterScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="BloodRegistered"
            component={BloodRegisteredScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* end screen của dũng */}

          {/* screen của nguyên */}
          <Stack.Screen
            name="LoginWarning"
            component={LoginWarningScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="BloodDonationRegister"
            component={BloodDonationRegisterScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* end screen của nguyên */}
        </Stack.Group>

        <Stack.Group screenOptions={{presentation: 'modal'}}>
          {/* screen của a khoa */}
          <Stack.Screen
            name="UrgentDetail"
            component={UrgentDetailScreen}
            options={{headerShown: false}}
          />
          {/* end screen của a khoa */}

          {/* screen của hùng */}
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="News"
            component={NewsScreen}
            options={{
              title: 'Tin tức',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLOR_PRIMARY,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          {/* end screen của hùng */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
