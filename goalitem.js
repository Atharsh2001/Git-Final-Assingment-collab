import { StyleSheet,Text,View,Pressable } from "react-native";
function GoalItem(props){
    return(
        <Pressable onPress={props.ondelete.bind(this,props.id)}>
        <View>
           <Text   style={styles.text01}>{props.text}</Text>
       </View>
       </Pressable>
    );
};

const styles=StyleSheet.create({
    text01:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor:"orange",
        color:"white"
     
    }
});
export default GoalItem;
//
