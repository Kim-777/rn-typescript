import React, {useState, useCallback} from 'react';
import 'react-native-gesture-handler';
import MainNavigator from './src/screens/MainNavigator';
import {enableScreens} from 'react-native-screens';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {ToggleThemeProvider} from './src/contexts';

enableScreens();

const App = () => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );

  const toggleTheme = useCallback(
    () => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)),
    [],
  );

  return (
    <AppearanceProvider>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ToggleThemeProvider>
    </AppearanceProvider>
  );
};

export default App;
