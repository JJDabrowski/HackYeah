import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home'
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    "mrt-mid": require("./assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    "mrt-bold": require("./assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    "mrt-xbold": require("./assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf"),
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

