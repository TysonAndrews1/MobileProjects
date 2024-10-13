import React from "react";
import {SafeAreaView, View,Text, StyleSheet} from "react-native";
import AppHeader from "./components/AppHeader";
import ProfileCard from "./components/ProfileCard";
function Main():(React.JSX.Element) {
    return  (
        
        <SafeAreaView>
            <View style ={styles.OverView} >
           <ProfileCard/>
           </View>
        </SafeAreaView>
    );
}



export default Main;


const styles = StyleSheet.create({
    headingText:{
        fontSize:30,
        fontWeight:"400",
        color: "#000"
    },
    headingArea:{
        alignItems: 'center',
        marginTop: 10
    },
    OverView:{
        alignItems: 'center',
        justifyContent:'center',
        height: "100%",
        backgroundColor:"grey"
    }
});