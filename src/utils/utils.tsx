import Snackbar from 'react-native-snackbar';


export function showToast(text: string, color: string) {
    Snackbar.show({
        text: text,
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
            text: 'Fechar',
            textColor: color,
            onPress: () => { /* Do something. */ },
        },
    })
}