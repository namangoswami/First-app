import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { View, Text } from './Themed'
import {Card} from 'react-native-elements'
import moment from 'moment';


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      height: 300,
      width:398,
      position:"absolute"
    },
    postContainer:{
        display:"flex",
        flex:1,
        position:"relative",
        padding:0,
        marginVertical:20
    },
    post:{
        position:"relative",
        overflow:"hidden",
        flex:1,
    },
    postImage:{
        display:"flex",
        overflow:"hidden",
        height:300,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:20
    },
    postName:{
        top:0,
        left:0,
        padding:3,
        paddingLeft:10,
        backgroundColor:"transparent"
    },
    postText:{
        paddingHorizontal:10
    },
    tags:{
        color:'skyblue'
    }
  });

function Post({post}) {
  return (
    <View style={styles.postContainer}>
        <View style={styles.post}>
        <View style={styles.postName}>
            <Text>
                {post.creator}
            </Text>
        {/* <Text>
            {moment(post.createdAt).fromNow()}
        </Text> */}
        </View>
            {post.selectedFile!=""&&(<View style={styles.postImage}>
            <Image style={styles.logo} source={{uri:post.selectedFile}} />
            </View>
            )}
        
            <View style={styles.postText}>
        <Text style={styles.title}>
            {post.title}
        </Text>
        <Text>
            {post.message}
        </Text>
        <Text style={styles.tags}>
            {post.tags.map(tag=>`#${tag}`)}
        </Text>
            </View>
        </View>

    </View>
  )
}

export default Post