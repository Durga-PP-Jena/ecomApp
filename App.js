import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigators';

export default function App() {
  return (
    <View style={{
      flex:1
    }}>
      <AppNavigator/>
    </View>
  );
}

