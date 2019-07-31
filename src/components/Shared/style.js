import Colors from './colors'

export default {
    InputWithBorder: {
        alignSelf: 'stretch',
        color: '#FFF',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: Colors.InpurBorderDefault,
        borderRadius: 10,
        marginBottom: 50,
        fontStyle: 'italic',
        fontSize: 20,
        fontFamily: 'Segoe Ui',
    },
    InputWithoutBorder: {
        alignSelf: 'stretch',
        color: '#FFF',
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 20,
        fontFamily: 'Segoe Ui',
    },
    ShadowBox: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 1.0,
        shadowRadius: 5,
        elevation: 2, 
    },
}