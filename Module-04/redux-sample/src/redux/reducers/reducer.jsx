

export const CounterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 10;
        default:
            return state
    }
}
