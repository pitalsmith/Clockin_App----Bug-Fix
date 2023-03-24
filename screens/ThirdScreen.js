import { StatusBar } from 'expo-status-bar';
import {  Text, View, Button } from 'react-native';

export default function ThirdScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Third</Text>
      <Button title="Pop to root" onPress={() => navigation.popToTop()} />
      <Button title="Pop" onPress={() => navigation.pop()} />
      <StatusBar style="auto" />
    </View>
  );
}


