// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";
import ContactScreen from '../contact-app/Screens/ContactListScreen'
import AddContactScreen from '../contact-app/Screens/AddContactScreen'
import Colors from "../constants/Colors";
import { createContext } from "react";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import React from "react";
import contacts from '../contact-app/contacts';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import posts from "../components/Posts";


const BottomTab = createBottomTabNavigator();

const AllProps=React.createContext({
  showContacts:true,
  contacts:contacts
})

export default class BottomTabNavigator extends React.Component {
  render(){ 
    // console.log(this.props)
    return(
    <BottomTab.Navigator
      initialRouteName="TabOne"
      
      screenOptions={{ headerShown:false }}
    >
      
      <BottomTab.Screen
        name="Posts"
        component={PostNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-call" color={color} />
          ),
        }}
      /><BottomTab.Screen
      name="TabOne"
      component={TabOneNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <TabBarIcon name="ios-code" color={color} />
        ),
      }}
    />
      <BottomTab.Screen
        name="User"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator> 
  )}
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

 function TabOneNavigator() {
  const state=useSelector(state=>state);


  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="a"
        component={TabOneScreen}
        options={{ headerTitle: "a"}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}

const ContactsStack=createStackNavigator();

function ContactsNavigator(){
  return(
    <AllProps.Provider value={{showContacts:true,
      contacts:contacts}}>
      
    <ContactsStack.Navigator headerShown={false}>
      <ContactsStack.Screen
        name="Contactscreen"
        component={ContactScreen}
        options={{headerTitle:"ContactScreen"}}
        />
      <ContactsStack.Screen
        name="AddContact"
        component={AddContactScreen}
        options={{headerTitle:"Add contact"}}
        />
      
    </ContactsStack.Navigator>
        </AllProps.Provider>
  )
}
const PostStackNavigator=createStackNavigator();
function PostNavigator(){
  return(
    <PostStackNavigator.Navigator headerShown={false}>
      <PostStackNavigator.Screen name="Post"
      component={posts}
      options={{headerTitle:"Post"}}/>
    </PostStackNavigator.Navigator>
  ) 
}