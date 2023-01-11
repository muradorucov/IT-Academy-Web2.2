export const addToState = (payload) => {
    return { type: 'Increment', payload: payload }
}


export const removeToState = (payload) => {
    return { type: 'Decrement', payload: payload }
}


export const addToList = (payload) => {
    return { type: 'ADD_TO_LIST', payload: payload }
}
