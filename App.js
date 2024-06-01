import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Frame1 from './components/Frame1';

export default function App() {
  return (
    <SafeAreaView>
      <Frame1 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
