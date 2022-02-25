import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import {Formik} from 'formik';
import { Text, View } from "../components/Themed";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { TextInput } from "react-native";
export default function TabTwoScreen() {
  const [postData, setPostData]=useState({
    creator:'', 
    title:'',
    message:'',
    tags:'',
    selectedFile:''
});
const userId=useSelector(state=>state.user)
useEffect(()=>{
  setPostData({...postData, creator:userId}, console.log('updatedPostData'));
}, [userId])
useEffect(()=>{

  console.log('user: ',userId)
})
useEffect(()=>{

  console.log('updatePost: ',postData)
}, [postData])
  return (
    <View style={styles.container}>
      <Text>{postData.creator}</Text>
      <Formik 
        initialValues={postData}
      >
        {(props)=>{
          console.log('formik',props.values);
          return(
          <View>
            <TextInput
            placeholder='Creator'
            onChangeText={props.handleChange('creator')}
            value={props.values.creator}
            />
          </View>
        )}

        }

      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
