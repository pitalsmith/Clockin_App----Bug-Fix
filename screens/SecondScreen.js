import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function SecondScreen({ navigation, route }) {
  let language = route.params.language;
  let greeting = language === "french" ? "Bonjour" : "Hello";
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>{greeting}</Text>
      <Button 
        title='Go to Third Screen'
        onPress={() => navigation.push("Third")}
      />
      <Button 
        title='Go to Third Screen with Replace'
        onPress={() => {
          navigation.dispatch(
            StackActions.replace("Third")
          );
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}


