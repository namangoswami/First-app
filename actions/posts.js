import * as api from '../api';

export const getPosts=()=> async(dispatch)=>{
    try {
        console.log('a');
        const {data}=await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload:data});
        console.log('b');
    } catch (error) {
        console.log('n',error);
    }
    
   // const action ={type:'FETCH_ALL', payload:[]}
}
export const createPost=(post)=>async (dispatch) => {
    try {
        //console.log(post._id);
        const {data} = await api.createPosts(post);
        dispatch({type:'CREATE', payload:data});
    } catch (error) {
        console.log(error); 
    }
}
export const deletePost=(post)=>async (dispatch)=>{
    try{
        
        console.log(post._id);
        const {data}=await api.deletePost(post);
        console.log("{data}", {data});
        dispatch({type:'DELETE', payload:data});
    }
    catch(err){
        console.log("Ankur is back")
        console.log(err);
    }
}
export const likePlus=(post, likers, likeCount)=>async (dispatch)=>{
    try{
        const {data}=await api.likePlus(post, likers, likeCount);
        dispatch({type:'LIKEPLUS', payload:data});
    }
    catch(err){
        console.log(err);
    }
}
export const updatePost=(id, updatedPost)=> async (dispatch)=>{
    try{
        const {data}=await api.updatePost(id, updatedPost);
        dispatch({type:'UPDATE', payload:data});
    }
    catch(err)
    {
        console.log(err);
    }
}

export const signIn=async dispatch=>{
    try {
        //console.log("NAMANANAAN");
        await api.login(id, password)
        .then(async (data)=>{//console.log(data, data.data);
            var {user}=data.data;
          //  console.log(data.status);
           // console.log("NAMAN", user);
           await dispatch('LOGIN', user)
        }) 
           //    console.log(user.payload);
        //return {data:user};
    }
    catch (err) {
        console.log("Error:",err);
        return null;
    }
}

export const signOut=async dispatch=>{
    try {
        //console.log("NAMANANAAN");
        dispatch('LOGOUT');
    }
    catch (err) {
        console.log("Error:",err);
        return null;
    }
}
export const clearAllPosts=()=>async dispatch=>{
    dispatch({type:'CLEAR_ALL', payload:[]});
}