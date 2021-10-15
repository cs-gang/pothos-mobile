import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Transactions from './src/screens/Transactions';
import Dashboard from './src/screens/Dashboard';
import Options from './src/screens/Options';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          barStyle={{
            backgroundColor: "darkgreen",
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
