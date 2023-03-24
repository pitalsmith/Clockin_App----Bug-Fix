import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import Details from "./screens/Details";
import ClockHistory from "./screens/ClockHistory";
import CreateAccount from "./screens/CreateAccount"
import SignIn from "./screens/SignIn";
import ResetClock from "./screens/ResetClock";
import AllStaff from "./screens/AllStaff";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Details"
          component={Details}
        />
        <Stack.Screen 
          name="CreateAccount"
          component={CreateAccount}
        />
        <Stack.Screen 
          name="ClockHistory"
          component={ClockHistory}
        />
        <Stack.Screen 
          name="AllStaff"
          component={AllStaff}
        />
         <Stack.Screen 
          name="ResetClock"
          component={ResetClock}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
