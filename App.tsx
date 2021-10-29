import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import tw from 'tailwind-react-native-classnames';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Transactions from './src/screens/Transactions';
import Dashboard from './src/screens/Dashboard';
import Options from './src/screens/Options';
import { green300 } from 'react-native-paper/lib/typescript/styles/colors';

GoogleSignin.configure({
  webClientId: '582809644656-e6pot9amraonlps7ncpuqalemj8mqp39.apps.googleusercontent.com',
});


const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          barStyle={{
            backgroundColor: `${tw.color("green-700")}`,
          }}>
          <Tab.Screen name="Transactions" component={Transactions} />
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Options" component={Options} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
