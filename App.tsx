import * as React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from './StyleSheet';
import Navigation from './Navigation';

const App = () => (
  <SafeAreaProvider>
    <StatusBar backgroundColor={theme.colors.blue1} />
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
