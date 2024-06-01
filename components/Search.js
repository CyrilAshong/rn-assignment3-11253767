import { View, TextInput, Image, StyleSheet } from "react-native";


export default function () {
    return (
        <View style={styles.search}>
            <TextInput placeholder='  🔍   Search' style={styles.searchBoc} />
            <Image source={require('../Images/Filter.png')} />
        </View>
    );
}


const styles = StyleSheet.create({
    searchBoc: {
        backgroundColor: 'white',
        color: 'black',
        width: 280,
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FBF9F7',
        fontWeight: 'bold ',
        fontSize: 17,
        width: 250
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20
    },
});