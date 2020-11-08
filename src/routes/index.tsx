import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../pages/List';
import Profile from '../pages/Profile';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator screenOptions={{ headerShown: false }}>
    <App.Screen name="List" component={List} />
    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default Routes;
