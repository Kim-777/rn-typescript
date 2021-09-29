import React, {useState, useCallback} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {ToggleThemeProvider} from './src/contexts';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme, DarkTheme} from 'react-native-paper';
import MainNavigator from './src/screens/MainNavigator';

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(
    scheme == 'dark' ? DarkTheme : DefaultTheme,
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme => (theme.dark ? DefaultTheme : DarkTheme));
  }, []);

  return (
    <AppearanceProvider>
      <PaperProvider theme={theme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <SafeAreaView style={[styles.safeAreaView]}>
            <MainNavigator />
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
