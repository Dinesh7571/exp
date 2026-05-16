
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/DetailScreen';
import DetailScreen from '../../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}