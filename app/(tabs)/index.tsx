import { useState } from "react";
import { View,Text, Button, StyleSheet } from "react-native";

export default function HomeScrren(){
  const[counter,setCounter]=useState(0)

  function counterincrement(){
    setCounter(counter => counter+1)
  }
  function DecrementCounter(){
    setCounter(counter => counter-1)
  }
 return (

  <View  style={styles.container}>
    <Text>Counter App</Text>

    <Text style={styles.Heading}>{counter}</Text>

    <Button title="Increase" onPress={counterincrement}/>

    <Button title="Decrease" onPress={DecrementCounter}/>
  </View>
 )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,  // Ensures the view takes full height of the screen
    justifyContent: "center",  // Centers content vertically
    alignItems: "center",  // Centers content horizontally
    padding: 20,  // Adds some padding to avoid content touching screen edges
  },
  Heading:{
    marginBottom:50,
    color:"green",
    justifyContent:"center",
    alignItems:"center"
  }
})