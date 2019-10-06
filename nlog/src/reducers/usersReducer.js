//default state to empty array for first call
export default (state = [], action) => {
    
    switch(action.type){
        case 'FETCH_USER':
            return [...state, action.payload];
        default :
            return state;    
    }
};