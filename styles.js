import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    billInput: {
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        fontSize: 20,
        marginVertical: 10,
    },
    tipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    tip: {
        width: '30%',
        backgroundColor: '#2395e2',
        borderRadius: 5,
        textAlign: 'center',
        padding: 10,
        marginVertical: 5,
    },
    selected: {
        backgroundColor: 'green',
    },
    customTip: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        fontSize: 16,
        marginVertical: 10,
    },
    numberOfPeople: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        fontSize: 16,
        marginVertical: 10,
    },
    generateBillBtn: {
        width: '100%',
        height: 40,
        backgroundColor: '#2395e2',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
    },
    generateBillBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    billOutput: {
        marginVertical: 15,
        padding: 20,
        backgroundColor: '#2395e2',
        borderRadius: 8,
        color: 'white',
    },
    tipAmount: {
        marginBottom: 10,
        color: "white",
        fontWeight: "bold",
    },
    tipText: {
        color: "white",
        fontWeight: "bold",
    },
    total: {
        marginBottom: 10,
        color: "white",
        fontWeight: "bold",
    },
    value: {
        color: "white",
        fontWeight: "bold",
        paddingLeft: 10,
        fontSize: 19,
    },
    eachPersonBill: {
        color: "white",
        fontWeight: "bold",
    },
    resetBtn: {
        padding: 12,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    resetBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export { styles }