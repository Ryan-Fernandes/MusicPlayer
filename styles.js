import {StyleSheet} from "react-native";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import Colors from "./constants/Colors";

export const styles = StyleSheet.create({
    nowPlayingContainer:{
        height:responsiveHeight(10)
    },
    progressBar:{
        height: responsiveHeight(0.7),
        backgroundColor: Colors.headingColor,
        borderRadius: responsiveWidth(1),
    },
    controlContainer:{
        flex:1,
        alignSelf:'stretch',
        flexDirection:'row',
        justifyContent:'space-between' ,
        paddingHorizontal: responsiveWidth(6),
        alignItems: 'center'
    },
    songContainer:{
        /*alignSelf: 'stretch',
        alignItems: 'center',*/
        flexDirection: 'row',
    },
    albumArt:{
        width: responsiveHeight(8),
        height: responsiveHeight(8),
        borderRadius: responsiveHeight(1),
        marginRight: responsiveWidth(5),
        /*ADD SHADOW*/

    },
    infoContainer:{
        justifyContent: 'center',
    },
    songTitle:{
        fontFamily: 'fira-regular',
        color: Colors.headingColor,
        fontSize: responsiveFontSize(2.3),
        marginBottom: responsiveHeight(0.3),
    },
    albumText:{
        fontFamily: 'fira-regular',
        color: Colors.greyColor,
        fontSize: responsiveFontSize(1.7),
    }
});
