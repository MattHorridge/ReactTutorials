import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'lodash';



export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        const userIds =_.uniq(_.map(getState().posts, 'userId'));
        userIds.forEach(id => dispatch(fetchUser(id)));
    }
}


export const fetchPosts = () => {

    return async (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts');
        const action = () => {
            return {type: 'FETCH_POSTS', payload: response.data}
        }
        dispatch(action())
    }

  

};

export const fetchUser = (id) => {
    return async (dispatch) => {
       
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    const action = () => {
        return {type: 'FETCH_USER', payload: response.data}
    }
    dispatch(action())
    }
};





//Memoise fetch
/*
export const fetchUser = (id) => {
    return (dispatch) => {
        _fetchUser(id, dispatch);
    }
};

//Memoise fetch
const  _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
        const action = () => {
            return {type: 'FETCH_USER', payload: response.data}
        }
        dispatch(action())
});

*/