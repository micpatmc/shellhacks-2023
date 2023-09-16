import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filterButton: {
        backgroundColor: 'white',
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        marginHorizontal: 10,
        color:"red",
    },
});

export default function FilterButton({title}) {
    return (
        <TouchableOpacity style={styles.filterButton}>
            <Text styles={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}