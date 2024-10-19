import React from "react";
import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type outputPropType = {
    id : string,
    label : string,
    color : string,
    onPress :(isChecked: boolean)=>void
    isChecked : boolean
}

function FormCheckBox(props : outputPropType) : React.JSX.Element {
    const { id, label, color, onPress, isChecked } = props;
    return (
            <BouncyCheckbox fillColor={color} text={label} id={id} onPress={onPress} isChecked={isChecked} ></BouncyCheckbox>
    );
}

const style = StyleSheet.create({
    
    
});

export default FormCheckBox;