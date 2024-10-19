"use client"

import React,{useState} from "react";
import {
    View,
    Text,
} from "react-native";
import InputBox from "./components/inputBox.tsx";
import Btn from "./components/Btn.tsx";
import Output from "./components/Output.tsx";
import FormCheckBox from "./components/formCheckBox.tsx";
import { generatePasswordString } from "./utility/passwordGenerator.ts";
import Clipboard from "@react-native-clipboard/clipboard";
import * as snackBars from "./utility/utils.ts";

function copyToClipboard(inputString: string){
    console.log("Copied");
    snackBars.showSuccessSnackBar(`Successfully Saved ${inputString} to ClipBoard`)
   return  Clipboard.setString(inputString)
}

function MainA() : React.JSX.Element {
    function reset() {
        setPassword("")
        setLength("")
        setLower(false)
        setUpper(false)
        setNumbers(false)
        setSymbol(false)
        console.log("reset");
        snackBars.showInfoSnackBar("all Fields have been reset")
        
    }

    const [Lower, setLower]= useState(false)
    const [Upper, setUpper]= useState(false)
    const [Symbol, setSymbol]= useState(false)
    const [Numbers, setNumbers]= useState(false)
    const [Length, setLength]= useState("")
    const [password, setPassword]=useState("");
    
    
    function genpassword() {
        if(parseInt(Length) > 12 ||parseInt(Length) <8){
            snackBars.showErrorSnackbar("Please Input a Length of between 8 and 12")
            setPassword("")
        }else if (!Lower&&!Upper&&!Numbers&&!Symbol) {
            snackBars.showErrorSnackbar("Please Check at least on Complexity Modifier ")
            setPassword("")
        }else if (Length == ""){
            snackBars.showErrorSnackbar("Please Fill in the desired Length of your password")
            setPassword("")
        }else{setPassword(generatePasswordString({length:parseInt(Length),includeLower:Lower,includeUpper:Upper,includeNumber:Numbers,includeSymbol:Symbol}))}


       console.log(Length);
        
       console.log(password);
       
    }
    return (
        <View>
            <Text>Password Generator</Text>
            <InputBox Value={Length} onChange={setLength}></InputBox>
            <FormCheckBox color="red" label="Lower Case Letters" id="1" onPress={setLower} isChecked={Lower}></FormCheckBox>
            <FormCheckBox color="blue" label="Upper Case Letters" id="2" onPress={setUpper} isChecked={Upper}></FormCheckBox>
            <FormCheckBox color="green" label="Numbers" id="3" onPress={setNumbers} isChecked={Numbers}></FormCheckBox>
            <FormCheckBox color="yellow" label="Special Characters" id="4" onPress={setSymbol} isChecked={Symbol}></FormCheckBox>
            <Btn type={1} title="submit" onPress={()=>{genpassword()}} ></Btn>
            <Output generatedPassword={password} placeholder="select Options...." handleCopy={copyToClipboard}></Output>
            <Btn type={2} title="reset" onPress={reset}></Btn>

        </View>
    );
}
    

export default MainA;