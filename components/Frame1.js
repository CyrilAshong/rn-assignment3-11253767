import { View, Text, StyleSheet, Image } from "react-native";


export default function Frame1() {
    return (
        <View style={styles.header}>
            <View style={styles.HContainer}>
                <Text style={styles.hello}>Hello , Devs</Text>
                <Text>14 task today</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../Images/person.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    hello: {
        fontSize: 32
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,
        paddingHorizontal: 20
    },
    image: {
        height: 52,
        width: 50,
    },
    imgContainer: {
        backgroundColor: 'white',
        borderRadius: 30,
    },
});