import react from "react";
import  {
    View,
    Text,
    StyleSheet,

} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



function AppHeader():React.JSX.Element {
    return (
        <View style = {styles.HeaderArea}>
            <Text style = {styles.HeaderText}>
                wild

            </Text>
        </View>


    );
}
const styles = StyleSheet.create({
    HeaderText:{
        fontSize: 40,
        color: "#6439FF",
        borderWidth: 3,
        borderColor: "#00CCDD",
        padding:10,
        fontWeight: '600',


    },
    HeaderArea:{
        alignItems: 'center'
    },
});

export default AppHeader;