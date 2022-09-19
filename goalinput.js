import {View,TextInput,Button,StyleSheet} from "react-native";
import {useState} from "react";
function GoalInput(props){
    const [first,second]=useState(""); 
    // function userinput(enteredinput)
    //  {
    // second(enteredinput);
    //  }
    function click(){
        props.addvalue(first);
        second("");
    };
    return(
        <View style={styles.container}>
        <TextInput style={styles.textedit} placeholder="Type sometings......" onChangeText={second} value={first}/>
        <Button title="Send" onPress={click}/>
      </View>
    );
}

const styles=StyleSheet.create(
    {
        container:{
            flexDirection:"row",
            padding:1
            
            
         },
         textedit:{
           width:"85.7%",
           backgroundColor:"pink",
           borderRadius:10,
           padding:10
           
         }
    }
);

export default GoalInput;
