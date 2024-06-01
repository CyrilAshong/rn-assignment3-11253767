import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Frame1 from './components/Frame1';
import Search from './components/Search';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Frame1 />
      <Search />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 20,
    borderRadius: 35,
  },
});
