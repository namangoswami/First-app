export default (user='naman', action)=>{
    switch(action.type){
        case 'LOGIN':
                return user;
        case 'LOGOUT':
            return 'naman';
        default: return user;
    }
}