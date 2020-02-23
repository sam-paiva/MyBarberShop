import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    containerBody: {
        width: width,
        height: height,
    },
    image: {
        width: width,
        height: 170,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    titleText: {
        padding: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    card: {
        width: 230,
        height: 220,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignContent: 'center',
    },
    imageCarousel: {
        width: 230,
        height: 100,
        borderRadius: 10,
    },
    bodyCard: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
    },
    text: {
        marginLeft: 20,
        fontSize: 13,
        marginTop: 0,
    },
    titleCard: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    rating: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginTop: 5
    },
    item: {
        borderColor: 'transparent',
        padding: 10
    }
})

export default styles;