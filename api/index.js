import axios from 'axios';

const url='http://192.168.149.220:5000/posts';
const loginUrl='http://192.168.149.220:5000/posts'
export const fetchPosts = () => axios.get(url);
export const fetchPostsTemp=()=>({data:{posts:[{name:"what works and ?"}]}})
export const createPosts=(newPost)=>axios.post(url, newPost);
export const deletePost=(post)=>axios.post(url+"/"+post._id+"/delete");
export const likePlus=(post, likers, likeCount)=>axios.post(url+'/'+post._id+'/likePlus', {likers:likers, likeCount:likeCount});
export const updatePost=(id, updatedPost)=>axios.post(url+'/'+id+'/update', updatedPost);
export const login=(id, password)=>axios.post(loginUrl+'/signin', {id:id, password:password});
