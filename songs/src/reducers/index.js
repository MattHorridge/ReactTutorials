import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'test1', duration: '4:00'},
        {title: 'test2', duration: '4:25'},
        {title: 'test3', duration: '1:00'}
    ]
};


const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED')
    {
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});