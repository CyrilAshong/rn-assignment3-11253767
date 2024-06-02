import { SafeAreaView, StyleSheet, Text, View, ScrollView, SectionList, } from 'react-native';
import Frame1 from './components/Frame1';
import Search from './components/Search';
import Cards from './components/Cards';
import Tasklist from './data.json';

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
  };
  const category3 = {
    name: "Coding",
    taskno: "12 Task",
    image: require('./Images/coding.jpeg')
  };
  const category4 = {
    name: "Cook",
    taskno: "12 Task",
    image: require('./Images/cook.jpeg')
  };
  const category5 = {
    name: "Dance",
    taskno: "12 Task",
    image: require('./Images/dancing.jpeg')
  };
  const category6 = {
    name: "Music",
    taskno: "12 Task",
    image: require('./Images/music.jpeg')
  };
  const category7 = {
    name: "Laundry",
    taskno: "12 Task",
    image: require('./Images/laundry.jpeg')
  };
  const category8 = {
    name: "Karate",
    taskno: "12 Task",
    image: require('./Images/karate.jpeg')
  };
  const category9 = {
    name: "Soccer",
    taskno: "12 Task",
    image: require('./Images/soccer.jpeg')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Frame1 />
        <Search />
        <ScrollView style={styles.cardContainer}>
          <Text style={styles.categoryText}>Categories</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Cards {...category1} />
            <Cards {...category2} />
            <Cards {...category3} />
            <Cards {...category4} />
            <Cards {...category5} />
            <Cards {...category6} />
            <Cards {...category7} />
            <Cards {...category8} />
            <Cards {...category9} />
          </ScrollView>
        </ScrollView>
        <SectionList
          sections={Tasklist}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.name}> {item} </Text>
              </View>
            )
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.headerStyle} > {section.type} </Text>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          SectionSeparatorComponent={() => <View style={{ height: 16, marginBottom: 10 }} />}
          showsVerticalScrollIndicator={false}
        />
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
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    elevation: 5,
    padding: 16,
    marginHorizontal: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 354,
    height: 128,
    top: 30,
    left: 5
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 10
  }
});
