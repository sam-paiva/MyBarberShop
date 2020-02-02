import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#115E38'
    },
    containerBody: {
        width: width,
        height: height,
        flex: 1,
        backgroundColor: 'white',
        borderTopStartRadius: 50,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        width: width,
        height: 230,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    titleText: {
        padding: 30,
        fontSize: 40,
        color: 'white'
    },
    input: {
        width: width - 50,
        marginTop: 30,
        marginHorizontal: 40,
        marginLeft: 40,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
    icon: {
        marginLeft: 20
    },
    button: {
        marginTop: 30,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 30
    },
    textOption: {
        color: 'grey',
        marginHorizontal: 50
    },
    slide: {

    }
})

export default styles;