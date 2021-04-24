import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const colors = {
    white: "#FFFFFF",
    lightGray: "#F2F2F2",
    mediumGray: "#9E9E9E",
    borderGray: "#E1E1E1",
    darkGray: "#263238",
    black: "#000000",
    primary: "#FFC700",
    secondary: "#525252",
    bluePill: "#407BFF61",
    red: "#DF5753",
    btnLogin: "#937d1c",
    input: "#FEFEFE",
    movieDetailContainer: '#6C6C6C',
    textSubTitle: '#CDCDCD',

}

const text = StyleSheet.create({
    loginTitle: {
        fontSize: 30,
        fontWeight: "400",
        textTransform: "uppercase",
        color: colors.white,
        marginBottom: 50
    },
    primaryText: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.black,     
        marginLeft: 100, 
    },
    bold: {
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 35,
        textAlign: "center",
        color: colors.white,
        marginTop: 40,
        marginBottom: 35
    },
    regular: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        color: colors.white
    },
    movieTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,                
        color: colors.white
    },
    movieYear: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,                
        color: colors.primary
    },
    movieSubTitle: {
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,                
        color: colors.textSubTitle
    },
    movieDetailBtnText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        color: colors.white
    },
    genreText: {
        color: colors.white,
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        alignItems: 'center',
    },
    //movie details
    movieDetailsYear: {
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 33,
        color: colors.primary
    },
    movieDetailsSubTitle: {
        marginBottom: 15,
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 25,
        color: colors.mediumGray
    },
    movieDetailsSynopsisTitle: {
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        color: colors.white
    },
    movieDetailsSynopsisText: {
        color: colors.mediumGray,
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'justify'
    },
    reviewsListText: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 22,
        lineHeight: 30,
        color: colors.white
    },
    //review card
    reviewUsername: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        color: colors.white
    }
    
});

const theme = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.secondary
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.secondary
    },
    loginCard: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "center",
    },
    mainImage: {
        width: 340,
        height: 250,
    },
    textContainer: {

    },
    textInput: {
        width: 340,
        height: 50,
        marginBottom: 35,
        backgroundColor: colors.input,
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 10,
        padding: 10
    },
    passwordGroup: {
        flexDirection: "row",
        alignItems: "center",
    },
    form: {
        marginVertical: 10
    },
    toggle: {
        marginLeft: -30,
        marginBottom: 30
    },
    primaryButton: {
        marginTop: 40,
        width: 340,
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.primary
    },
    buttonTextContainer: {

    },
    arrowContainer: {
        width: 50,
        height: 50,
        backgroundColor: colors.btnLogin,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center", 
    },
    //Catalog elements
    catalogContainer: {
        backgroundColor: colors.secondary,
        padding: 20
    },
    //MovieCard
    movieCard: {
        backgroundColor: colors.movieDetailContainer,
        borderRadius: 10,
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    movieDetailImage: {
        width: 374,
        height: 228
    },
    movieInfos: {
        paddingTop: 20,
        paddingRight: 15,
        paddingLeft: 15,
        marginBottom: 10
    },
    movieDetailsBtn: {
        width: 344,
        height: 40,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.white,
        alignItems: "center",
        justifyContent: "center"
    },
    genreContainer: {
        backgroundColor: colors.movieDetailContainer,
        borderRadius: 10,
        marginBottom: 20,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        width: 374,
        height: 80
    },
    selectInput: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 10,
        padding: 15,
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalContainer: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: "#00000033",
        alignItems: "center",
        justifyContent: "center"
    },
    modalContent: {
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50%",
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5

    },
    modalItem: {
        width: "100%",
        backgroundColor: colors.lightGray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    },
    downContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    //Movie Details
    detailsContainer: {
        backgroundColor: colors.secondary,        
    },
    movieCardDetails: {
        backgroundColor: colors.movieDetailContainer,
        width: 374,
        borderRadius: 10,
        margin: 20,
        paddingTop: 20,
        paddingBottom: 15
    },
    movieCardReview: {
        backgroundColor: colors.movieDetailContainer,
        width: 374,
        borderRadius: 10,
        marginBottom: 20,
        marginLeft: 20,
        paddingTop: 20,
        paddingBottom: 15,
    },
    movieCardListReviews: {
        backgroundColor: colors.movieDetailContainer,
        width: 374,
        borderRadius: 10,
        marginBottom: 20,
        marginLeft: 20,
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 20,
    },
    movieDetailsImage: {
        width: 374,
        height: 228
    },
    movieDetailsTitle: {
        marginBottom: 15,
        marginRight: 15,
        marginLeft: 25,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 33,
        color: colors.white
    },
    movieDetailsInfos: {
        marginTop: 15,
        marginLeft: 20, 
        marginRight: 20,  
        marginBottom: 15,  
    },
    movieDetailsSynopsis: {
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 15,
    },
    buttonNewReview: {
        width: 334,
        height: 50,
        marginLeft: 20,
        marginTop: 15,
        marginRight: 20,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.primary
    },
    textAreaReview: {
         backgroundColor: colors.white,
         width: 334,
         height: 100,
         marginLeft: 20,
         borderRadius: 10,
         paddingTop: 10,
         paddingBottom: 10,
         paddingLeft: 15,
         paddingRight: 15,
    },
    //review card
    reviewCardContainer: {

    },
    reviewUserGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 5
    },
    reviewText: {
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        color: colors.mediumGray
    }
    
});

const nav = StyleSheet.create({
    leftText: {
        fontSize: 18,
        color: colors.black,
        fontWeight: "bold",
        marginLeft: 20,
    }
});

export { colors, nav, text, theme };