import { View, Text, Image, StyleSheet } from "react-native";


export default function Cards({ name, taskno, image }) {
    return (
        <View style={styles.cards}>
            <Image style={styles.img} source={image} />

            <View style={styles.badge}>
                <Text>{name}</Text>
                <Text> {taskno} </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    cards: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
        marginRight: 15,
        justifyContent: 'center',
    },
    img: {
        marginTop: 50,
        backgroundColor: 'white',
    },
    badge: {
        position: 'absolute',
        top: 0,
        padding: 10
    },
})