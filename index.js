import React,{useState} from "react";
import GoalItem from "./components/GoaLItem";
import GoalInput from "./components/GoalInput";
import { Text, StyleSheet,View,TextInput,Button,ScrollView,FlatList} from "react-native";
const App = () => {
 
  const [final,previous]=useState([]);
  
  function displayvalue(first){
           previous((allvalue)=>[...allvalue,{text:first ,key: Math.random().toString()} ,]);
  };
  function ondeleteitem(id){
     previous(checking=>{
      return checking.filter((goal)=> goal.id !== id)
     });
  };
  return(
    <View>
      
     <GoalInput addvalue={displayvalue}/>
      <FlatList
      data={final}
      renderItem={(itemdata)=>{
          return  <GoalItem 
          text={itemdata.item.text}
          id={itemdata.item.id}
          ondelete={ondeleteitem}
          />
            
      }}
      
      />
     
       
    </View>
  );
}
const styles=StyleSheet.create({
 
  
   
});


 export default App;
