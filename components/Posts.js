import React, { useEffect, useState } from 'react'
import { View, Text } from './Themed';
import {  FlatList, ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../actions/posts';
import Post from './post';
import {ActivityIndicator} from 'react-native';


function Posts() {
    const dispatch=useDispatch();
    const [refresing, setRefreshing]=useState(false);
    const [loading, setLoading]=useState(false);
    const posts=useSelector(state=>state.posts);
    const handleRefresh=()=>{
      console.log('refresh')
      dispatch(getPosts());
    }
    useEffect(()=>{
      console.log('useffect')
        dispatch(getPosts());
        console.log('posts here', posts.length);
    }, [dispatch])
    useEffect(()=>{
      if(posts.length==0)
      {
        setLoading(true);
      }
      else
      {
        setLoading(false);
        setRefreshing(false);
      }
    }, [posts])
    const row=post=><Post key={post.item._id} post={post.item}></Post>
    if(loading)
    {
      return (
        <View>
         <ActivityIndicator size="large" color="#000000"/>
        </View>
      )
    }    
  return (
    <View>
        <FlatList
        data={posts}
        renderItem={row}
        refreshing={refresing}
        keyExtractor={(i, k)=>i._id}
        onRefresh={()=>console.log('refresh')}
        >
        </FlatList>
    </View>
  )
}

export default Posts