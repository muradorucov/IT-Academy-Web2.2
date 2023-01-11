export const ListReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_LIST') {
        return [...state, action.payload]
    } else {
        return state
    }
}