import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import {responsiveHeight,responsiveFontSize,responsiveWidth} from "react-native-responsive-dimensions";

import {LinearGradient} from "expo-linear-gradient";

import {MaterialIcons} from "@expo/vector-icons";

import Colors from "../constants/Colors";


export default class NowPlaying extends Component{
    constructor(props){
        super(props);
        this.state={
            progress: 0.3
        }
    }

    render(){
        return(
            <LinearGradient
                colors={[Colors.accentGradientStart,Colors.accentGradientEnd]}
                start={[0,0]}
                end={[1,1]}
                style={styles.nowPlayingContainer}>
                     {/*ProgressBar*/}
                <View style={[styles.progressBar,{width:responsiveWidth(this.state.progress*100)}]}></View>
                        {/*End of ProgressBar*/}

                    <View style={styles.controlContainer}>
                        <View style={styles.songContainer}>
                            <Image source={{uri:"https://m.media-amazon.com/images/I/51eAveGcHML._SS500_.jpg"}}
                                    style={styles.albumArt}/>
                            <View style={styles.infoContainer}>
                                <Text style={styles.songTitle}>Song</Text>
                                <Text style={styles.albumText}>Album Info</Text>
                            </View>
                        </View>
                        <MaterialIcons name={'play-arrow'} color={Colors.headingColor} size={responsiveFontSize(6)}/>
                    </View>
            </LinearGradient>
        )
    };
    /*Add wrap for song name*/
}

const styles = StyleSheet.create({
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
