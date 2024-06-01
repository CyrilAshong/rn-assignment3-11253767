import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import Frame1 from './components/Frame1';
import Search from './components/Search';
import Cards from './components/Cards';

export default function App() {

  const category1 = {
    name: "Exercise",
    taskno: "12 Task",
    image: require('./Images/young woman working online.png')
  };
  const category2 = {
    name: "Study",
    taskno: "12 Task",
    image: require('./Images/young woman working at desk.png')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Frame1 />
      <Search />
      <ScrollView style={styles.cardContainer}>
        <Text style={styles.categoryText}>Categories</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Cards {...category1} />
          <Cards {...category2} />
          <Cards {...category2} />
        </ScrollView>
      </ScrollView>
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
