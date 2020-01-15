import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    containerBody: {
        width: width,
        height: height,
    },
    image: {
        width: 415,
        height: 300,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    titleText: {
        padding: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    card: {
        width: 300,
        height: 250,
        backgroundColor: "#fff",
        marginHorizontal: 30,
        borderRadius: 20
    },
    imageCarousel: {
        width: 300,
        height: 100,
    },
    bodyCard: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
    },
    text: {
        marginLeft: 20,
        fontSize: 15,
        marginTop: 5
    },
    titleCard: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    }
})

export default styles;