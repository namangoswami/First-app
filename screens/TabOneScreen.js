import { Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearAllPosts, getPosts } from "../actions/posts";


import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
function temp(){
  console.log("This sucks!");
}
export default function TabOneScreen() {
  const dispatch=useDispatch();
  const state=useSelector(state=>state);
  console.log("what")
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{state.posts.length}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Dispatch getposts" onPress={()=>{dispatch(getPosts())}} />
      <Button title="Dispatch clearPosts" onPress={()=>{dispatch(clearAllPosts())}} />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
