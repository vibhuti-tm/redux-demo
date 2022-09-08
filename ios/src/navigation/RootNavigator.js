import Movies from '../screens/Movies';
import Favorites from '../screens/Favorites';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import { Images } from '../images/Images';
const Tab = createBottomTabNavigator();
const tabBarOptions = {
  showLabel: false,
  style: {
    height: '10%',
  },
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={Images.movie} style={{height:20,width:20,tintColor:focused?'#9381ff':'black'}}/>
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={Images.like} style={{height:20,width:20,tintColor:focused?'#9381ff':'black'}} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;