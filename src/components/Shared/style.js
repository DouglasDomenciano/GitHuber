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
        marginBottom: 50,
        fontStyle: 'italic',
        fontSize: 20,
        fontFamily: 'Segoe Ui',
    },
    ShadowBox: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1, 
    },
    BorderedViewDefault: {
        borderWidth: 1,
        borderColor: Colors.InpurBorderDefault,
        borderRadius: 10,
    }
}