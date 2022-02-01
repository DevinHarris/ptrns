export const searchAction = term => {

    return {
        type: 'GET_SEARCH_TERM',
        payload: term
    }
}