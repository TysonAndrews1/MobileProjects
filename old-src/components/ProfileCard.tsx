import react from "react";
import  {
    View,
    Text,
    StyleSheet,
    Image,

} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { assets } from "../../react-native.config";


function ProfileCard():React.JSX.Element {
    return (
        <View style = {styles.ProfileCard}>

            <Image source={require('@assets/banner.jpg')} style = {styles.BannerImg}></Image>
            <Image source={require('@assets/logo.png')} style = {styles.ProfileImg}></Image>
            <Text style = {styles.Name}>Bob Howard</Text>
            <Text style = {styles.Subtitle}>Subtitle</Text>
            <Text style = {styles.Info}>so much information</Text>
            <View style = {styles.MediaContainer}>
            <Image source={require('@assets/twitter.png')} style = {styles.Media}/>
            <Image source={require('@assets/insta.png')} style = {styles.Media}/>
            <Image source={require('@assets/linkedin.png')} style = {styles.Media}/>
            <Image source={require('@assets/fb.png')} style = {styles.Media}/>
            </View>


        </View>


    );
}

const styles = StyleSheet.create({
    ProfileCard:{
        height: 500,
        width: "80%",
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center',
        overflow: 'hidden',
        position:'relative',
        borderColor: "white",
        backgroundColor: "#e8f3bf"
    },
    Name:{
        fontFamily: 'Edu AU VIC WA NT Dots', // Specify the font family
        marginTop: 50,
        fontSize:25,
        fontWeight:"600",
        position: "relative",
        top:"15%",
        color: "red",
    },
    BannerImg:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width:"100%",
        height :180,
        top:-20,
        resizeMode:"cover",
        position: 'absolute'
        
    },
    ProfileImg:{
        height: 140,
        width: 140,
        position: "absolute",
        top: 110,
        borderWidth: 7,
        borderRadius: 140/2,
        borderColor: "white",
        resizeMode:"cover",

    },
    Subtitle:{
        position: "relative",
        top:"15%",
        fontSize:25,
        fontWeight:"400",
        color: "red",
        fontFamily:"Edu AU VIC WA NT Dots"
    },
    Info:{
        fontSize:22,
        top:"20%",
        position: "relative",
        color: "red",
        fontFamily: "Edu AU VIC WA NT Dots",
        fontWeight:"400"

    },
    MediaContainer:{
        position: "relative",
        top:"25%",
        flexDirection: 'row'
    },
    Media:{
        height:30,
        width:30,
        borderRadius: 30/2,
        resizeMode:"cover",
        margin: 10
    }
});

export default ProfileCard;