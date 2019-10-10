//default state to empty array for first call
export default (state = [], action) => {
    
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default :
            return state;    
    }
};