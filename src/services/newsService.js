import axios from "axios";


const SEARCH_URI = 'http://localhost:8000';

export const getNewsList = ({state, dispatch, filter}) => {

    dispatch.setter('newsReducer', {isLoadingNews: true});

    axios.post(`${SEARCH_URI}/list`, {filter})
        .then(
            res => {
                dispatch.setter('newsReducer', {...res.data});
            }
        )
        .then(
            () => dispatch.setter('newsReducer', {isLoadingNews: false})
        )

}