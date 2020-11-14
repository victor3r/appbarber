import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../pages/List';
import Profile from '../pages/Profile';
import Concluded from '../pages/Concluded';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator screenOptions={{ headerShown: false }}>
    <App.Screen name="List" component={List} />
    <App.Screen name="Profile" component={Profile} />
    <App.Screen name="Concluded" component={Concluded} />
  </App.Navigator>
);

export default Routes;
