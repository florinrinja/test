import * as React from 'react';
import screens from './Screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navTheme } from '../../StyleSheet';

const Drawer = createDrawerNavigator();

const LoggedInScreen = () => (
  <Drawer.Navigator
    drawerContentOptions={{
      style: {
        backgroundColor: navTheme.colors.background,
      },
      labelStyle: {
        color: navTheme.colors.text,
      },
    }}
  >
    {screens.map((screen, index) => (
      <Drawer.Screen
        name={screen.name}
        component={screen.component}
        key={index}
      />
    ))}
  </Drawer.Navigator>
);

export default LoggedInScreen;
