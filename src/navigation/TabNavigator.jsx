import HomeStack from './stacks/HomeStack';
import ProfileStack from './stacks/ProfileStack';
import NotificationsStack from './stacks/NotificationsStack';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';

const Tab = createNativeBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarImage: { sfSymbol: 'house' },  
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsStack}
        options={{
          title: 'Alerts',
          tabBarImage: { sfSymbol: 'bell' },
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          title: 'Profile',
          tabBarImage: { sfSymbol: 'person' },
        }}
      />
    </Tab.Navigator>
  );
}