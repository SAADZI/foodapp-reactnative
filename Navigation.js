import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPreparingScreen from "./screens/OrderPreparingScreen"
import DeliveryScreen from "./screens/DeliveryScreen"

const Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
    <Stack.Screen component={HomeScreen} name="Home"  />
    <Stack.Screen component={RestaurantScreen} name="Restaurant" />
    <Stack.Screen component={CartScreen} name="Cart"  options={{presentation:'modal'}}/>
    <Stack.Screen component={OrderPreparingScreen} name="OrderPreparing"  options={{presentation:'fullScreenModal'}}/>
    <Stack.Screen component={DeliveryScreen} name="Delivery"  options={{presentation:'fullScreenModal'}}/>

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation