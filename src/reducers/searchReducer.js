export default (state = '', action) => {
    switch (action.type) {
        case 'GET_SEARCH_TERM':
            return [...state, action.payload]
        
        default:
            return state;
    }
}